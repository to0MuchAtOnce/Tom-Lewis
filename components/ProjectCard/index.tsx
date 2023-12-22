import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      {link && (
        <div className='cardTitle'>
          <Link href={link} target='_blank' rel='noopener noreferrer'>
            {title}
          </Link>
        </div>
      )}

      <p>{content}</p>

      {showView && (
        <div className='btn-small'>
          {link && (
            <Link href={link} target='_blank' rel='noopener noreferrer'>
              {<span className='btn-small-txt'>View</span>}
              {showView && <GoLinkExternal className='linkExternal' />}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
