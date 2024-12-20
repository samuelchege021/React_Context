import {  useContext } from "react"


import { userContext } from "./context/Usercontext"


export default function Checkout(){

const {user}=useContext(userContext)
return <div>



checkout{user}

</div>

}