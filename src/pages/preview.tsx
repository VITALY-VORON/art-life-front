import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Create from "@/components/preview/create";
import Go from "@/components/preview/go";
import How from "@/components/preview/how";
import Spec from "@/components/preview/spec";
import Uns from "@/components/preview/uns";

const Preview = () => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <Header type="preview" />
            <div className="flex flex-col">
                <section className="min-h-screen">
                    <Create />
                </section>
                <section className="min-h-screen">
                    <How />
                </section>
                <section className="min-h-screen">
                    <Spec />
                </section>
                <section className="min-h-screen">
                    <Go />
                </section>
                <section className="min-h-screen">
                    <Uns />
                </section>
            </div>
            <Footer />
        </div>
     );
}
 
export default Preview;
