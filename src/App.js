import "./App.css";
import { useRef } from "react";
import { app } from "./firebaseConfig";
import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 GoogleAuthProvider,
 signInWithPopup,
} from "firebase/auth";

function App() {
 console.log(app);
 const emailRef = useRef();
 const passwordRef = useRef();

 const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();
 const handleSubmit = async () => {
  try {
   console.log({
    email: emailRef.current.value,
    password: passwordRef.current.value,
   });
   const response = await signInWithPopup(auth, googleProvider);
   //    const response = await signInWithEmailAndPassword(
   //     auth,
   //     emailRef.current.value,
   //     passwordRef.current.value
   //    );
   //    const response = await createUserWithEmailAndPassword(
   //     auth,
   //     emailRef.current.value,
   //     passwordRef.current.value
   //    );
   console.log(response);
   const data = response.user;
   console.log(data);
  } catch (error) {
   console.log(error);
  }
 };
 return (
  <div className="App-header">
   <input
    placeholder="Email"
    name="email"
    type="email"
    className="input-fields"
    ref={emailRef}
   />
   <input
    placeholder="Password"
    name="password"
    type="password"
    className="input-fields"
    ref={passwordRef}
   />

   <button onClick={handleSubmit}>submit</button>
  </div>
 );
}

export default App;
