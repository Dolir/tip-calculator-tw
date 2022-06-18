import style from "./style.module.scss"
import classNames from "classnames"
import { PropsWithChildren } from "react"
import { ColorsType } from "../utils"
type TextProp = {
  className?: string
  size?: "small" | "normal" | "h2" | "h0"
  color?: ColorsType
}
export const Text = ({
  children,
  className = "",
  size = "normal",
  color = "white"
}: TextProp & PropsWithChildren<unknown>) => {
  return (
    <div
      className={classNames(
        { [className]: className, [style[size]]: size, [style[color]]: color },
        style.text
      )}
    >
      {children}
    </div>
  )
}
