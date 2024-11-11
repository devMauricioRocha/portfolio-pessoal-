// Foto de perfil
import fotoPerfil from "../assets/image/perfil/foto_mauricio.jpg";

// Imagem de Projetos
import mercado_livre from "../assets/image/projetos/mercado-livre.png";
import sobremesas from "../assets/image/projetos/loja-sobremesas.jpg";
import calculadora from "../assets/image/projetos/mortgage-calculator.jpg";
import lista_tarefas from "../assets/image/projetos/lista-de-tarefas.PNG";

// icons menus
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import {
    MdHome,
    MdPerson,
    MdBuild,
    MdWork,
    MdContactMail,
    MdEmail,
    MdPhoneInTalk,
    MdMapsHomeWork,
} from "react-icons/md";

// icons skills
import javascript from "../assets/icons/skills-icons/icons8-javascript-96.png";
import css3 from "../assets/icons/skills-icons/icons8-css-96.png";
import html from "../assets/icons/skills-icons/icons8-html-96.png";
import figma from "../assets/icons/skills-icons/icons8-figma-96.png";
import mongodb from "../assets/icons/skills-icons/icons8-mongodb-96.png";
import react from "../assets/icons/skills-icons/icons8-nativo-de-reagir-96.png";
import node from "../assets/icons/skills-icons/icons8-nodejs-96.png";
import tailwindcss from "../assets/icons/skills-icons/icons8-tailwindcss-96.png";
import typescript from "../assets/icons/skills-icons/icons8-texto-datilografado-96.png";
import sass from "../assets/icons/skills-icons/icons8-atrevimento-96.png";

export const usuario = {
    nome: "Maurício Rocha",
    stack: "Desenvolvedor Front-End",
    foto: fotoPerfil,
};

export const skills = [
    {
        id: 1,
        nome: "JavaScript",
        icon: javascript,
    },
    {
        id: 2,
        nome: "CSS3",
        icon: css3,
    },
    {
        id: 3,
        nome: "HTML",
        icon: html,
    },
    {
        id: 4,
        nome: "TailwindCSS",
        icon: tailwindcss,
    },
    {
        id: 5,
        nome: "TypeScript",
        icon: typescript,
    },
    {
        id: 6,
        nome: "Figma",
        icon: figma,
    },
    {
        id: 7,
        nome: "MongoDB",
        icon: mongodb,
    },
    {
        id: 8,
        nome: "Node JS",
        icon: node,
    },
    {
        id: 9,
        nome: "React",
        icon: react,
    },
    {
        id: 10,
        nome: "Sass",
        icon: sass,
    },
];

export const contatos = {
    email: {
        nome: "Email",
        contato: "mauricio_pessoal@outlook.com",
        link: "mailto:mauricio_pessoal@outlook.com",
        icon: MdEmail,
    },
    celular: {
        nome: "Celular",
        contato: "(21)99184-9864",
        link: "https://api.whatsapp.com/send?phone=552199184-9864&text=Ol%C3%A1%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20negocios",
        icon: MdPhoneInTalk,
    },
    linkedin: {
        nome: "Linkedin",
        contato: "mauricio-rocha98",
        link: "https://www.linkedin.com/in/mauricio-rocha98/",
        icon: FaLinkedin,
    },
    github: {
        nome: "GitHub",
        contato: "devMauricioRocha",
        link: "https://github.com/devMauricioRocha",
        icon: FaGithub,
    },
    endereco: {
        nome: "Endereço",
        contato: "São Gonçalo/RJ",
        link: "https://www.google.com.br/maps/place/S%C3%A3o+Gon%C3%A7alo,+RJ/@-22.8210451,-43.3144826,11z/data=!3m1!4b1!4m6!3m5!1s0x9990f48a8830e1:0x96e11303c14c3674!8m2!3d-22.8235278!4d-43.0477582!16s%2Fg%2F11bc5ws1gr?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
        icon: MdMapsHomeWork,
    },
};

export const projetos = [
    {
        id: 1,
        imagem: mercado_livre,
        titulo: "shopping mercado livre",
        linguagens: ["html", "css", "react"],
        codigo: "https://github.com/devMauricioRocha/shopping-mercado-livre",
        demo: "https://shopping-comprafacil.vercel.app/",
    },
    {
        id: 2,
        imagem: sobremesas,
        titulo: "loja de sobremesas",
        linguagens: ["html", "tailwindcss", "javascript"],
        codigo: "https://github.com/devMauricioRocha/product-list-with-cart",
        demo: "https://confeitaria-charmosa.vercel.app/",
    },
    {
        id: 3,
        imagem: calculadora,
        titulo: "calculadora de hipoteca",
        linguagens: ["html", "tailwindcss", "javascript"],
        codigo: "https://github.com/devMauricioRocha/mortgage-repayment-calculator",
        demo: "https://calculadora-hipoteca-ten.vercel.app/",
    },
    {
        id: 4,
        imagem: lista_tarefas,
        titulo: "lista de tarefas",
        linguagens: ["html", "css", "react"],
        codigo: "https://github.com/devMauricioRocha/lista-de-tarefas-react/tree/main",
        demo: "https://minhas-tarefas-dun.vercel.app/",
    },
];

export const sections = [
    {
        section: "inicio",
        path: "inicio",
        icon: MdHome,
    },
    {
        section: "sobre mim",
        path: "sobre",
        icon: MdPerson,
    },
    {
        section: "habilidades",
        path: "habilidades",

        icon: MdBuild,
    },
    {
        section: "projetos",
        path: "projetos",
        icon: MdWork,
    },
    {
        section: "contatos",
        path: "contatos",
        icon: MdContactMail,
    },
];
