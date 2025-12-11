import { Route,Routes } from "react-router-dom"
import ErrorPage from "./pages/admin/ErrorPage"

const App=()=>{
  return <>
            <Routes>
                      <Route></Route>
                      <Route path="/admin"></Route>
                      <Route path= "*" element={<ErrorPage />}></Route>

            </Routes>
  
  
  </>
}
export default App