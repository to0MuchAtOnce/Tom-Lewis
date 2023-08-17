import React from "react";

interface CardProps {
    title: string;
    content: string;
    link: string;
}

export const Card = ({ title, content, link }: CardProps) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
            <a href={link} target="blank" rel="noopener noreferrer">View</a>
        </div>
    )
}

export default Card;