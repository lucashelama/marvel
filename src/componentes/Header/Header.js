import "./Header.css";
import logo from "../../assets/logo/Group.png"
import lupa from "../../assets/busca/Lupa/Shape.png"

function Header() {
    return (
        <header>
            <img src={logo} alt=""></img>
            <h1>Explore o Universo</h1>
            <p>Mergulhe no dominio deslumbrante de todos os personagens classicos que você ama - e aqueles que você descobrirá em breve!</p>
            <div className="centralizar">
                <div className="input-box">
                    <img src={lupa} alt="icone"></img>
                    <input type="text" placeholder="procure por heróis" ></input>
                </div>
            </div>
        </header>)
}

export default Header;