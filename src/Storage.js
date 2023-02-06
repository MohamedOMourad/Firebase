import "./App.css";
import { useRef, useState } from "react";
import { app, database, storage } from "./firebaseConfig";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
function Storage() {
 const [data, setData] = useState();

 const handleSubmit = async () => {
  try {
   const mountianRef = ref(storage, `images/${data.name}`);

   const uploadTask = uploadBytesResumable(mountianRef, data);

   uploadTask.on(
    "state_changed",
    (snapshot) => {
     // Observe state change events such as progress, pause, and resume
     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     console.log("Upload is " + progress + "% done");
    },
    (error) => {
     alert(error.message);
    },
    () => {
     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
     });
    }
   );
   //    const response = await alert("user created");
   //    const data = await response;
   //    console.log(response);
  } catch (error) {}
 };

 return (
  <div className="App-header">
   <input
    type="file"
    className="input-fields"
    onChange={(e) => setData(e.target.files[0])}
   />
   <button onClick={handleSubmit}>submit</button>
  </div>
 );
}

export default Storage;
