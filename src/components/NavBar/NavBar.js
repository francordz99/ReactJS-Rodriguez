import CartWidget from "../CartWidget/CartWidget.js"

const NavBar = () => {
    return (
        <nav>
            <h3>Turbo Center</h3>
            <div>
                <button>ECU</button>
                <button>Inyeccion</button>
                <button>Turbos</button>
                <button>Intercoolers</button>
                <button>Instrumentos</button>
                <button>Kits</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar