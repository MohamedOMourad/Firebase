import "./App.css";
import { useEffect, useRef, useState } from "react";
import { app, database, storage } from "./firebaseConfig";

import {
 collection,
 addDoc,
 getDocs,
 doc,
 updateDoc,
 deleteDoc,
 onSnapshot,
} from "firebase/firestore";
function RealTime() {
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
  } catch (error) {
   alert(error.message);
  }
 };

 const getUsers = () => {
  try {
   //    const response = await getDocs(collectionRef);
   onSnapshot(collectionRef, (data) => {
    const docs = data.docs;
    console.log(docs.map((item) => item.data()));
   });
  } catch (error) {
   alert(error.message);
  }
 };

 useEffect(() => {
  getUsers();
 }, []);

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

export default RealTime;
