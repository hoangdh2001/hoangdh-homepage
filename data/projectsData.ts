interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Một Đóa Tháng Ba — Commerce & Operations Platform',
    description:
      'Independent full-stack project built with NestJS, Next.js, TypeScript and PostgreSQL. Customer storefront and admin application for products, orders, inventory and customer management. Includes Prisma migrations, SQL search, Google sign-in, Pancake / Meta Ads data synchronization, and Docker deployment through Coolify.',
    imgSrc: '',
    href: 'https://tiemhoamotdoathangba.com',
  },
  {
    title: 'Apple app automation test - Claude Plugin',
    description:
      'AI-driven UI test automation for iOS, iPadOS, and macOS apps — powered by Claude Code, xcodebuildmcp, and AXe CLI.',
    imgSrc: '',
    href: 'https://github.com/hoangdh2001/apple-app-ui-test-automation',
  },
  {
    title: 'FocusLens — AI-Powered Distraction Blocker',
    description:
      'iOS distraction blocker using on-device Core ML to classify apps as focus, neutral, or distraction. Built with SwiftUI + TCA 1.x (unidirectional data flow), SwiftData with @ModelActor for thread-safe persistence, Screen Time API for app blocking, Live Activity on Dynamic Island, WidgetKit home screen widget, and Swift Charts insights. 20 TCA TestStore tests across 8 suites with GitHub Actions CI.',
    imgSrc: '',
    href: 'https://github.com/hoangdh2001/FocusLens',
  },
  {
    title: 'Octopus — Real-time Team Collaboration Backend',
    description:
      'Backend services developed with NestJS and Spring Boot, including JWT authentication, RBAC and Kafka integration. Deployed to Kubernetes via Helm and GitLab CI/CD.',
    imgSrc: '',
    href: 'https://gitlab.com/nhom-40-khoa-luan-tot-nghiep/octopus-be',
  },
  {
    title: 'Octopus — Real-time Team Collaboration Mobile Client',
    description:
      'Full-stack real-time collaboration platform. Flutter mobile client with Clean Architecture (Data/Domain/Presentation), real-time messaging via Socket.IO, push notifications and file sharing.',
    imgSrc: '',
    href: 'https://gitlab.com/nhom-40-khoa-luan-tot-nghiep/octopus-mobile',
  },
  {
    title: 'hoangdh — Personal Portfolio Website',
    description:
      'Personal website/blog for Do Huy Hoang (@hoangdh2001), designed to showcase blog posts, projects, and personal information. Built with Next.js. Hosted on my Coolify.',
    imgSrc: '',
    href: 'https://github.com/hoangdh2001/hoangdh-homepage',
  },
]

export default projectsData
