import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import  "./index.css"


function Page() {
 return(
  <div>
   <Header />
   <Body />
   <Footer />
  </div>
 )
}



ReactDOM.render(<Page />, document.getElementById('root'))
