import NavLinks from "../componentes/NavLinks";

function MenuDesktop({
    sections,
    contatos,
    usuario,
    handleSetActive,
    isActive,
}) {
    return (
        <aside className="hidden lg:block px-6">
            <div className="flex flex-col items-center py-8 gap-4">
                <div className="overflow-hidden w-[152px] h-[152px] rounded-full bg-theme-text-primary shadow-[0_0_0_4px_var(--text-secundary)]">
                    <img
                        src={usuario.foto}
                        alt="Foto de Perfil"
                        className="object-cover h-full w-full"
                    />
                </div>

                <h3 className="font-mochiy text-theme-text-primary text-xl">
                    Maurício Rocha
                </h3>
            </div>

            <nav className="mt-8 w-full">
                <NavLinks
                    sections={sections}
                    handleSetActive={handleSetActive}
                    isActive={isActive}
                />
            </nav>

            <div className="flex items-end justify-center *: w-full gap-2 mt-28">
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
        </aside>
    );
}

export default MenuDesktop;
