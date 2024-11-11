import Projeto from "../componentes/Projeto";
import { projetos } from "../constant/data";

function Projetos() {
    // Quantidade de colunas na grade
    const colunas = 2;

    return (
        <section
            id="projetos"
            className="py-24 flex flex-col justify-center items-center gap-20 font-popins relative z-10 px-8"
        >
            <h2
                data-aos="fade-up"
                className="text-theme-main-color text-4xl sm:text-5xl font-bold"
            >
                Projetos
            </h2>
            <ul className="w-full grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-16">
                {projetos.map(
                    (
                        { id, imagem, titulo, linguagens, codigo, demo },
                        index
                    ) => {
                        // Calcula o delay para cada projeto, reiniciando a cada linha
                        const delay = (index % colunas) * 100;

                        return (
                            <Projeto
                                key={id}
                                imagem={imagem}
                                titulo={titulo}
                                linguagens={linguagens}
                                codigo={codigo}
                                demo={demo}
                                delay={delay} // Passa o delay calculado para cada projeto
                            />
                        );
                    }
                )}
            </ul>
        </section>
    );
}

export default Projetos;
