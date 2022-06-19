import { ChangeEvent, ReactNode, useState } from "react"
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
  value?: string
  onChange?: InputFunctionType<void>
  onBlur?: InputFunctionType<void>
  className?: string
  indicator?: ReactNode
  type?: "number" | "text"
  placeholder?: string
}
export const Input = ({
  validation = () => null,
  onChange,
  onBlur,
  className = "",
  indicator,
  label,
  type = "text",
  placeholder,
  value = ""
}: InputProp) => {
  const [error, setError] = useState<string>()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    handler?: InputFunctionType<void>
  ) => {
    const inputValue = e.target.value
    const validationResult = validation(inputValue)

    const setValue = (value: string) => {
      handler && handler(value)
    }
    if (validationResult) {
      setValue(inputValue)
      return setError(validationResult)
    }
    setError("")
    if (validationResult === false) return

    setValue(inputValue)
  }
  return (
    <div className={style.inputContainer}>
      {label && (
        <div className={style.header}>
          <Text color="neutral-3">{label}</Text>
          {error && <Text color="danger">{error}</Text>}
        </div>
      )}
      <div className={style.inputWrapper}>
        {indicator && <div className={style.indicator}>{indicator}</div>}
        <input
          value={value}
          className={classNames(
            {
              [className]: className,
              [style.hasIndicator]: indicator,
              [style.hasError]: error
            },
            style.input
          )}
          onBlur={(e) => handleChange(e, onBlur)}
          onChange={(e) => handleChange(e, onChange)}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  )
}
