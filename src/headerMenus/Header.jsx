import { useState } from "react";
import MenuDesktop from "./MenuDesktop";
import MenuTablet from "./MenuTablet";
import MenuMobile from "./MenuMobile";
import { sections, contatos, usuario } from "../constant/data";

function Header() {
    const [hash, setHash] = useState("inicio");
    const handleSetActive = (to) => {
        setHash(to);
    };

    return (
        <header className="fixed top-0 left-0 z-50 lg:w-[280px] lg:h-screen bg-theme-bg-900 overflow-auto shadow-[6px_0_20px_var(--bg-900)]">
            <MenuDesktop
                sections={sections}
                contatos={contatos}
                usuario={usuario}
                handleSetActive={handleSetActive}
                isActive={hash}
            />
            <MenuTablet
                sections={sections}
                contatos={contatos}
                handleSetActive={handleSetActive}
                isActive={hash}
            />
            <MenuMobile
                sections={sections}
                handleSetActive={handleSetActive}
                isActive={hash}
            />
        </header>
    );
}

export default Header;
