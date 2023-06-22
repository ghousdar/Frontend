import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes> 
          <Route
            exact
            path="*"
            name="Not Found"
            element={<NotFound />}
          />
          <Route exact path="login" name="Login" element={<Login/>} />
          <Route exact path="register" name="Register" element={<Register/>} />

          <Route path="/" element={<DefaultLayout/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
