export type Project = {
  title: string
  href: string
  summary: string
  tags: string[]
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Acme Analytics',
    href: '#',
    summary: 'Marketing site revamp with a 40% faster LCP.',
    tags: ['Next.js', 'Tailwind', 'SEO'],
  },
  {
    title: 'Northwave Coffee',
    href: '#',
    summary: 'Brand-new online presence and menu landing page.',
    tags: ['Design', 'Accessibility'],
  },
  {
    title: 'Stoke FC Fan Hub',
    href: '#',
    summary: 'Fan site with live fixtures and news.',
    tags: ['TypeScript', 'API'],
  },
]
