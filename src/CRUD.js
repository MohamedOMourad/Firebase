import "./App.css";
import { useRef } from "react";
import { app, database } from "./firebaseConfig";
import {
 collection,
 addDoc,
 getDocs,
 doc,
 updateDoc,
 deleteDoc,
} from "firebase/firestore";

function CRUD() {
 const emailRef = useRef();
 const passwordRef = useRef();
    const collectionRef = collection(database, "Users");
    
 const handleSubmit = async () => {
  try {
   const response = await addDoc(collectionRef, {
    email: emailRef.current.value,
    password: passwordRef.current.value,
   });
   alert("user created");
   //    const data = await response;
   console.log(response);
  } catch (error) {
   alert(error.message);
  }
 };

 const getUsers = async () => {
  try {
   const response = await getDocs(collectionRef);
   const docs = response.docs;
   console.log(docs.map((item) => item.data()));
  } catch (error) {
   alert(error.message);
  }
 };
    
 const updateUser = async () => {
  try {
   const docToUpdate = doc(database, "Users", "tmGfTR5ZO5PiZidAah28");
   updateDoc(docToUpdate, {
    email: "alaa",
   });
  } catch (error) {}
 };
 const DelteUser = async () => {
  try {
   const docToUpdate = doc(database, "Users", "tmGfTR5ZO5PiZidAah28");
   deleteDoc(docToUpdate);
  } catch (error) {}
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

   <button onClick={DelteUser}>submit</button>
  </div>
 );
}

export default CRUD;
