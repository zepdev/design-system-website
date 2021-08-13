/* eslint-disable import/prefer-default-export */
import * as React from "react"
import TopLayout from "./TopLayout"

// TODO v5: remove StyledEngineProvider once migration to emotion is completed
export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
