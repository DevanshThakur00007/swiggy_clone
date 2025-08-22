import Headers from "./Component/Header"
import Footer from "./Component/Footer"
import Body from "./Component/Body"
import {Outlet} from "react-router-dom"


function App() {

  return (
    <>

      <Headers />
      {/* <Body /> */}
      <Outlet/>
      <Footer />




    </>
  )
}

export default App;
