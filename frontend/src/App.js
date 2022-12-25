import Navbar from "./Navbar"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import Inventory from "./pages/Inventory"
import Services from "./pages/Services"

import { Route, Routes } from "react-router-dom"


import Details from "./pages/Details"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dshboard from "./pages/Dshboard"
import RoomsCrud from "./pages/RoomsCrud"
import About from "./pages/About"
import Contect from "./pages/Contect"
import Morerooms from "./pages/Morerooms"
import Viewrooms from "./pages/Viewrooms"
import Payment from "./pages/Payment"
import Pdf from "./pages/Pdf"



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dshboard" element={<Dshboard />} />
          <Route path="/RoomsCrud" element={<RoomsCrud />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contect" element={<Contect />} />
          <Route path="/Morerooms" element={<Morerooms />} />
          <Route path="/Viewrooms" element={<Viewrooms />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/:id" element={<Details />} />
          <Route path="Pdf" element={<Pdf />} />
          
        
        </Routes>
      </div>
    </>
  )
}

export default App
