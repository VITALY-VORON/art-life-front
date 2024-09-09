import { User } from "@/api/actions/user";
import { customAxios } from "@/api/axios";
import { TUser } from "@/api/types/user.type";
import Footer from "@/components/footer";
import { MainHeaderComponent } from "@/components/header";
import Slider from "@/components/slider";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import useUserStore from "@/store/user.store";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const MainPage = () => {

  const { getData } = useLocalStorage()
  const { setUserData } = useUserStore()
  const { getUser } = new User();

  (async () => {
    const userId = getData("user")
    const res = (await getUser(userId)).data
    console.log(res);
    
  })
  
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100">
      <MainHeaderComponent />
      <div className="flex px-24 gap-10 bg-gray-100">
        <Slider />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
