import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<div>About</div> } />

        <Route element={<div>Services</div>}>
          <Route path="login" element={<div>Login</div>} />
          <Route path="register" element={<div>Register</div>} />
        </Route>

        <Route path="route">
          <Route index element={<div>Concerts</div>} />
          <Route path=":dynamic" element={<div>Dynamic</div>} />
          <Route path="" element={<div>Trending</div>} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
