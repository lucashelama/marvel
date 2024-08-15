import "./Header.css";
import logo from "../../assets/logo/Group.png"
import lupa from "../../assets/busca/Lupa/Shape.png"

function Header() {
    return (
        <header>
            <img src={logo} alt=""></img>
            <h1>Explore o Universo</h1>
            <p>Mergulhe no dominio deslumbrante de todos os personagens classicos que você adora</p>
            <div>
                <img src={lupa} alt="icone"></img>
                <input type="text" placeholder="procure por heróis" ></input>
            </div>

        </header>)
}

export default Header;