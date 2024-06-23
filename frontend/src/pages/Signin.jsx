import { Sbutton } from "../components/Sbutton"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

import axios from "axios"

export const Signin = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] =useState("")
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e)=>{
          setUsername(e.target.value);
        }} placeholder="heetvic@gmail.com" label={"Email"} />
        <InputBox onChange={(e)=>{
          setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Sbutton onChange={async()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
              username,
              password
            });
            navigate("/board?name="+username)
            localStorage.setItem("token", response.data.token)
          }} label={"Sign in"} />
        </div>
        <BottomWarning label={"Haven't signed up yet ?"} buttonText={"Signup"} to={"/signup"}></BottomWarning>
        
      </div>
    </div>
  </div>
}