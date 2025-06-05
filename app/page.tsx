import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  GraduationCap,
  Code,
  Smartphone,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { AnimatedBackground } from "@/components/animated-background"
import { TechIcons } from "@/components/tech-icons"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container flex h-16 items-center justify-between padded-box">
          <div className="font-bold text-xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Yogi P
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-green-600 transition-colors">
              Experience
            </a>
            <a href="#education" className="text-sm font-medium hover:text-green-600 transition-colors">
              Education
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-green-600 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-green-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contact
            </a>
          </nav>
          <MobileNav />
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 overflow-hidden">
          <AnimatedBackground />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6 padded-box">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-gray-900 via-green-600 to-blue-600 bg-clip-text text-transparent padded-bottom">
                  Hi, I'm Yogi P
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-medium">
                  Senior Android Engineer at <span className="text-green-600 font-bold">Lopay</span>
                </p>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  Building innovative Android applications and empowering the next generation through education.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
                <Button variant="outline" className="border-green-200 hover:bg-green-50">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0 relative">
              <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500"></div>
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Yogi P"
                  fill
                  className="object-cover relative z-10 mix-blend-overlay"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Tech Icons */}
        <section className="py-12">
          <TechIcons />
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 padded-box">
            <Card className="card-hover bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
                <div className="text-sm text-gray-600">Years at Lopay</div>
              </CardContent>
            </Card>
            <Card className="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-sm text-gray-600">Android Apps Built</div>
              </CardContent>
            </Card>
            <Card className="card-hover bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Students Taught</div>
              </CardContent>
            </Card>
            <Card className="card-hover bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">MSc</div>
                <div className="text-sm text-gray-600">Big Data Science</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-t border-gray-200 padded-box">
          <div className="text-center mb-12 padded-box">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a Senior Android Engineer with expertise in developing mobile applications for both consumer devices
                and specialized hardware. With a background in Big Data Science and experience teaching technical
                subjects, I bring a unique perspective to software development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My passion lies in creating robust, user-friendly Android applications that solve real-world problems. I
                enjoy the challenge of optimizing performance and ensuring compatibility across different devices.
              </p>
            </div>
            <div className="relative">
              <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">London, UK</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Available for opportunities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700">Senior Android Engineer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8 padded-box">
            <Card className="card-hover bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior Android Engineer</h3>
                    <div className="text-lg font-medium text-green-600 mb-2">Lopay</div>
                  </div>
                  <div className="flex items-center text-gray-500 bg-white px-4 py-2 rounded-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    2021 - Present
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Built 4 Android applications from scratch for both consumer mobile devices and specialized Stripe
                    S700 hardware
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Led development of payment processing applications with focus on security and performance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Implemented robust architecture patterns ensuring scalability and maintainability
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Technical Instructor</h3>
                    <div className="text-lg font-medium text-blue-600 mb-2">University Teaching</div>
                  </div>
                  <div className="flex items-center text-gray-500 bg-white px-4 py-2 rounded-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    2020 - 2021
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Taught Android Development, Data Science, and Python Development to university students
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Conducted weekend workshops focusing on practical, hands-on learning
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mentored over 1000 students, helping them build technical skills and career paths
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 border-t border-gray-200 padded-box">
          <div className="text-center mb-12 padded-box">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <Card className="card-hover bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">MSc in Big Data Science</h3>
                    <div className="text-lg font-medium text-purple-600">Queen Mary University of London</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 bg-white px-4 py-2 rounded-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  2021
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 border-t border-gray-200 padded-box">
          <div className="text-center mb-12 padded-box">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <Code className="h-6 w-6 mr-3 text-green-600" />
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Android Development",
                    "Kotlin",
                    "Java",
                    "MVI",
                    "Jetpack Compose",
                    "Room",
                    "Retrofit",
                    "Coroutines",
                    "Python",
                    "Data Science",
                    "Machine Learning",
                    "SQL",
                    "Git",
                  ].map((skill) => (
                    <Badge key={skill} className="skill-badge px-4 py-2 text-sm font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Teaching",
                    "Technical Communication",
                    "Mentoring",
                    "Problem Solving",
                    "Team Collaboration",
                    "Project Management",
                    "Leadership",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm font-medium border-none"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 border-t border-gray-200 padded-box">
          <div className="text-center mb-12 padded-box">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Lopay Mobile Payment App", type: "Android Mobile", color: "from-green-400 to-blue-500" },
              { name: "Lopay S700 Terminal App", type: "Stripe S700 Hardware", color: "from-purple-400 to-pink-500" },
              { name: "Terminal Pay Mobile App", type: "Android Mobile", color: "from-yellow-400 to-orange-500" },
              { name: "Lopay Consumer App", type: "Stripe S700 Hardware", color: "from-red-400 to-pink-500" },
            ].map((project, index) => (
              <Card key={index} className="card-hover project-card">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-lg mb-6 flex items-center justify-center`}
                  >
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 mb-4">
                    A robust payment processing application built for {project.type.toLowerCase()}.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="border-gray-300">
                      Kotlin
                    </Badge>
                    <Badge variant="outline" className="border-gray-300">
                      MVI
                    </Badge>
                    <Badge variant="outline" className="border-gray-300">
                      Payment Processing
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="hover:bg-gray-50">
                    <ExternalLink className="mr-2 h-4 w-4" />
                      <a href="https://lopay.com" target="_blank" rel="noopener noreferrer">
                      View Details </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t border-gray-200 padded-box">
          <div className="text-center mb-12 padded-box">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-full text-white mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="text-gray-700">mryogip05@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white mr-4">
                      <Github className="h-5 w-5" />
                    </div>
                    <span className="text-gray-700">github.com/yogen-p</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Me a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-medium shadow-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-gray-50 to-gray-100 py-12">
        <div className="container text-center">
          <div className="mb-6">
            <div className="font-bold text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Yogi P
            </div>
            <p className="text-gray-600">Senior Android Engineer & Educator</p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="ghost" size="sm" className="hover:bg-green-100">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-blue-100">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-purple-100">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-gray-500">© {new Date().getFullYear()} Yogi P. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
