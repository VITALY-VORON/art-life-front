import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
    return ( 
        <div className="flex flex-col justify-between h-screen bg-gray-100">
            <Header type={"Auth"} />
            <Outlet />
            <Footer />
        </div>
     );
}
 
export default AuthPage;