import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import CreateGarden from '../pages/CreateGarden'
import CreateGarden2 from '../pages/CreateGarden/NewLayout/CreateGarden'
import SelectGardenType from '../pages/SelectGardenType'
import { Routes, Route } from "react-router-dom";
import NotFound from './NotFound'

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:slug" element={<UserProfile />} />
      <Route path="/garden">
        <Route path="/select-type" element={<SelectGardenType />} />
        <Route path="/create" >
          <Route path="/traditional" element={<CreateGarden />} />
          <Route path="/exp" element={<CreateGarden2 />} />
        </Route>
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
