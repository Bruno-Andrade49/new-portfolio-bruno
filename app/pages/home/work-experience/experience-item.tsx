'use client'

import { TechBadge } from '@/app/components/tech-badge'
import { WorkExperience } from '@/app/types/work-experience'
import Image from 'next/image'
import { RichText } from '../rich-text'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'

type ExperienceItemProps = {
  experience: WorkExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const startDate = new Date(experience.startDate)

  const formattedStartDate = format(startDate, 'MMM yyy', { locale: ptBR })
  const formattedEndDate = experience.endDate
    ? format(new Date(experience.endDate), 'MMM yyy', { locale: ptBR })
    : 'o momento'

  const end = experience.endDate ? new Date(experience.endDate) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)

  const monthsRemaining = months * 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center flex-col gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={experience?.companyLogo?.url}
            width={40}
            height={40}
            alt={`Logo da empresa ${experience?.companyName}`}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={experience.companyUrl}
            target="_blank"
            className="text-gray-500 hover:text-red-500 transition-colors"
            rel="noreferrer"
          >
            @{experience.companyName}
          </a>
          <h4 className="text-gray-300">{experience.role} </h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • {formattedDuration}
          </span>
          <div className="text-gray-400">
            <RichText content={experience.description.raw} />
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {experience.technologies.map((tech, i) => (
            <TechBadge
              key={`experience-${experience.companyName}-tech-${tech.name}`}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
