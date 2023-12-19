import React from 'react';
import Image from 'next/image';
import { GoLinkExternal } from 'react-icons/go';

interface CardProps {
  title: string;
  content?: string;
  link?: string;
  image?: string;
  path?: string;
  showView?: boolean;
  children?: React.ReactNode;
}

export const Card = ({ title, content, link, image, showView }: CardProps) => {
  return (
    <div className='card'>
      <div className='photoCardImage'>
        {image && (
          <Image
            className='photoCardImage'
            width={0}
            height={0}
            sizes='100vw'
            src={image}
            alt={title}
          />
        )}
      </div>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='cardTitle'
      >
        {title}
      </a>
      <p>{content}</p>
      {showView && (
        <a
          href={link}
          target='_blank'
          className='btn-small'
          rel='noopener noreferrer'
        >
          {<span className='btn-small-txt'>View</span>}
          {showView && <GoLinkExternal className='linkExternal' />}
        </a>
      )}
    </div>
  );
};

export default Card;
