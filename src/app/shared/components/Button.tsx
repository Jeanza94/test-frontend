import { FC } from "react"

interface PropsButton {
  text: string,
  title: string,
  onClick?: () => void
}

const Button:FC<PropsButton> = ({text, title, onClick}) => {
  return (
    <button 
      className="bg-secondary-base text-white p-2 hover:bg-secondary-light active:bg-secondary-dark transition-colors ease-in duration-200"
      onClick={onClick}
      title={title}
    >
      {text}
    </button>
  )
}

export default Button