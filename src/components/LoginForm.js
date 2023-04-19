import { useState } from "react"
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const firebaseConfig = {
  apiKey: "AIzaSyC-E77PA4pt96S-hAOwtaHhimbdageNEsU",
  authDomain: "timber-login-dr.firebaseapp.com",
  projectId: "timber-login-dr",
  storageBucket: "timber-login-dr.appspot.com",
  messagingSenderId: "629482180568",
  appId: "1:629482180568:web:6cb11845134c1641842cad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default function LoginForm() {
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  const[user, setUser] = useState();

 const handleLogin = async (e) => {
  e.preventDefault()
  const response = await signInWithEmailAndPassword(auth, email, password)
    .catch(err => console.log(err));
    setUser(response.user);
 }
if(user) {
  return <h1>Welcome User {user.email}!</h1>
}

  return (
    <>

    <h1>Login</h1>
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email" 
          placeholder="Enter Email"
          value={email} 
          onChange={ e => setEmail(e.target.value)} />
          <Form.Text>We'll never share your email with anyone else</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={ e => setPassword(e.target.value)}/>
        </Form.Group>
        
        <Form.Group>
          <Button variant="success"
          size="lg"
          type="submit">Login</Button>
        </Form.Group>
        </Form>
    </>
  )
}