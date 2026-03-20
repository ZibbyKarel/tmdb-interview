import type * as React from 'react';
import type { ImgHTMLAttributes, ReactNode } from 'react';
import { useState } from 'react';
import { Placeholder } from '../Placeholder/Placeholder';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: ReactNode;
}

export const Image: React.FC<ImageProps> = ({
  alt,
  onError,
  onLoad,
  placeholder = <Placeholder />,
  src,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const shouldShowPlaceholder = !src || !isLoaded || hasError;

  return (
    <div className="relative h-full w-full">
      {shouldShowPlaceholder && placeholder}
      {src && (
        <img
          {...props}
          alt={alt}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            isLoaded && !hasError ? 'opacity-100' : 'opacity-0'
          }`}
          onError={(event) => {
            setHasError(true);
            onError?.(event);
          }}
          onLoad={(event) => {
            setIsLoaded(true);
            onLoad?.(event);
          }}
          src={src}
        />
      )}
    </div>
  );
};
