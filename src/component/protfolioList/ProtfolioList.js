import React from 'react'
import "./protfolioList.scss";

export default function ProtfolioList({ id, title, active, setSelected }) {
    return (
        <li className={active ? "protfolioList active" : "protfolioList"}
            onclick={() => setSelected(id)}> {title}
        </li >
    );
}
