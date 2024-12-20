import { createContext, useReducer } from "react"
import { useState } from "react";
 const userContext= createContext()


function Userprovider({children}){
    // const [user,setuser]=useState("guest")

     const[state,dispatch]=useReducer(userReducer,{user:null})

function userReducer(state,action){

if(action.type=="login"){

return {user:action.payload}

}




if (action.type=="logout"){

return {user:action.payload}
    
}
}



return(


   
<userContext.Provider  value={{...state,dispatch}}>


    {children}
</userContext.Provider>
);


}


export{Userprovider,userContext}