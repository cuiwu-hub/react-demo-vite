import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from '../layout/Index.jsx'
import Index from '../views/Index/Index'
import CssPart from "../views/CssPart/CssPart.jsx";
export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="" element={<Navigate to='html' replace/>}></Route>
          <Route path="html" element={<Index/>}></Route>
          <Route path="css" element={<CssPart/>}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  )
}