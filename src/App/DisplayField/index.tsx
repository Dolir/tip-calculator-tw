import { Text } from "src/components/Text"
import { nFormatter } from "src/utils"
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
        <Text size="small" color="neutral-3">
          {subLabel}
        </Text>
      </div>
      <Text size="h0" color="primary" className={style.valueField}>
        ${nFormatter(value)}
      </Text>
    </div>
  )
}
