interface ProjectPageProps {
    slug: string
    imgSrc: string
    title: string
    projectUrl: string
    customClass?: string
}

export const ProjectPage = ({ slug, imgSrc, title, projectUrl, customClass = "" }: ProjectPageProps) => (
    <div className={`project-page ${customClass}`} id={slug}>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <img src={imgSrc} alt={title} />
            <h2>{title}</h2>
        </a>
    </div>
)