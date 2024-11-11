import { useEffect } from "react";
import Header from "./headerMenus/Header";
import Footer from "./sections/Footer";
import Main from "./sections/Main";

function App() {
    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;
