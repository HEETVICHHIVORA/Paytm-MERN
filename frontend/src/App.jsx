import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import {Money} from "./pages/Money"
 function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} /> 
          <Route path="/board" element={<Dashboard />} />
          <Route path="/money" element={<Money />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App