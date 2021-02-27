import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import FlowerBeds from "../pages/FlowerBeds";
import FlowerBedForm from "../pages/FlowerBedForm";
import Vegetables from "../pages/SelectVegetables";
import { Routes, Route } from "react-router-dom";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:slug" element={<UserProfile />} />
      <Route path="/garden">
        <Route path="/overview" element={<FlowerBeds />} />
        <Route path="/create">
          <Route path="/form" element={<FlowerBedForm />} />
          <Route path="/select-vegetables" element={<Vegetables />} />
        </Route>
      </Route>
    </Routes>
  );
}
