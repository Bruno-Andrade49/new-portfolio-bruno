import { Project } from '@/app/types/projects'
import Image from 'next/image'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map((x) => x.name).join(', ')

  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-red-800 overflow-hidden border-2 hover:border-red-500 opacity-70 hover:opacity-100 transition-all">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src={project.thumbnail.url}
          unoptimized
          alt={`Thumbnail do projeto ${project.title}`}
          className="w-full h-full object-cover transition-all hover:scale-110 duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-red-500 transition-all">
          {project.title}
        </strong>
        <p className="mt-2 text-red-400 line-clamp-4">
          {project.shortDescription}
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {technologies}
        </span>
      </div>
    </div>
  )
}
