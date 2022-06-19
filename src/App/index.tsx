import { useMemo, useState } from "react"
import style from "./style.module.scss"
import { ReactComponent as Logo } from "src/assets/images/logo.svg"

import { Container } from "src/components/Container"
import { Text } from "src/components/Text"
import { Button } from "src/components/Button"
import { DisplayField } from "./DisplayField"
import { Form } from "./Form"

const initialState = { bill: "", tip: "", persons: "" }

export type TipDataValue = {
  bill: number | string
  tip: number | string
  persons: number | string
}

function App() {
  const [tipData, setTipData] = useState<TipDataValue>(initialState)

  const tipAmountData = useMemo(() => {
    const result = { tipAmount: 0, totalAmount: 0 }

    //Parsing values
    const [parsedBill, parsedTip, parsedPeople] = Object.values(tipData).map(
      (value) => parseFloat(value as string)
    )

    //Check if some values are false
    if (
      [parsedBill, parsedTip || parsedTip === 0, parsedPeople].some(
        (value) => !value || isNaN(value as number)
      )
    )
      return result

    const eachPersonsBill = parsedBill / parsedPeople
    const tipAmount = eachPersonsBill * (parsedTip / 100)
    const totalAmount = tipAmount + eachPersonsBill

    //Modify result object
    result.tipAmount = tipAmount
    result.totalAmount = totalAmount

    return result
  }, [tipData])

  const clearData = () => {
    setTipData(initialState)
  }

  const isResetButtonDisabled = !Object.values(tipAmountData).some(Boolean)

  return (
    <div className={style.main}>
      {/* <Logo className={style.logo} /> */}
      <div className={style.formWrapper}>
        <Container
          className={style.formContainer}
          wrapperClassName={style.outerContainer}
        >
          <Form setTipData={setTipData} tipData={tipData} />
          <Container
            backgroundColor="neutral-1"
            className={style.displayFieldsContainer}
          >
            <div className={style.displayFields}>
              <DisplayField
                label="Tip Amount"
                subLabel="/ person"
                value={tipAmountData.tipAmount}
              />
              <DisplayField
                label="Total"
                subLabel="/ person"
                value={tipAmountData.totalAmount}
              />
            </div>
            <Button
              backgroundColor="primary"
              stretched
              disabled={isResetButtonDisabled}
              onClick={clearData}
            >
              <Text color="neutral-1" size="h2">
                RESET
              </Text>
            </Button>
          </Container>
        </Container>
      </div>
    </div>
  )
}

export default App
