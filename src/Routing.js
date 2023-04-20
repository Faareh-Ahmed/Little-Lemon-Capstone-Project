import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MenuPage from "./Pages/MenuPage";
import ReservationsPage from "./Pages/ReservationsPage";
import OrderOnlinePage from "./Pages/OrderOnlinePage";
import LoginPage from "./Pages/LoginPage";
// import Confirmation from "./Pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationsPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  ); 
}
