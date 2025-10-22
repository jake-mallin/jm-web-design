'use client'

import classNames from 'classnames'
import { motion, useReducedMotion } from 'framer-motion'

type LogoProps = {
  color?: 'black' | 'white' | 'accent'
  shadow?: boolean
  className?: string
  /** Enable stroke draw animation */
  animateDraw?: boolean
  /** Seconds for the stroke animation */
  duration?: number
  /** Seconds to delay before starting */
  delay?: number
  /** Stroke width during draw (defaults to SVG’s 18) */
  outlineStrokeWidth?: number
}

// === Centerline stroke path (your new SVG) ===
const STROKE_D =
  'M344.21,233.26s-32.55-21.82-39.51-49.18c-7.62-29.99,4.03-63.69,27.41-103.2S387.75,6.7,407.91,9.12s29.83,12.09,29.03,41.12-18.54,103.2-75.79,352.33-110.46,506.33-110.46,506.33c0,0-24.19,139.48-91.91,152.38S16.07,1004.84,10.43,888.74s3.23-211.24,67.73-312.02c63.79-99.67,159.13-195.4,434.2-235.71,4.04-.59,7.21,3.43,5.66,7.21-11.61,28.33-47.99,122.47-57.47,211.11-.27,2.51,3.08,3.6,4.33,1.41,16.37-28.84,67-116.1,106.65-163.88,1.66-2,4.92-.85,4.95,1.76.36,28.97,2.89,131.36,20.9,121.66,20.96-11.29,39.54-75.27,79.82-129.18,18.54-24.82,18.54,19.53,18.54,19.53,0,0-6.45,68.53,40.31,78.21,56.68,11.73,107.23-79.82,107.23-79.82'

export default function Logo({
  color = 'black',
  shadow = false,
  className,
  animateDraw = false,
  duration = 1.8,
  delay = 0,
  outlineStrokeWidth = 22, // matches your SVG’s stroke-width
}: LogoProps) {
  const prefersReducedMotion = useReducedMotion()

  const svgClass = classNames(
    'h-16 w-auto',
    {
      'text-black': color === 'black',
      'text-white': color === 'white',
      'text-jm-accent': color === 'accent',
      'drop-shadow-logo': shadow,
    },
    className
  )

  // Static fallback (or reduced motion): show the final stroked logo
  if (prefersReducedMotion || !animateDraw) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 852.28 1071.81"
        className={svgClass}
        aria-label="Logo"
      >
        <path
          d={STROKE_D}
          fill="none"
          stroke="currentColor" // inherits from text-* classes
          strokeWidth={outlineStrokeWidth}
          strokeLinecap="round"
          strokeMiterlimit={10}
        />
      </svg>
    )
  }

  // Animated stroke draw
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 852.28 1071.81"
      className={svgClass}
      aria-label="Logo (animated)"
    >
      <motion.path
        d={STROKE_D}
        fill="none"
        stroke="currentColor"
        strokeWidth={outlineStrokeWidth}
        strokeLinecap="round"
        strokeMiterlimit={10}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration, delay, ease: 'easeInOut' }}
      />
    </motion.svg>
  )
}
