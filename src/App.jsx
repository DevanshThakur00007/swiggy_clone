import Headers from "./Component/Header"
import Footer from "./Component/Footer"
// import Body from "./Component/Body"
import {Outlet} from "react-router-dom"
import {Provider} from 'react-redux'
import appStore from './utils/appStore'


function App() {

  return (
    <>
     <Provider store={appStore}>
         <Headers />
      {/* <Body /> */}
      <Outlet/>
      <Footer />


     </Provider>
     




    </>
  )
}

export default App;
