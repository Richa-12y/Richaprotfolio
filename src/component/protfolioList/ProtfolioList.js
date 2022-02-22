import "./protfolioList.scss";

export default function ProtfolioList({ id, title, active, setSelected }) {
    return (
        <li
            className={active ? "portfolioList active" : "portfolioList"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    );
}