function Footer() {
    return (
        <footer
            id="footer"
            className=" bg-theme-bg-500 lg:pl-[312px] text-xs sm:text-base border-t border-theme-text-secundary sm:flex text-theme-text-primary justify-between p-8 sm:py-12  flex-wrap"
        >
            <p className="mb-2">
                Copyright © 2024
                <span className="text-theme-main-color "> Maurício Rocha</span>.
                Todos os direitos reservados.
            </p>
            <p>
                Desenvolvido por
                <span className="text-theme-main-color "> Maurício Rocha</span>
            </p>
        </footer>
    );
}

export default Footer;
