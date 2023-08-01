import "./App.css";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Home from "./containers/Home";
import Layout from "./containers/Layout";
import Work from "./containers/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/working"
            element={
              <Layout>
                <Work />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
