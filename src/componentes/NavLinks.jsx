import { Link } from "react-scroll";
import { contatos } from "../constant/data";

function NavLinks({ sections, handleSetActive, isActive }) {
    return (
        <ul className="font-popins flex flex-col items-center">
            {sections.map((section, index) => {
                return (
                    <li className="w-full">
                        <Link
                            key={index}
                            className={`flex items-center group py-4 text-center cursor-pointer`}
                            to={section.path}
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            offset={0}
                            onSetActive={handleSetActive}
                        >
                            {
                                <section.icon
                                    className={`w-6 h-6 mr-8 ${
                                        isActive === section.path
                                            ? "fill-theme-main-color"
                                            : "fill-theme-text-secundary"
                                    }`}
                                />
                            }

                            <p
                                className={`inline font-bold gradient-text group-hover:gradient-text-hover uppercase ${
                                    isActive === section.path
                                        ? "gradient-text-hover"
                                        : ""
                                } `}
                            >
                                {section.section}
                            </p>
                        </Link>
                    </li>
                );
            })}

            <li className="w-full pt-4">
                <a
                    href={contatos.celular.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="hover:bg-theme-bg-900 border hover:border-theme-main-color hover:text-theme-main-color bg-theme-main-color w-full rounded-2xl  font-bold text-theme-bg-900 px-4 py-2 duration-300">
                        Enviar WhatsApp
                    </button>
                </a>
            </li>
        </ul>
    );
}

export default NavLinks;
