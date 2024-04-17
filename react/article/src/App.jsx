import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/login";
import Layout from "@/pages/layout";
import { AuthRoute } from "@/components/AuthRoute"; // 路由守卫组件

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<AuthRoute><Layout/></AuthRoute>}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
