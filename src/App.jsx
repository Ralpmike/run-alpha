import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import Home from "./pages/Home"
import Strategies from "./pages/Strategies"
import GetInTouch from "./pages/ContactUs"
import Applayout from "./ui/Applayout"
import Team from "./pages/Team"
import PageNotFound from "./pages/PageNotFound"
import AboutUs from "./pages/Aboutus"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="offerings" element={<Strategies />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<GetInTouch />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
