import { Footer } from "../../layouts/Footer/Footer"
import { Header } from "../../layouts/Header/Header"

export const DefaultLayout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}
