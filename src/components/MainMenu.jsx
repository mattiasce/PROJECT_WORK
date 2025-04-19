import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {
    const MobileMenu = () => {
        return (
            <div className="mobile-menu">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/prodotti">Prodotti</Link></li>
                    <li> <Link to="/chi-siamo">Chi Siamo</Link></li>
                    <li> <Link to="/contatti">Contatti</Link></li>
                </ul>
            </div>
        );
    };

    const [mostraMobileMenu, setMostraMobileMenu] = useState(false); // GESTIONE STATO MOBILE MENU
    const [nascondiElemento, setNascondiElemento] = useState(false); // GESTIONE STATO ELEMENTI DA NASCONDERE

    const handleMostraMobileMenu = () => {
        setMostraMobileMenu(!mostraMobileMenu); // SE CLICCO APRE, SE RICLICCO CHIUDE
        setNascondiElemento(!nascondiElemento); // NASCONDE ELEMENTO
    };

    return (
        <div className="flex gap-4 border-black border-[1px] text-black my-2 p-4 items-center">

            {/* RENDERING CONDIZIONALE PER NASCONDERE IL LOGO */}
            {!nascondiElemento && <p className="logo">LOGO</p>}

            <ul className="hidden sm:flex gap-4 ml-auto uppercase">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/prodotti">Prodotti</Link></li>
                <li> <Link to="/chi-siamo">Chi Siamo</Link></li>
                <li> <Link to="/contatti">Contatti</Link></li>
            </ul>

            <ul className="sm:hidden flex gap-4 ml-auto">
                <button className="h6-mobile-menu" onClick={handleMostraMobileMenu}>Menu</button>
                {/* RENDERING CONDIZIONALE PER MOBILE MENU */}
                {mostraMobileMenu && <MobileMenu />}
            </ul>

        </div>
    );
}
