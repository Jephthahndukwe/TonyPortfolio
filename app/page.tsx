"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollLink } from "@/components/scroll-link"
import { DownloadResumeButton } from "@/components/download-resume-button"
import { MobileMenu } from "@/components/mobile-menu"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-dark text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-navy-light bg-navy-dark/95 backdrop-blur supports-[backdrop-filter]:bg-navy-dark/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-blue">Tose Anthony Sejiro</div>
          <nav className="hidden md:flex items-center gap-6">
            <ScrollLink href="#about" className="text-sm font-medium text-white hover:text-blue">
              About
            </ScrollLink>
            <ScrollLink href="#experience" className="text-sm font-medium text-white hover:text-blue">
              Experience
            </ScrollLink>
            <ScrollLink href="#skills" className="text-sm font-medium text-white hover:text-blue">
              Skills
            </ScrollLink>
            <ScrollLink href="#projects" className="text-sm font-medium text-white hover:text-blue">
              Projects
            </ScrollLink>
            <ScrollLink href="#contact" className="text-sm font-medium text-white hover:text-blue">
              Contact
            </ScrollLink>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-blue hover:bg-blue-dark text-white" asChild>
              <ScrollLink href="#contact">Hire Me</ScrollLink>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="container relative z-10 flex flex-col items-center">
            <p className="text-blue mb-2">Hello, Welcome to my page</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 text-white">TOSE, Anthony Sejiro</h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">Senior Full-Stack Developer</h2>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <DownloadResumeButton />
              <Button className="bg-blue hover:bg-blue-dark text-white" asChild>
                <ScrollLink href="#contact">Contact</ScrollLink>
              </Button>
            </div>

            <div className="mt-8 max-w-md mx-auto">
              <Image
                src="/images/profile.png"
                alt="Tose Anthony Sejiro"
                width={400}
                height={500}
                className="mx-auto rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-navy">
          <div className="container">
            <h2 className="section-heading">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-4">
                  I'm a Senior Full-Stack Developer with over 10 years of experience in building, deploying, and
                  maintaining scalable web and mobile applications. I specialize in developing high-performance frontend
                  interfaces with React, Next.js, and React Native, and robust backend systems using Node.js, Express,
                  and cloud services like AWS and Firebase. I've successfully delivered high-impact products across both
                  platforms for leading Nigerian tech companies, including All-tech, Bahoju Tech, Adenian, Andela, and
                  Hotels.ng.
                </p>
                <p className="text-gray-300 mb-4">
                  My expertise spans frontend and backend development, system architecture, DevOps, and team leadership.
                  I'm passionate about creating efficient, user-friendly applications that solve real-world problems.
                </p>
                <p className="text-gray-300">
                  When I'm not coding, I enjoy mentoring junior developers and staying up-to-date with the latest
                  technologies and best practices in the industry.
                </p>
              </div>
              <div className="bg-navy-light rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue" />
                    <a href="mailto:Tonylyon0007@gmail.com" className="text-gray-300 hover:text-blue">
                      Tonylyon0007@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue" />
                    <a href="tel:+2348101070424" className="text-gray-300 hover:text-blue">
                      +234 810 107 0424
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-blue" />
                    <a
                      href="https://github.com/tonylyon7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue"
                    >
                      github.com/tonylyon7
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue" />
                    <a
                      href="https://tosetonyportfolio.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue"
                    >
                      tosetonyportfolio.netlify.app
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-blue" />
                    <a
                      href="https://linkedin.com/in/tose-anthony"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue"
                    >
                      linkedin.com/in/tose-anthony
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-navy-dark">
          <div className="container">
            <h2 className="section-heading">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard
                title="Frontend"
                skills={["JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "TailwindCSS"]}
              />
              <SkillCard title="Backend" skills={["Node.js", "Express.js", "REST APIs", "GraphQL"]} />
              <SkillCard title="Databases" skills={["MongoDB", "PostgreSQL", "MySQL", "Firebase"]} />
              <SkillCard title="Mobile" skills={["React Native", "Flutter", "Expo", "Swift"]} />
              <SkillCard title="DevOps" skills={["Docker", "AWS", "CI/CD", "GitHub Actions"]} />
              <SkillCard
                title="Other"
                skills={["Git", "Authentication (JWT, OAuth2)", "App Store & Play Store Deployment"]}
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-navy">
          <div className="container">
            <h2 className="section-heading">Work Experience</h2>
            <div className="space-y-8">
              <ExperienceCard
                title="Senior Full-Stack Developer"
                company="Freelance"
                period="Oct 2022 - Present"
                location="Lagos, Nigeria"
                description={[
                  "Developed and deployed 15+ full-stack web and mobile applications using React.js, Next.js, and React Native",
                  "Created scalable backends with Node.js & MongoDB",
                  "Designed responsive UIs with React & Next.js",
                  "Mentored junior developers",
                ]}
              />

              <ExperienceCard
                title="Senior Software Engineer"
                company="All-Tech"
                period="Feb 2021 - Sep 2022"
                location="Ikeja, Lagos"
                description={[
                  "Designed microservices and improved uptime",
                  "Refactored frontend using Next.js and TailwindCSS",
                  "Implemented CI/CD with GitHub Actions",
                ]}
              />

              <ExperienceCard
                title="Backend Developer"
                company="Adenian"
                period="May 2019 - Jan 2021"
                location="Lekki, Lagos"
                description={[
                  "Built onboarding tools and dashboards",
                  "Integrated APIs and created reusable components",
                  "Refactored legacy systems into Node.js microservices",
                  "Built reconciliation APIs",
                ]}
              />

              <ExperienceCard
                title="Software Engineer (Contract)"
                company="Andela"
                period="July 2019 - Dec 2019"
                location="Lagos, Nigeria"
                description={["Built SaaS solutions with MERN stack", "Led sprint planning and documentation"]}
              />

              <ExperienceCard
                title="Junior Developer"
                company="Code-learner"
                period="July 2017 - Nov 2018"
                location="Lagos, Nigeria"
                description={["Built some websites", "Worked on backend APIs"]}
              />

              <ExperienceCard
                title="Intern & Instructor"
                company="Abisec Computers"
                period="Jan 2015 - May 2016"
                location="Lagos, Nigeria"
                description={[
                  "Taught computer basics and built small web tools",
                  "Assisted in building local websites",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-navy-dark">
          <div className="container">
            <h2 className="section-heading">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard."
                technologies={["Next.js", "Node.js", "MongoDB", "Stripe"]}
              />

              <ProjectCard
                title="Real Estate App"
                description="Mobile application for property listings with map integration and virtual tours."
                technologies={["React Native", "Firebase", "Google Maps API"]}
              />

              <ProjectCard
                title="Financial Dashboard"
                description="Interactive dashboard for financial data visualization and analysis."
                technologies={["React.js", "D3.js", "Express.js", "PostgreSQL"]}
              />

              <ProjectCard
                title="Learning Management System"
                description="Platform for online courses with video streaming and progress tracking."
                technologies={["Next.js", "Node.js", "MongoDB", "AWS S3"]}
              />

              <ProjectCard
                title="Healthcare Appointment System"
                description="Web application for scheduling and managing healthcare appointments."
                technologies={["React.js", "Express.js", "MySQL", "Socket.io"]}
              />

              <ProjectCard
                title="Inventory Management System"
                description="System for tracking inventory, sales, and generating reports."
                technologies={["Next.js", "Node.js", "PostgreSQL", "Redis"]}
              />
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-20 bg-navy">
          <div className="container">
            <h2 className="section-heading">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-blue pl-4 py-1">
                    <h4 className="font-medium text-white">Lagos State University</h4>
                    <p className="text-sm text-gray-300">B.Sc. in Mathematics, 2016 - 2020</p>
                  </div>
                  <div className="border-l-2 border-blue pl-4 py-1">
                    <h4 className="font-medium text-white">Code Learner Institute</h4>
                    <p className="text-sm text-gray-300">Full-Stack Web Development, 2017</p>
                  </div>
                  <div className="border-l-2 border-blue pl-4 py-1">
                    <h4 className="font-medium text-white">Abisec Computers</h4>
                    <p className="text-sm text-gray-300">Diploma in Data Processing, 2015 - 2016</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Certifications</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-blue pl-4 py-1">
                    <h4 className="font-medium text-white">AWS Certified Developer - Associate</h4>
                  </div>
                  <div className="border-l-2 border-blue pl-4 py-1">
                    <h4 className="font-medium text-white">Meta Back-End Developer</h4>
                    <p className="text-sm text-gray-300">Coursera (2023)</p>
                  </div>
                  <div className="border-l-2 border-blue pl-4 py-1">
                    <h4 className="font-medium text-white">JavaScript Algorithms and Data Structures</h4>
                    <p className="text-sm text-gray-300">freeCodeCamp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-navy-dark">
          <div className="container">
            <h2 className="section-heading">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-6">
                  I'm currently available for freelance work and full-time positions. If you have a project that needs
                  my expertise or if you're looking to hire, feel free to reach out.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue" />
                    <a href="mailto:Tonylyon0007@gmail.com" className="text-gray-300 hover:text-blue">
                      Tonylyon0007@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue" />
                    <a href="tel:+2348101070424" className="text-gray-300 hover:text-blue">
                      +234 810 107 0424
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue" />
                    <span className="text-gray-300">Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-navy-light bg-navy px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-navy-light bg-navy px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-navy-light bg-navy px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-navy-light bg-navy px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full bg-blue hover:bg-blue-dark text-white">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-light py-6 md:py-0 bg-navy">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Tose Anthony Sejiro. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="text-gray-300 hover:text-blue">
              <a href="https://github.com/tonylyon7" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-gray-300 hover:text-blue">
              <a href="https://linkedin.com/in/tose-anthony" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-gray-300 hover:text-blue">
              <a href="mailto:Tonylyon0007@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, skills }) {
  return (
    <Card className="overflow-hidden bg-navy border-navy-light">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-3 text-white">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-navy-light text-blue-light">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ExperienceCard({ title, company, period, location, description }) {
  return (
    <Card className="overflow-hidden border-l-4 border-l-blue bg-navy-light border-navy">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg text-white">{title}</h3>
            <p className="text-blue">{company}</p>
          </div>
          <div className="text-sm text-gray-300 mt-2 md:mt-0 md:text-right">
            <p>{period}</p>
            <p>{location}</p>
          </div>
        </div>
        <ul className="space-y-2 list-disc pl-5">
          {description.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ title, description, technologies }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-navy-light border-navy">
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="border-blue text-blue-light">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function Globe(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}
