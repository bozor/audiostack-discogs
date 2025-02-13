import { default as NextImage } from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const Image = ({src, alt, width, height, className, priority} : ImageProps) => {
  return (
    <NextImage 
      src={process.env.NODE_ENV === 'production' ? `/audiostack-discogs${src}` : src} 
      alt={alt} 
      width={width || 0} 
      height={height || 0}
      priority={priority}
      className={className}
    />
  )
}

export default Image;