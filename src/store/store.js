import { configureStore} from "@reduxjs/toolkit"
import authReducer from "./AuthenticationSlice"



const store = configureStore ({

    reducer: {

        auth: authReducer
    
          // Configure your stor here

    }
  
});


export default store;