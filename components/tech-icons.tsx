import { Smartphone, Database, Code, Users, GraduationCap, Zap } from "lucide-react"

export function TechIcons() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 py-12">
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="p-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full text-white">
          <Smartphone className="h-8 w-8" />
        </div>
        <span className="text-sm font-medium">Android</span>
      </div>
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="p-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full text-white">
          <Database className="h-8 w-8" />
        </div>
        <span className="text-sm font-medium">Big Data</span>
      </div>
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full text-white">
          <Code className="h-8 w-8" />
        </div>
        <span className="text-sm font-medium">Development</span>
      </div>
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="p-4 bg-gradient-to-br from-red-400 to-pink-500 rounded-full text-white">
          <Users className="h-8 w-8" />
        </div>
        <span className="text-sm font-medium">Teaching</span>
      </div>
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="p-4 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full text-white">
          <GraduationCap className="h-8 w-8" />
        </div>
        <span className="text-sm font-medium">Education</span>
      </div>
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="p-4 bg-gradient-to-br from-teal-400 to-green-500 rounded-full text-white">
          <Zap className="h-8 w-8" />
        </div>
        <span className="text-sm font-medium">Innovation</span>
      </div>
    </div>
  )
}
