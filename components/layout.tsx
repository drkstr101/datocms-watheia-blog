/** @format */

import Alert from "../components/alert"
import Footer from "../components/footer"
import { ThemeProvider, CssBaseline } from "@material-ui/core"
// import Head from "next/Head"

import { createMuiTheme } from "@material-ui/core/styles"
import purple from "@material-ui/core/colors/purple"
import green from "@material-ui/core/colors/green"

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#092947",
    },
    secondary: {
      main: "#215C94",
    },
  },
  typography: {
    fontFamily: "source-sans-pro",
  },
})

export default function Layout({ preview, children }) {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/xyi1bqv.css"></link>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  )
}
