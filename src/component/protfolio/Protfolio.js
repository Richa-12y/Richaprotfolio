import "./protfolio.scss";

export default function Protfolio() {
    return (
        <div className='protfolio' id='protfolio'>
            <h1>protfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.EgRuBTZjmGGV9qwSGqswewHaEJ&pid=Api&P=0&w=292&h=164" alt="Box office" />
                    <h3>Boxoffice App</h3>
                </div>
            </div>
        </div>
    )
}
