"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function DownloadResumeButton() {
  const [jsPDFLoaded, setJsPDFLoaded] = useState(false)

  // Dynamically load jsPDF
  useEffect(() => {
    const loadJsPDF = async () => {
      try {
        // Load jsPDF script dynamically
        const script = document.createElement("script")
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
        script.async = true
        script.onload = () => setJsPDFLoaded(true)
        document.body.appendChild(script)
      } catch (error) {
        console.error("Failed to load jsPDF:", error)
      }
    }

    loadJsPDF()

    return () => {
      // Clean up script if component unmounts
      const script = document.querySelector(
        'script[src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"]',
      )
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleDownload = () => {
    if (!jsPDFLoaded || !window.jspdf) {
      alert("PDF generator is still loading. Please try again in a moment.")
      return
    }

    try {
      // Create a new PDF document
      const { jsPDF } = window.jspdf
      const doc = new jsPDF()

      // Set font styles
      doc.setFont("helvetica", "bold")
      doc.setFontSize(16)
      doc.setTextColor(0, 102, 204) // Blue color for the name
      doc.text("TOSE ANTHONY SEJIRO", 20, 20)

      doc.setFont("helvetica", "normal")
      doc.setFontSize(12)
      doc.setTextColor(51, 51, 51) // Dark gray for regular text
      doc.text("Senior Full-Stack Developer", 20, 28)
      doc.text("Lagos, Nigeria | +2348101070424 | Tonylyon0007@gmail.com", 20, 36)
      doc.text("GitHub: github.com/tonylyon7 | Portfolio: tosetony.netlify.app", 20, 44)

      // Professional Summary
      doc.setFont("helvetica", "bold")
      doc.setFontSize(14)
      doc.setTextColor(0, 102, 204) // Blue color for headings
      doc.text("PROFESSIONAL SUMMARY", 20, 56)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.setTextColor(51, 51, 51) // Dark gray for regular text
      const summary =
        "Seasoned and highly skilled Senior Full-Stack Developer with 10+ years of experience building, deploying, and maintaining scalable web and mobile applications. Proven track record of delivering high-impact projects at leading Nigerian tech companies including All-tech, Adenian, Andela, and Hotel.ng. Expertise in frontend and backend development, system architecture, DevOps, and team leadership."
      const summaryLines = doc.splitTextToSize(summary, 170)
      doc.text(summaryLines, 20, 64)

      // Core Skills
      doc.setFont("helvetica", "bold")
      doc.setFontSize(14)
      doc.setTextColor(0, 102, 204) // Blue color for headings
      doc.text("CORE SKILLS", 20, 84)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.setTextColor(51, 51, 51) // Dark gray for regular text
      const skills =
        "JavaScript, TypeScript, Node.js, Express.js, React.js, Next.js, Redux, MongoDB, PostgreSQL, MySQL, REST APIs, GraphQL, Docker, AWS, Firebase, React Native, Expo, Swift, Git, GitHub Actions, TailwindCSS, Authentication (JWT, OAuth2), App Store & Play Store Deployment, CI/CD"
      const skillsLines = doc.splitTextToSize(skills, 170)
      doc.text(skillsLines, 20, 92)

      // Professional Experience
      doc.setFont("helvetica", "bold")
      doc.setFontSize(14)
      doc.setTextColor(0, 102, 204) // Blue color for headings
      doc.text("PROFESSIONAL EXPERIENCE", 20, 110)

      // Job 1
      let yPos = 118
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.setTextColor(51, 51, 51) // Dark gray for regular text
      doc.text("Senior Full-Stack Developer | Freelance | Lagos, Nigeria | Oct 2022 - Present", 20, yPos)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      yPos += 8
      doc.text(
        "• Developed and deployed 15+ full-stack web and mobile applications using React.js, Next.js, and React Native",
        25,
        yPos,
      )
      yPos += 6
      doc.text("• Created scalable backends with Node.js & MongoDB", 25, yPos)
      yPos += 6
      doc.text("• Designed responsive UIs with React & Next.js", 25, yPos)
      yPos += 6
      doc.text("• Mentored junior developers", 25, yPos)

      // Job 2
      yPos += 10
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("Senior Software Engineer | All-Tech | Ikeja, Lagos | Feb 2021 - Sep 2022", 20, yPos)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      yPos += 8
      doc.text("• Designed microservices and improved uptime", 25, yPos)
      yPos += 6
      doc.text("• Refactored frontend using Next.js and TailwindCSS", 25, yPos)
      yPos += 6
      doc.text("• Implemented CI/CD with GitHub Actions", 25, yPos)

      // Job 3
      yPos += 10
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("Backend Developer | Adenian | Lekki, Lagos | May 2019 - Jan 2021", 20, yPos)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      yPos += 8
      doc.text("• Built onboarding tools and dashboards", 25, yPos)
      yPos += 6
      doc.text("• Integrated APIs and created reusable components", 25, yPos)
      yPos += 6
      doc.text("• Refactored legacy systems into Node.js microservices", 25, yPos)
      yPos += 6
      doc.text("• Built reconciliation APIs", 25, yPos)

      // Job 4
      yPos += 10
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("Software Engineer (Contract) | Andela | July 2019 - Dec 2019", 20, yPos)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      yPos += 8
      doc.text("• Built SaaS solutions with MERN stack", 25, yPos)
      yPos += 6
      doc.text("• Led sprint planning and documentation", 25, yPos)

      // Add a new page for the rest of the content
      doc.addPage()
      yPos = 20

      // Job 5
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.setTextColor(51, 51, 51) // Dark gray for regular text
      doc.text("Junior Developer | Code-learner | July 2017 - Nov 2018", 20, yPos)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      yPos += 8
      doc.text("• Built some websites", 25, yPos)
      yPos += 6
      doc.text("• Worked on backend APIs", 25, yPos)

      // Job 6
      yPos += 10
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("Intern & Instructor | Abisec Computers | Jan 2015 - May 2016", 20, yPos)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      yPos += 8
      doc.text("• Taught computer basics and built small web tools", 25, yPos)
      yPos += 6
      doc.text("• Assisted in building local websites", 25, yPos)

      // Education
      yPos += 14
      doc.setFont("helvetica", "bold")
      doc.setFontSize(14)
      doc.setTextColor(0, 102, 204) // Blue color for headings
      doc.text("EDUCATION", 20, yPos)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.setTextColor(51, 51, 51) // Dark gray for regular text
      yPos += 8
      doc.text("Lagos State University - B.Sc. in Mathematics, 2016 - 2020", 20, yPos)
      yPos += 6
      doc.text("Code Learner Institute - Full-Stack Web Development, 2017", 20, yPos)
      yPos += 6
      doc.text("Abisec Computers - Diploma in Data Processing, 2015 - 2016", 20, yPos)

      // Certifications
      yPos += 14
      doc.setFont("helvetica", "bold")
      doc.setFontSize(14)
      doc.setTextColor(0, 102, 204) // Blue color for headings
      doc.text("CERTIFICATIONS", 20, yPos)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.setTextColor(51, 51, 51) // Dark gray for regular text
      yPos += 8
      doc.text("AWS Certified Developer - Associate", 20, yPos)
      yPos += 6
      doc.text("Meta Back-End Developer - Coursera (2023)", 20, yPos)
      yPos += 6
      doc.text("freeCodeCamp - JavaScript Algorithms and Data Structures", 20, yPos)

      // Add a blue line at the bottom of each page
      doc.setDrawColor(0, 102, 204)
      doc.setLineWidth(1)
      doc.line(20, 280, 190, 280)

      // Save the PDF
      doc.save("Tose_Anthony_Sejiro_Resume.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("There was an error generating the PDF. Please try again.")
    }
  }

  return (
    <Button variant="outline" onClick={handleDownload} className="border-blue text-blue hover:bg-blue hover:text-white">
      Download CV
      <Download className="ml-2 h-4 w-4" />
    </Button>
  )
}
