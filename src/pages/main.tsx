import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Slider from "@/components/slider";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100">
      <Header type="user" />
      <div className="flex px-24 gap-10">
        <Slider />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
