function Projeto(props) {
    return (
        <li data-aos="fade-up" data-aos-delay={props.delay} className="w-full">
            <div className="relative ">
                <img
                    src={props.imagem}
                    alt="Imagem do projeto"
                    className="aspect-[4/3] rounded-lg"
                    title="Imagem do projeto"
                />
                <div className="lg:opacity-0 lg:hover:opacity-100 duration-300 ease-linear  lg:absolute top-0 w-full h-full lg:bg-theme-bg-900-opacity flex lg:flex-col justify-evenly lg:justify-center items-center sm:text-xl text-lg">
                    <a
                        href={props.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uppercase font-bold gradient-text hover:gradient-text-hover py-2 tracking-wide "
                    >
                        VER PROJETO
                    </a>
                    <a
                        href={props.codigo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uppercase font-bold gradient-text hover:gradient-text-hover py-2 tracking-wide "
                    >
                        VER CODIGO
                    </a>
                </div>
            </div>
            <div>
                <h5
                    className="text-theme-text-primary text-2xl font-bold mt-2 sm:mt-6 uppercase truncate"
                    title={props.titulo}
                >
                    {props.titulo}
                </h5>
                <div
                    className="uppercase text-theme-text-secundary text-lg font-semibold flex gap-4 flex-wrap"
                    title="Linguagens de programações"
                >
                    {props.linguagens.map((item) => {
                        return <p key={item}>{item}</p>;
                    })}
                </div>
            </div>
        </li>
    );
}

export default Projeto;
