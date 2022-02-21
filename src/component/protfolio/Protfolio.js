import { useState } from "react";
import ProtfolioList from "../protfolioList/ProtfolioList";
import "./protfolio.scss";

export default function Protfolio() {
    const [selected, setSelected] = useState('featured')
    const list = [
        {
            id: "featured",
            title: "Featured",

        },

        {
            id: "web",
            title: "Web App",

        },
        {
            id: "mobile",
            title: "Mobile App",

        },
        {
            id: "design",
            title: "Design",

        },
        {
            id: "content",
            title: "Content",

        },
    ];
    return (

        <div className='protfolio' id='protfolio'>
            <h1>protfolio</h1>
            <ul>
                {list.map((item) => (
                    <ProtfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.EgRuBTZjmGGV9qwSGqswewHaEJ&pid=Api&P=0&w=292&h=164" alt="Box office" />
                    <h3>Boxoffice App</h3>
                </div>

                <div className="item">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.EgRuBTZjmGGV9qwSGqswewHaEJ&pid=Api&P=0&w=292&h=164" alt="Box office" />
                    <h3>Boxoffice App</h3>
                </div>
                <div className="item">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.EgRuBTZjmGGV9qwSGqswewHaEJ&pid=Api&P=0&w=292&h=164" alt="Box office" />
                    <h3>Boxoffice App</h3>
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.EgRuBTZjmGGV9qwSGqswewHaEJ&pid=Api&P=0&w=292&h=164" alt="Box office" />
                    <h3>Boxoffice App</h3>
                </div>

                <div className="item">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.EgRuBTZjmGGV9qwSGqswewHaEJ&pid=Api&P=0&w=292&h=164" alt="Box office" />
                    <h3>Boxoffice App</h3>
                </div>
                <div className="item">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.EgRuBTZjmGGV9qwSGqswewHaEJ&pid=Api&P=0&w=292&h=164" alt="Box office" />
                    <h3>Boxoffice App</h3>
                </div>

            </div>


        </div>
    )
}
