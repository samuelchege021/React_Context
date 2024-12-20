import { useContext, useState } from "react"
import { userContext } from "./context/Usercontext";


export default function  Login(){

const [value,setvalue]=useState("")


const {state ,dispatch}=useContext(userContext)
function handlesubmit(e){

e.preventDefault();
dispatch({type:"login",payload:value});

}
return <div>

<form   onSubmit={handlesubmit}>


<input type="text" value={value}  onChange={(e)=>setvalue(e.target.value)} />

<button type="submit">login</button>
</form>


</div>


}