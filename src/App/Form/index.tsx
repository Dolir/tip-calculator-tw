import { ReactComponent as DollarIcon } from "src/assets/images/icon-dollar.svg"
import { ReactComponent as PersonIcon } from "src/assets/images/icon-person.svg"

import { Text } from "src/components/Text"
import { Button } from "src/components/Button"
import { Input } from "src/components/Input"
import style from "./style.module.scss"
import classNames from "classnames"
import { useState } from "react"

const baseTips = [5, 10, 15, 25, 50] as const

export const Form = () => {
  const [selectedTip, setSelectedTip] = useState<number>()
  return (
    <div className={style.form}>
      <Input label="Bill" indicator={<DollarIcon />} type="number" />
      <div>
        <Text color="darkGrayishCyan" className={style.tipSelectorLabel}>
          Select Tip %
        </Text>
        <div className={style.optionsList}>
          {baseTips.map((tip) => (
            <Button
              backgroundColor="veryDarkCyan"
              key={tip}
              className={classNames({ [style.selected]: tip === selectedTip })}
              onClick={() => setSelectedTip(tip)}
            >
              <Text size="h2">{tip}%</Text>
            </Button>
          ))}
          <Input
            placeholder="Custom"
            type="number"
            className={style.customInputField}
          />
        </div>
      </div>
      <Input
        label={"Number of people"}
        indicator={<PersonIcon />}
        type="number"
      />
    </div>
  )
}
