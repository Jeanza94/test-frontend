import Link from "next/link"
import { socialNetworks } from "../raw-data"

const Footer = () => {
  return (
    <footer className="h-20 bg-secondary-dark p-4 flex items-center justify-center gap-20">
      {
        socialNetworks.map(({href, name}) => (
          <Link
            target="_blank"
            href={href}
            className="text-white font-bold capitalize hover:shadow-sm hover:shadow-white p-2 transition-all ease-in duration-200"
            title={`Ir a ${name}`}
          >
            {name}
          </Link>
        ))
      }
    </footer>
  )
}

export default Footer