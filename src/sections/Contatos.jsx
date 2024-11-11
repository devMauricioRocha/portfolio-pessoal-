import { contatos } from "../constant/data";

function Contatos() {
    return (
        <section
            id="contatos"
            className="py-24 pb-[300px] flex flex-col justify-center items-center gap-20 font-popins relative z-10 px-8"
        >
            <h2
                data-aos="fade-up"
                className="text-theme-main-color text-4xl sm:text-5xl font-bold"
            >
                Contatos
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] sm:flex sm:justify-center sm:flex-wrap gap-6 w-full">
                {Object.keys(contatos).map((key, index) => {
                    const contato = contatos[key];
                    return (
                        <a
                            key={key}
                            href={contato.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            className="inline-flex flex-col gap-2 items-center group"
                        >
                            <div className="group-hover:bg-theme-main-color group-hover:shadow-[0_0_30px_var(--main-color)] duration-300 w-[4.5rem] h-[4.5rem] border border-theme-main-color rounded-full flex justify-center items-center">
                                <contato.icon className="group-hover:fill-theme-bg-500 duration-300 fill-theme-main-color w-8 h-8" />
                            </div>
                            <div className="w-36">
                                <p className="font-bold text-center text-theme-text-primary">
                                    {contato.nome}
                                </p>
                                <p className="text-theme-text-secundary text-center text-sm break-all">
                                    {contato.contato}
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}

export default Contatos;
