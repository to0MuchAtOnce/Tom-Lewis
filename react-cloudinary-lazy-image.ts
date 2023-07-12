declare module 'react-cloudinary-lazy-image' {
  import { Component, CSSProperties, ReactNode } from 'react';

  interface LazyLoadImageProps {
    alt?: string;
    height?: number | string;
    width?: number | string;
    src?: string;
    srcSet?: string;
    placeholderSrc?: string;
    threshold?: number;
    visibleByDefault?: boolean;
    once?: boolean;
    scrollPosition?: number;
    beforeLoad?: () => void;
    afterLoad?: () => void;
    onError?: () => void;
    onClick?: () => void;
    effect?: string;
    className?: string;
    style?: CSSProperties;
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    placeholder?: ReactNode;
    delayMethod?: 'debounce' | 'throttle';
    delayTime?: number;
  }

  export class LazyLoadImage extends Component<LazyLoadImageProps> {}
}
