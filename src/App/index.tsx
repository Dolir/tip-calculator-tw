import React, { useState } from "react"
import style from "./style.module.scss"
import { ReactComponent as Logo } from "src/assets/images/logo.svg"

import { Container } from "src/components/Container"
import { Text } from "src/components/Text"
import { Button } from "src/components/Button"
import { DisplayField } from "./DisplayField"
import { Form } from "./Form"

function App() {
  // const [first, setfirst] = useState(second)

  return (
    <div className={style.main}>
      <Logo />
      <div className={style.formWrapper}>
        <Container className={style.formContainer}>
          <Form />
          <Container
            backgroundColor="veryDarkCyan"
            className={style.displayFieldsContainer}
          >
            <div className={style.displayFields}>
              <DisplayField label="Tip Amount" subLabel="/ person" value={0} />
              <DisplayField label="Total" subLabel="/ person" value={0} />
            </div>
            <Button backgroundColor="strongCyan" stretched disabled>
              <Text color="veryDarkCyan" size="h2">
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
