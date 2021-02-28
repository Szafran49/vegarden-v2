import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import FlowerBeds from "../pages/FlowerBeds";
import CreateGarden from '../pages/CreateGarden'
import { Routes, Route } from "react-router-dom";
import NotFound from './NotFound'

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:slug" element={<UserProfile />} />
      <Route path="/garden">
        <Route path="/overview" element={<FlowerBeds />} />
        <Route path="/create" element={<CreateGarden />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
