import React from 'react'
import { Briefcase, GraduationCap, Code, Mail } from 'lucide-react'

const Resume = () => {
  const skills = [
    { category: "Frontend", items: ["React", "HTML/CSS", "Bootstrap", "jQuery", "Angular"] },
    { category: "Backend", items: ["Node.js", "PHP", "Java", "Spring Boot"] },
    { category: "Database", items: ["SQL Server", "MySQL", "DBeaver"] },
    { category: "Tools", items: ["GitHub", "Bitbucket", "Figma"] }
  ]

  const experiences = [
    {
      company: "SCG Ceramics",
      role: "Full-Stack Web Developer",
      period: "June 2022 – Present",
      projects: [
        "Pallet Management System - Built CRUD operations with Excel import/export",
        "Goods Return Management - Real-time dashboards with email notifications",
        "Vendor Portal System - Secure platform with role-based authentication",
        "Sales Benefits Workflow - Cross-department approval integrated with SAP",
        "Financial System (ONEWEB) - Angular frontend + Spring Boot backend"
      ]
    },
    {
      company: "Avalant Co., Ltd.",
      role: "Java Developer (Internship)",
      period: "June 2021 – September 2021",
      projects: [
        "Backend service development for internal financial applications"
      ]
    }
  ]

  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-lg font-semibold">Software Developer</span>
          <h1 className="text-4xl xl:text-6xl font-bold mt-2 mb-4">
            Hello, I'm <span className="text-accent">Thanchanok</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Full-Stack Developer with 2+ years of experience building enterprise systems
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="text-accent" size={28} />
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-primary/50 p-4 rounded-lg border border-white/10">
                    <h3 className="text-accent font-semibold mb-2">{skill.category}</h3>
                    <ul className="text-sm text-white/70 space-y-1">
                      {skill.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-accent" size={28} />
                Education
              </h2>
              <div className="bg-primary/50 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold">Burapha University</h3>
                <p className="text-accent">Bachelor of Science in Software Engineering</p>
                <p className="text-white/70 text-sm mt-2">Graduated: 2022</p>
                <p className="text-white/70 text-sm">English: TOEIC 590</p>
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-accent" size={28} />
              Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-primary/50 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-accent font-semibold">{exp.role}</p>
                  <p className="text-white/60 text-sm mb-4">{exp.period}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-white/80">Key Projects:</p>
                    <ul className="text-sm text-white/70 space-y-2">
                      {exp.projects.map((project, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent">▸</span>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-accent/10 p-8 rounded-lg border border-accent/20">
          <h3 className="text-2xl font-bold mb-3">Looking for Opportunities</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Seeking a challenging role as a Full-Stack or Java Developer in a technology-driven 
            company where I can contribute to real business impact and continue growing.
          </p>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=thancha.cp19@gmail.com&su=Let's Work Together&body=Hi Thanchanok," 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-all flex items-center gap-2 mx-auto">
              <Mail size={20} />
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume