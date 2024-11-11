import Linha1 from "../assets/icons/bg-icons/Linha1";
import Inicio from "./Inicio";
import SobreMim from "./SobreMim";
import Habilidades from "./Habilidades";
import Projetos from "./Projetos";
import Contatos from "./Contatos";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
    useEffect(() => {
        AOS.init();
    }, []);
    console.log(window.scrollY);

    return (
        <main className="bg-theme-bg-500 w-full relative overflow-x-hidden lg:pl-[280px]">
            <div className="w-[330px] h-[330px] rounded-full bg-primary opacity-50 absolute top-[390px] -left-[140px] -translate-y-1/2 blur-[200px] z-0"></div>
            <div className="absolute top-0 left-[500px]">
                <Linha1 />
            </div>
            <Inicio />
            <SobreMim />
            <Habilidades />
            <Projetos />
            <Contatos />
        </main>
    );
}

export default Main;
