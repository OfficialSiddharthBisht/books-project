import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Router from "./Routes"

export const App :React.FC = ()=> (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
)
