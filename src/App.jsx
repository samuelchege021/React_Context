import { createContext, useState } from "react"
import Checkout from "./Checkout"
import Login from "./Login"
import { Userprovider } from "./context/Usercontext"
import Logout from "./logout"




 

function App() {



// dataand functions
// creating contexr
  // providing context
  // consuming context
  // updating context


 

  
  return (
    <div>

{/* <input type="text" value={user} onChange={(e)=>setuser(e.target.value)} /> */}




<Userprovider>
<Login/>


<Checkout/>

<Logout/>

</Userprovider>










    </div>
    
  )
}

export default App
