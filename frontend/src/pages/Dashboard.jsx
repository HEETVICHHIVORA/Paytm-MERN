import axios from "axios"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react"

export const Dashboard =  () => {
    const [balance,setBalance]= useState(0);
           useEffect(()=>{
             axios (
    
                    {
                        url:"http://localhost:3000/api/v1/account/balance",
                        method :"GET",
                        headers:{
                            Authorization:"Bearer "+localStorage.getItem("token"),
                        },
                        
                    },
                
                )
                .then(response => {
                    setBalance(response.data.balance);
                })
            
                
           },[balance])
            
    return   <div >
            
            <Appbar></Appbar>
            <Balance value= {balance}></Balance>
            <Users></Users>
        </div>
}

