import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const MainLayout = (props) => {
    return (
        <div className="flex flex-col w-full">
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}