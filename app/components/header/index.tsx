'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-item'
import { motion } from 'framer-motion'

const NAV_ITENS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 w-full z-10 h-28 flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={106}
            height={19}
            src="/images/logo-2.png"
            alt="Logo BrunoA"
          />
        </Link>
        <nav className="flex items-center gap-10">
          {NAV_ITENS.map((item) => (
            <NavItem key={item.label} href={item.href} label={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
