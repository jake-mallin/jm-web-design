'use client'

import { motion } from 'framer-motion'

import Footer from './Footer'
import Header from './Header'

export default function Hero() {
  return (
    <section className="h-screen w-screen p-4 md:p-6">
      <div className="bg-jm-primary-300 relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl">
        <motion.div
          aria-hidden
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="before:bg-jm-primary-300/70 absolute inset-0 rounded-3xl bg-[url(/images/hero-bg.jpg)] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:rounded-3xl"
        />

        <Header />
        <div className="flex w-full flex-col items-center gap-6 text-center md:gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-inverse xs:text-4xl relative w-full text-center text-3xl leading-none font-medium sm:text-5xl md:text-6xl"
          >
            Websites that{' '}
            <span className="relative">
              <motion.span
                initial={{ width: '0%' }}
                animate={{ width: '110%' }}
                transition={{ duration: 0.4, delay: 1.2, ease: 'easeOut' }}
                className="hero-gradient absolute top-2.5 -left-3 mt-1.25 ml-2 h-[65%] -rotate-2"
                aria-hidden
              />
              <span className="relative">work</span>
            </span>
            <br />
            as{' '}
            <span className="relative">
              <motion.span
                initial={{ width: '0%' }}
                animate={{ width: '110%' }}
                transition={{ duration: 0.4, delay: 2, ease: 'easeOut' }}
                className="hero-gradient absolute top-3.5 -left-3 mt-1.25 ml-2 h-[65%] -rotate-2"
                aria-hidden
              />
              <span className="relative">good</span>
            </span>{' '}
            as they look
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="relative flex gap-6"
          >
            <a href="#work" className="btn-outline rounded-full">
              View my work
            </a>
            <a href="#contact" className="btn-accent rounded-full">
              Get in touch
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-0 w-full"
        >
          <Footer />
        </motion.div>
      </div>
    </section>
  )
}
