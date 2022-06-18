import { ReactNode } from "react"
import classNames from "classnames"
import style from "./style.module.scss"
import { Text } from "../Text"

type InputFunctionType<T> = (value: string) => T

type InputProp = {
  /**
   * null = no errors,
   *
   * string = error with text,
   *
   * false = error with no text and highlighting
   */
  validation?: InputFunctionType<null | string | false>
  label?: string
  onChange?: InputFunctionType<void>
  onBlur?: InputFunctionType<void>
  className?: string
  indicator?: ReactNode
  type?: "number" | "text"
  placeholder?: string
}
export const Input = ({
  validation,
  onChange,
  onBlur,
  className = "",
  indicator,
  label,
  type = "text",
  placeholder
}: InputProp) => {
  const error = false
  return (
    <div className={style.inputContainer}>
      {label && (
        <div className={style.header}>
          <Text color="darkGrayishCyan">{label}</Text>
          {error && <Text color="dangerColor">Can't be zero</Text>}
        </div>
      )}
      <div className={style.inputWrapper}>
        {indicator && <div className={style.indicator}>{indicator}</div>}
        <input
          className={classNames(
            {
              [className]: className,
              [style.hasIndicator]: indicator,
              [style.hasError]: error
            },
            style.input
          )}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  )
}
