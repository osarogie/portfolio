type Props = {
  href: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  color?: string
  size?: number
}

export const SocialLink: React.FC<Props> = ({ href, icon: Icon }) => {
  return (
    <a
      href={href}
      className="mr-8 pl-0 py-2 text-white cursor-pointer inline-block font-bold opacity-100 transition-opacity ease-out duration-150"
    >
      <Icon className="block h-8 w-8 hover:text-black" color="#d6b2b2" />
    </a>
  )
}
