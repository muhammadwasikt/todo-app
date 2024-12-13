import { Outlet } from "react-router"
import Header from "../components/Header"

const AppLayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default AppLayOut
