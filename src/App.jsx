import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus"
import Strategies from "./pages/Strategies"
import GetInTouch from "./pages/GetInTouch"
import Applayout from "./ui/Applayout"
import Team from "./pages/Team"
import PageNotFound from "./ui/PageNotFound"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="aboutus" element={<Aboutus/> } />
          <Route path="strategies" element={<Strategies/>} />
          <Route path="team" element={<Team/>} />
          <Route path="getintouch" element={<GetInTouch/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
