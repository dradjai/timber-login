import { useState } from "react";
import Login from "./Login.js"
import SignupForm from "./SignupForm.js";
import { Button } from "react-bootstrap";



export default function Home() {
const [isMember, setIsMember] = useState(false);

  return(
    <>
    {
    (isMember) 
      ? <Login/>
      : <SignupForm/>

      
    }
    <Button onClick={ () => setIsMember(!isMember)}>Switch from</Button>
    </>
  )
}