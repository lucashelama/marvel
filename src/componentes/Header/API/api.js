import { useEffect, useState } from "react";
import "./Cards.css";
import iconeHeroi from "../../../assets/icones/heroi/noun_Superhero_2227044.png"
import ligado from "../../../assets/toggle/Group 6.png"
import desligado from "../../../assets/toggle/Group 2@1,5x.png"
import coracao from "../../../assets/icones/heart/Path.png"


function API() {
    const [data, setData] = useState([]);




    useEffect(() => {
        const data = async () => await fetch("http://gateway.marvel.com/v1/public/characters?ts=teste&apikey=213b8d7d0954d8ca2d411eeeea414793&hash=f1b50c968dff7522c943e124b9d7c1bd", {
            "method": "GET",
        })
            .then((o) => o.json()).then((k) => setData(k))
        data()
    }, [data])
    console.log(data)
    return (

        <div className="divGrande">
        <div className="linhaSuperior">
            <p className="encontrados">Encontrados {data.data?.count} heróis</p>
            <img src={iconeHeroi} alt=""></img>
            <p>Ordenar por nome A - Z</p>
            { false ? (<img src={ligado} alt=""></img>): (<img src={desligado} alt=""></img>)}
            <img src={coracao} alt=""></img>
            <p>Somente as favoritos</p>
        
        </div>
        <div className="lista-de-herois">{
            data.data?.results?.map((item) => {
                return (
                            <div className="cards" key={item.id}>
                            <img className="fotos-dos-herois" src={`${item.thumbnail.path}.jpg`} alt="thumbs"></img>
                            <p>{item.name}</p>
                        </div>)
            })
        }</div></div>
)
}



export default API;