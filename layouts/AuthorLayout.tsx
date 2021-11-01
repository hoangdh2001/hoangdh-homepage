import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Spotify from '@/components/Spotify'
import Breadcrumb from '@/components/Breadcrumb'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

// ─── Skills data ──────────────────────────────────────────────────
const skills = {
  'iOS & Apple': [
    'Swift',
    'Objective-C',
    'SwiftUI',
    'UIKit',
    'HealthKit',
    'Vision',
    'WKWebView',
    'Swift Macros',
    'Swift Concurrency',
  ],
  Architecture: ['TCA', 'MVVM', 'MVVM-C', 'Clean Architecture', 'BLoC'],
  'Cross-Platform': ['Flutter', 'Dart', 'Android SDK', 'Jetpack'],
  'Networking & Auth': [
    'RESTful API',
    'WebSocket',
    'URLSession',
    'Firebase',
    'Face ID/Touch ID',
    'AES-256',
    'JWT',
  ],
  'CI/CD & Tooling': [
    'Fastlane',
    'GitLab CI/CD',
    'GitHub Actions',
    'App Store Connect',
    'TestFlight',
    'XCTest',
  ],
  'DevOps & Backend': [
    'Docker',
    'Kubernetes',
    'Spring Boot',
    'Kafka',
    'PostgreSQL',
    'MongoDB',
    'Redis',
  ],
}

// ─── Badge component ───────────────────────────────────────────────
const SkillBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-md border border-primary-500/30 bg-primary-500/10 px-2 py-0.5 text-xs font-medium text-primary-600 dark:text-primary-400">
    {label}
  </span>
)

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, email, linkedin, github } = content

  return (
    <>
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <Breadcrumb />
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          {/* ── LEFT PANEL ─────────────────────────────────────── */}
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
            </div>
            <Spotify />
          </div>

          {/* ── RIGHT PANEL ────────────────────────────────────── */}
          <div className="prose prose-sm max-w-none dark:prose-invert xl:col-span-2">
            <div className="space-y-8">
              {/* Bio */}
              <div>
                <h2 className="border-b-2 border-gray-200 pb-2 text-xl font-bold leading-8 tracking-tight dark:border-gray-700">
                  Bio
                </h2>
                {children}
              </div>

              {/* View Resume Button */}
              <div className="not-prose pt-2 text-center">
                <a
                  href="/static/resume/DoHuyHoang_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View Resume
                </a>
              </div>

              {/* Experience */}
              <div className="not-prose">
                <h2 className="border-b-2 border-gray-200 pb-2 text-xl font-bold leading-8 tracking-tight dark:border-gray-700">
                  Experience
                </h2>
                <ul className="mt-4 space-y-4 text-sm text-gray-500 dark:text-gray-400">
                  {/* IMT Solutions — DMS Viettel */}
                  <li>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <Image
                          src="/static/images/imt.png"
                          alt="IMT Solutions logo"
                          width={40}
                          height={40}
                          className="mt-0.5 h-10 w-10 shrink-0 rounded-md object-contain"
                        />
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                            Mobile Engineer
                          </h3>
                          <p className="text-gray-500">
                            <a
                              href="https://imt-soft.com"
                              className="flex items-center text-blue-500 no-underline hover:text-blue-700"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              IMT Solutions
                            </a>
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-sm text-gray-400">Aug 2022 – Jan 2026</span>
                    </div>
                    {/* Sub-projects */}
                    <ul className="mt-3 space-y-3 border-l-2 border-gray-100 pl-4 dark:border-gray-800">
                      <li>
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">
                              DMS Viettel
                            </h4>
                            <p className="text-xs text-gray-400">
                              Enterprise Distribution Management — Inventory, Orders & Logistics
                            </p>
                          </div>
                          <span className="shrink-0 text-xs text-gray-400">
                            Sep 2025 – Jan 2026
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">JRA</h4>
                            <p className="text-xs text-gray-400">
                              Real-time Horse Racing & Betting — 1M+ Active Users
                            </p>
                          </div>
                          <span className="shrink-0 text-xs text-gray-400">
                            Aug 2024 – Aug 2025
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">
                              Dacadoo
                            </h4>
                            <p className="text-xs text-gray-400">
                              Multi-tenant Digital Health Platform — 10+ Countries
                            </p>
                          </div>
                          <span className="shrink-0 text-xs text-gray-400">
                            Jan 2023 – Jul 2024
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Skills — THÊM MỚI */}
              <div className="not-prose">
                <h2 className="border-b-2 border-gray-200 pb-2 text-xl font-bold leading-8 tracking-tight dark:border-gray-700">
                  Skills
                </h2>
                <div className="mt-4 space-y-3">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {category}
                      </span>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {items.map((skill) => (
                          <SkillBadge key={skill} label={skill} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="not-prose">
                <h2 className="border-b-2 border-gray-200 pb-2 text-xl font-bold leading-8 tracking-tight dark:border-gray-700">
                  Education
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <Image
                        src="/static/images/iuh.png"
                        alt="IUH logo"
                        width={40}
                        height={40}
                        className="mt-0.5 h-10 w-10 shrink-0 rounded-md object-contain"
                      />
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                          Bachelor's Degree in Software Engineering
                        </h3>
                        <p className="text-gray-500">
                          <a
                            href="https://iuh.edu.vn"
                            className="flex items-center text-blue-500 no-underline hover:text-blue-700"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Industrial University of Ho Chi Minh City (IUH)
                          </a>
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-sm text-gray-400">2019 – 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ── END RIGHT PANEL ─────────────────────────────────── */}
        </div>
      </div>
    </>
  )
}
