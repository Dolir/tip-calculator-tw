import { ReactComponent as DollarIcon } from "src/assets/images/icon-dollar.svg"
import { ReactComponent as PersonIcon } from "src/assets/images/icon-person.svg"

import { Text } from "src/components/Text"
import { Button } from "src/components/Button"
import { Input } from "src/components/Input"
import style from "./style.module.scss"
import classNames from "classnames"
import { Dispatch, SetStateAction } from "react"
import { TipDataValue } from ".."

const baseTips = [5, 10, 15, 25, 50] as const

export const Form = ({
  setTipData,
  tipData
}: {
  setTipData: Dispatch<SetStateAction<TipDataValue>>
  tipData: TipDataValue
}) => {
  const handleTipDataSet = (
    key: keyof typeof tipData,
    value: string | number
  ) => {
    setTipData((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className={style.form}>
      <div className={style.formContent}>
        <Input
          label="Bill"
          indicator={<DollarIcon />}
          type="number"
          value={tipData.bill.toString()}
          validation={(value) => {
            const parsedValue = parseFloat(value)
            if (parsedValue < 0) return false
            if (parsedValue === 0) return "Can't be zero"
            return null
          }}
          onChange={(value) => {
            handleTipDataSet("bill", value)
          }}
        />
        <div>
          <Text color="neutral-2" className={style.tipSelectorLabel}>
            Select Tip %
          </Text>
          <div className={style.optionsList}>
            {baseTips.map((tip) => (
              <Button
                backgroundColor="neutral-1"
                key={tip}
                className={classNames({
                  [style.selected]: tip === tipData.tip
                })}
                onClick={() => handleTipDataSet("tip", tip)}
              >
                <Text size="h2">{tip}%</Text>
              </Button>
            ))}
            <Input
              placeholder="Custom"
              type="number"
              validation={(value) => {
                const parsedValue = parseFloat(value)
                if (parsedValue >= 101 || parsedValue < 0) return false
                return null
              }}
              value={
                //Check if "state value" is from custom input
                typeof tipData.tip === "string" ? tipData.tip : ""
              }
              onChange={(value) => {
                handleTipDataSet("tip", value)
              }}
              className={style.customInputField}
            />
          </div>
        </div>
        <Input
          label="Number of people"
          indicator={<PersonIcon />}
          type="number"
          value={tipData.persons.toString()}
          validation={(value) => {
            const parsedValue = parseFloat(value)
            if (parsedValue < 0) return false
            if (parsedValue === 0) return "Can't be zero"

            return null
          }}
          onChange={(value) => {
            handleTipDataSet("persons", value)
          }}
        />
      </div>
    </div>
  )
}
