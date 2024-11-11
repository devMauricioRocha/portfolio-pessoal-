import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function MenuMobile({ sections, handleSetActive, isActive }) {
    const [atEnd, setAtEnd] = useState(false);

    const handleScroll = () => {
        // Obtém a posição do scroll e a altura total da página
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - 70;

        // Se a posição do scroll atingir ou passar a altura total, estamos no final
        if (scrollPosition >= documentHeight) {
            setAtEnd(true);
        } else {
            setAtEnd(false);
        }
    };

    useEffect(() => {
        // Adiciona o ouvinte de evento de rolagem
        window.addEventListener("scroll", handleScroll);

        // Limpeza do evento quando o componente é desmontado
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav
            className={`${
                atEnd ? "opacity-0" : "opacity-100"
            } duration-300 sm:hidden fixed bottom-10 left-1/2 -translate-x-1/2 bg-theme-bg-900 rounded-full z-50 border flex max-w-full`}
        >
            {sections.map((section) => {
                return (
                    <Link
                        className="px-5 py-3 flex justify-center items-center cursor-pointer "
                        to={section.path}
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        offset={0}
                        onSetActive={handleSetActive}
                    >
                        <section.icon
                            className={`w-6 h-6 duration-500 ${
                                isActive === section.path
                                    ? "fill-theme-main-color"
                                    : "fill-theme-text-secundary"
                            }`}
                        />
                    </Link>
                );
            })}
        </nav>
    );
}

export default MenuMobile;
