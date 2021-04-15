import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import CreateGarden from '../pages/CreateGarden'
import SelectGardenType from '../pages/SelectGardenType'
import { Routes, Route } from "react-router-dom";
import NotFound from './NotFound'

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/garden">
        <Route path="/select-type" element={<SelectGardenType />} />
        <Route path="/create" >
          <Route path="/traditional" element={<CreateGarden />} />
        </Route>
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
