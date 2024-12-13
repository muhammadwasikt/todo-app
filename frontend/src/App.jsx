import { Route, Routes } from "react-router"
import { routes } from "./routes"

const App = () => {
  return (
    <Routes>
      {
        routes.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={item.element} >
              {
                item.children && item.children.map((child, index) => {
                  return (
                    <Route key={index} path={child.path} element={child.element} />
                  )
                })
              }
            </Route>
          )
        })
      }
    </Routes>
  )
}

export default App