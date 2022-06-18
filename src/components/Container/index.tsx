import React, { PropsWithChildren } from "react"
import style from "./style.module.scss"
import backgroundStyles from "../styles/backgroundColors.module.scss"
import classNames from "classnames"
import { ColorsType } from "../utils"

type ContainerProp = {
  backgroundColor?: ColorsType
  className?: string
  wrapperClassName?: string
}

export const Container = ({
  children,
  backgroundColor = "white",
  className = "",
  wrapperClassName = ""
}: PropsWithChildren<unknown> & ContainerProp) => {
  return (
    <div
      className={classNames(
        { [backgroundStyles[backgroundColor]]: backgroundColor },
        style.container,
        { [wrapperClassName]: wrapperClassName }
      )}
    >
      <div className={classNames({ [className]: className }, style.content)}>
        {children}
      </div>
    </div>
  )
}
