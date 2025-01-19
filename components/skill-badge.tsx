interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
      {name}
    </span>
  )
}

