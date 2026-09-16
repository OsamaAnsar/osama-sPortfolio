import { SkillBadge } from "./skill-badge"

export interface SkillGroup {
  title: string
  description: string
  skills: { name: string; icon: string }[]
}

export function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div key={group.title}>
          <div className="mb-5 text-center">
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {group.skills.map((skill) => (
              <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsSection
