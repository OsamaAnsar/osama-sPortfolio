import { Card, CardContent } from "@/components/ui/card"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiGit,
  SiJest,
  SiDocker,
  SiAmazonwebservices,
} from "react-icons/si"

interface SkillBadgeProps {
  name: string
  icon: string
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  const getIcon = () => {
    switch (icon.toLowerCase()) {
      case "js":
        return <SiJavascript className="h-8 w-8 text-yellow-400" />
      case "ts":
        return <SiTypescript className="h-8 w-8 text-blue-500" />
      case "react":
        return <SiReact className="h-8 w-8 text-cyan-400" />
      case "angular":
        return <SiAngular className="h-8 w-8 text-red-500" />
      case "vue":
        return <SiVuedotjs className="h-8 w-8 text-green-500" />
      case "next":
        return <SiNextdotjs className="h-8 w-8" />
      case "node":
        return <SiNodedotjs className="h-8 w-8 text-green-600" />
      case "express":
        return <SiExpress className="h-8 w-8" />
      case "mongodb":
        return <SiMongodb className="h-8 w-8 text-green-500" />
      case "postgres":
        return <SiPostgresql className="h-8 w-8 text-blue-400" />
      case "graphql":
        return <SiGraphql className="h-8 w-8 text-pink-600" />
      case "redux":
        return <SiRedux className="h-8 w-8 text-purple-500" />
      case "tailwind":
        return <SiTailwindcss className="h-8 w-8 text-cyan-500" />
      case "git":
        return <SiGit className="h-8 w-8 text-orange-500" />
      case "jest":
        return <SiJest className="h-8 w-8 text-red-600" />
      case "docker":
        return <SiDocker className="h-8 w-8 text-blue-600" />
      case "aws":
        return <SiAmazonwebservices className="h-8 w-8 text-orange-400" />
      default:
        return null
    }
  }

  return (
    <Card className="flex flex-col items-center justify-center p-4 hover:border-primary transition-colors">
      <CardContent className="p-4 flex flex-col items-center gap-2">
        {getIcon()}
        <span className="text-sm font-medium mt-2">{name}</span>
      </CardContent>
    </Card>
  )
}

