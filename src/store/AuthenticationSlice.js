 // LOGIC FOR LOGIN / SIGNUP

 import { createSlice } from "@reduxjs/toolkit";



 const initialState = {
  
  name: "",
  email: "",
  _id: "",
  role: "",
  
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  // create your reducres & extra reducer here
});


export default authSlice.reducer


