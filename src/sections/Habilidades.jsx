import { skills } from "../constant/data";

function Habilidades() {
    return (
        <section
            id="habilidades"
            className="py-24 flex flex-col justify-center items-center gap-20 font-popins relative z-10 px-8"
        >
            <h2
                data-aos="fade-up"
                className="text-theme-main-color text-4xl sm:text-5xl font-bold"
            >
                Habilidades
            </h2>
            <ul className="flex justify-center items-center gap-1 sm:gap-4 flex-wrap ">
                {skills.map((skill, index) => {
                    return (
                        <li
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            className="group border border-dashed border-theme-main-color w-[152px] h-[118px] rounded-lg flex flex-col justify-center items-center text-theme-text-primary"
                        >
                            <img
                                src={skill.icon}
                                alt=""
                                className="w-16 h-16 group-hover:scale-125 duration-300"
                            />
                            <p>{skill.nome}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Habilidades;
