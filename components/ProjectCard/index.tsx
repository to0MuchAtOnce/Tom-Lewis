import React from "react";
import { GoLinkExternal } from "react-icons/go"

interface CardProps {
    title: string;
    content: string;
    link: string;
}

export const Card = ({ title, content, link }: CardProps) => {
    return (
        <div className="card">
            <a href={link} target="_blank" rel="noopener noreferrer" className="cardTitle">{title}</a>
            <p>{content}</p>
            <a href={link} target="_blank" className="btn-small" rel="noopener noreferrer">View <GoLinkExternal /></a>
        </div>
    )
}

export default Card;