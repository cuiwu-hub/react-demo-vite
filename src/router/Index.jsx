import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from '../layout/Index.jsx'
import Index from '../views/Index/Index'
import CssPart from "../views/CssPart/CssPart.jsx";
import Jscript from '../views/Jscript/Jscript.jsx'
import Tag from "../views/Tag/Tag.jsx";
export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="" element={<Navigate to='html' replace/>}></Route>
          {/* html部分 */}
          <Route path="html" element={<Index/>}>
            {/* 标签详解 */}
            <Route path="tag" element={<Tag/>}></Route>
          </Route>
          <Route path="css" element={<CssPart/>}></Route>
          <Route path="js" element={<Jscript/>}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  )
}