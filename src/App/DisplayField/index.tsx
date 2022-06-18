import { ReactNode } from "react"
import { Text } from "src/components/Text"
import style from "./style.module.scss"

type TextFieldProp = {
  value: number
  label: string
  subLabel: string
}

export const DisplayField = ({ value, label, subLabel }: TextFieldProp) => {
  return (
    <div className={style.container}>
      <div>
        <Text>{label}</Text>
        <Text size="small" color="grayishCyan">
          {subLabel}
        </Text>
      </div>
      <Text size="h0" color="strongCyan">
        ${value.toFixed(2)}
      </Text>
    </div>
  )
}
