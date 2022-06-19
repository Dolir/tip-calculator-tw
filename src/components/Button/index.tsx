import { MouseEvent, PropsWithChildren } from "react"
import { ColorsType } from "../utils"
import backgroundStyles from "../styles/backgroundColors.module.scss"
import style from "./style.module.scss"
import classNames from "classnames"

type ButtonProp = {
  backgroundColor?: ColorsType
  className?: string
  wrapperClassName?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  stretched?: boolean
}

export const Button = ({
  backgroundColor = "white",
  children,
  disabled,
  onClick,
  stretched,
  className = ""
}: ButtonProp & PropsWithChildren<unknown>) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        {
          [backgroundStyles[backgroundColor]]: backgroundColor,
          [style.stretched]: stretched,
          [className]: className
        },
        style.container
      )}
    >
      {children}
    </button>
  )
}
