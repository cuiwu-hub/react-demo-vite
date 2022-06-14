import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from '../layout/Index.jsx'
import Index from '../views/html/Index/Index'
import CssPart from "../views/css/CssPart/CssPart.jsx";
import Jscript from '../views/js/Jscript/Jscript.jsx'
import Tag from "../views/html/Tag/Tag.jsx";
import Test from '../views/css/Test/Test.jsx'
export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="" element={<Navigate to='html/tag' replace/>}></Route>
          {/* html部分 */}
          <Route path="html" element={<Index/>}>
            {/* 标签详解 */}
            <Route path="tag" element={<Tag/>}></Route>
          </Route>
          <Route path="css" element={<CssPart/>}>
            <Route path="test" element={<Test/>}></Route>
          </Route>
          <Route path="js" element={<Jscript/>}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  )
}