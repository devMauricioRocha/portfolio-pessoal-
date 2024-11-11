import { useEffect, useState } from "react";

function Inicio() {
    const [texto, setTexto] = useState();
    const [posicao, setPosicao] = useState(0);
    const [apagando, setApagando] = useState(false);
    const stack = "Desenvolvedor Front-End     ";

    useEffect(() => {
        const timer = setInterval(() => {
            if (!apagando) {
                // Escrevendo
                setTexto(stack.slice(0, posicao + 1));
                setPosicao(posicao + 1);

                // Se terminou de escrever, muda para apagar após uma pausa
                if (posicao === stack.length) {
                    setApagando(true);
                }
            } else {
                // Apagando
                setTexto(stack.slice(0, posicao - 1));
                setPosicao(posicao - 1);

                // Se terminou de apagar, volta a escrever
                if (posicao === 0) {
                    setApagando(false);
                    setTexto("");
                }
            }
        }, 150);

        return () => clearInterval(timer); // Limpa o timer quando o componente é desmontado
    }, [posicao, apagando]);

    return (
        <section
            id="inicio"
            className="flex items-center min-h-dvh w-full relative overflow-clip text-theme-text-primary"
        >
            <div className=" px-8 relative z-10">
                <h3
                    data-aos="fade-up"
                    className="text-[1.5rem] sm:text-3xl font-semibold"
                >
                    Olá, eu sou
                </h3>
                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-3xl sm:text-6xl font-mochiy"
                >
                    Maurício Rocha
                </h1>
                <h3
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-[1.5rem] sm:text-3xl font-semibold pt-4"
                >
                    E eu sou um{" "}
                    <span className=" text-theme-main-color underline relative">
                        {texto}
                        <span className="absolute top-0 -right-1 w-1 h-full bg-theme-main-color"></span>
                    </span>
                </h3>

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="text-base text-theme-text-secundary pt-4 text-slate-300 lg:w-[770px]"
                >
                    Sou formado em Análise e Desenvolvimento de Sistemas e tenho
                    desenvolvido minhas habilidades por meio de desafios online,
                    como os do Frontend Mentor. Minha experiência inclui a
                    criação de projetos que focam em design responsivo e
                    usabilidade, sempre buscando soluções práticas e eficientes.
                </p>
            </div>
        </section>
    );
}

export default Inicio;
