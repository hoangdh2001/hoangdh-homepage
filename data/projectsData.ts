interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
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
      '7-service Spring Boot and NestJs microservices backend with Kafka async event streaming. Deployed to Kubernetes via Helm + GitLab CI/CD pipelines.',
    imgSrc: '',
    href: 'https://github.com/hoangdh2001/octopus-be',
  },
  {
    title: 'Octopus — Real-time Team Collaboration Mobile Client',
    description:
      'Full-stack real-time collaboration platform. Flutter mobile client with Clean Architecture (Data/Domain/Presentation), real-time messaging via Socket.io, push notifications and file sharing.',
    imgSrc: '',
    href: 'https://github.com/hoangdh2001/octopus-mobile',
  },
]

export default projectsData
