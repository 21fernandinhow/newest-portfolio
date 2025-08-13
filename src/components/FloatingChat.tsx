import { useEffect, useState, useRef } from "react";
import { useMessages } from "../context/MessagesContext";

export const FloatingChat = () => {
  const { messages } = useMessages();
  const [positions, setPositions] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const filteredMessages = messages.filter((msg) => msg.role !== "system")

  useEffect(() => {
    setPositions((old) => {
      if (filteredMessages.length > old.length) {
        const increment = window.innerWidth < 350 ? 220 : window.innerWidth < 500 ? 180 : 90;
        const updatedOld = old.map(pos => pos + increment);
        return [...updatedOld, 0];
      }
      return old;
    });
  }, [filteredMessages]);

  useEffect(() => {
    let rafId: number;
    let lastTime: number | null = null;
    const speed = 10; // px per second

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      setPositions((oldPositions) => oldPositions.map((pos) => pos + speed * delta));

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="chat-container"
    >
      <div className="top-line"></div>
      {filteredMessages
        .map((msg, index) => (
          <div
            key={index}
            style={{
              bottom: 0,
              transform: `translateY(-${positions[index] ?? 0}px)`,
            }}
            className={`chat-message glass-background-container ${msg.role === "user" ? "user-message" : ""}`}
          >
            {msg.role !== "user" && <h4>Samantha</h4>}
            <p>{msg.content}</p>
          </div>
        ))}
    </div>
  );
};