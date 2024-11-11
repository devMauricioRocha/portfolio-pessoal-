import { useState } from "react";
import { Link } from "react-scroll";
import NavLinks from "../componentes/NavLinks";

function MenuTablet({ sections, contatos, handleSetActive, isActive }) {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="hidden sm:flex lg:hidden fixed top-0 left-0 p-6 z-50 bg-theme-bg-900 w-full justify-between">
            <Link
                to="inicio"
                smooth={true}
                offset={0}
                onClick={() => setShowMenu(false)}
                className="font-mochiy cursor-pointer text-theme-text-primary"
            >
                Maurício Rocha
            </Link>

            <div className="flex justify-center items-center gap-6">
                <div className="flex justify-center items-center gap-2">
                    <a
                        href={contatos.linkedin.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={contatos.linkedin.nome}
                    >
                        {
                            <contatos.linkedin.icon className="w-8 h-8 hover:fill-theme-main-color fill-theme-text-primary duration-300" />
                        }
                    </a>
                    <a
                        href={contatos.github.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={contatos.github.nome}
                    >
                        {
                            <contatos.github.icon className="w-8 h-8 hover:fill-theme-main-color fill-theme-text-primary duration-300" />
                        }
                    </a>
                </div>

                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="relative w-6 h-full"
                >
                    <span
                        className={`${
                            showMenu
                                ? "translate-y-0 opacity-0 bg-theme-main-color"
                                : "-translate-y-2 bg-theme-text-primary"
                        } absolute left-0  duration-300 h-[2px]  w-full`}
                    ></span>
                    <span
                        className={`${
                            showMenu
                                ? " -rotate-45  bg-theme-main-color"
                                : "bg-theme-text-primary"
                        } absolute left-0  duration-300 h-[2px]  w-full`}
                    ></span>
                    <span
                        className={`${
                            showMenu
                                ? " translate-y-0 rotate-45 bg-theme-main-color"
                                : "translate-y-2 bg-theme-text-primary"
                        } absolute left-0 duration-300 h-[2px]  w-full`}
                    ></span>
                </button>
            </div>
            <nav
                className={`${
                    showMenu ? "h-[368px]" : "h-0"
                } w-1/3  bg-theme-bg-900 absolute top-full right-0 duration-500 overflow-hidden rounded-lg px-4`}
            >
                <NavLinks
                    sections={sections}
                    handleSetActive={handleSetActive}
                    isActive={isActive}
                />
            </nav>
        </div>
    );
}

export default MenuTablet;
