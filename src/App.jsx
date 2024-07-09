import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from "../pages/Vans/Vans";
import "../server"; // Import the server
import VanDetail from "../pages/Vans/VanDetail";
import Layout from "../components/Layout";
import Dashboard from "../pages/Host/Dashboard";
import Reviews from "../pages/Host/Reviews";
import Income from "../pages/Host/Income";
import HostLayout from "../components/HostLayout";
import HostVans from "../pages/Host/HostVans";
import HostVanDetail from "../pages/Host/HostVanDetail";
import HostVanInfo from "../pages/Host/HostVanInfo";
import HostVanPhotos from "../pages/Host/HostVanPhotos";
import HostVanPricing from "../pages/Host/HostVanPricing";
import NotFound from "../pages/Vans/NotFound";
import Login from "../pages/Login";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="login" element={<Login />} />

            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
