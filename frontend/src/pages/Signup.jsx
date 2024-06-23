import { Sbutton } from "../components/Sbutton"
import { Heading } from "../components/Heading"
import axios from "axios";

import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Signup = () => {
     const navigate = useNavigate();
     const [firstname,setFirsname]= useState("");
     const [lastname,setlastname]= useState("");
     const [username,setUsername]= useState("");
     const [password,setpassword]= useState("");
     return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your information to create an account"}></SubHeading>
        <InputBox onChange={(e)=>{
            setFirsname(e.target.value);
       }} label={"FirstName"} placeholder={"FirstName"}></InputBox>
        <InputBox onChange={(e)=>{
            setlastname(e.target.value);
       }} label={"Lastname"} placeholder={"LastName"}></InputBox>
        <InputBox onChange={(e)=>{
            setUsername(e.target.value);
       }} label={"username"} placeholder={"username"}></InputBox>
        <InputBox onChange={(e)=>{
            setpassword(e.target.value);
       }} label={"Password"} placeholder={"Password"}></InputBox>
         <Sbutton onChange={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstname,
              lastname,
              password
            });
            navigate("/board?name="+username)
            localStorage.setItem("token", response.data.token)
            
          }} label={"Sign up"} />
        <BottomWarning label={"Already a user?"} buttonText={"Signin"} to={"/signin"}></BottomWarning>
        
       
      </div>
    </div>
    </div>
}