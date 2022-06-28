import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from '../layout/Index.jsx'
import Index from '../views/html/Index/Index'
import CssPart from "../views/css/Index/Index.jsx";
import Jscript from '../views/js/Jscript/Jscript.jsx'
import Tag from "../views/html/Tag/Tag.jsx";
import Test from '../views/css/Test/Test.jsx'
import Datajg from '../views/datajg/Index/Index'
import Xulun from '../views/datajg/Xulun/Index'
import LineTable from '../views/datajg/LineTable/Index'
import Algorithm from '../views/algorithm/Index/Index'
import List from '../views/algorithm/List/Index'
import Sort from '../views/algorithm/Sort/Index'
import DesignModule from '../views/designModule/Index/Index'
import SingleTon from '../views/designModule/SingleTon/Index'
import Observer from '../views/designModule/Observer/Index'
import Pubsub from '../views/designModule/Pubsub/Index'
import Strategy from '../views/designModule/Strategy/Index'
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
          <Route path="datajg" element={<Datajg/>}>
            <Route path="xulun" element={<Xulun/>}></Route>
            <Route path="lineTable" element={<LineTable/>}></Route>
          </Route>
          <Route path="algorithm" element={<Algorithm/>}>
            <Route path="list" element={<List/>}></Route>
            <Route path="sort" element={<Sort/>}></Route>
          </Route>
          <Route path="designModule" element={<DesignModule/>}>
            <Route path="singleTon" element={<SingleTon/>}></Route>
            <Route path="observer" element={<Observer/>}></Route>
            <Route path="pubsub" element={<Pubsub/>}></Route>
            <Route path="strategy" element={<Strategy/>}></Route>
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  )
}