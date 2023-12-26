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
  showPhotoTitle?: boolean;
  showCategory?: boolean;
  categoryType?: string;
  children?: React.ReactNode;
  color?: string;
}

export const Card = ({
  title,
  content,
  link,
  image,
  showView,
  showPhotoTitle,
  showCategory,
  categoryType,
  color,
}: CardProps) => {
  return (
    // ProjectCard & photoCard use this component
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
      <div className='photoCardInfo'>
        {showPhotoTitle && <h2 className='photoCardTitle'>{title}</h2>}
        {showCategory && <div className='photoCategory'>{categoryType}</div>}
      </div>
      {link && (
        <div className='projectCardTitle'>
          <Link href={link} target='_blank' rel='noopener noreferrer'>
            {title}
          </Link>
        </div>
      )}
      <div>
        <p>{content}</p>
      </div>

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
