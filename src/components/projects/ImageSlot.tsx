import React, { useState } from 'react';
import { ImagePlus } from 'lucide-react';

interface ImageSlotProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** icon-only placeholder for thin strips / small slots */
  compact?: boolean;
}

/**
 * Drop-in <img> replacement. While the real asset is missing from
 * public/, renders a blank slot labelled with the expected file name —
 * drop a file at that path and it fills in automatically.
 */
const ImageSlot: React.FC<ImageSlotProps> = ({ src, alt, className = '', compact = false, ...rest }) => {
  const [missing, setMissing] = useState(false);
  const fileName = src.split('/').pop() ?? src;

  if (missing) {
    return (
      <div
        role="img"
        aria-label={`${alt} — awaiting upload as ${fileName}`}
        className={`${className} flex flex-col items-center justify-center gap-1 overflow-hidden bg-gray-100 dark:bg-neo-dark-blue/20 border-2 border-dashed border-neo-black/30 dark:border-neo-dark-border/60 text-gray-400 dark:text-neo-dark-blue-text ${compact ? '' : 'min-h-[4rem] py-2'}`}
      >
        <ImagePlus size={compact ? 12 : 18} className="shrink-0" />
        {!compact && (
          <span className="font-mono text-[10px] leading-tight text-center break-all px-2">
            {fileName}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setMissing(true)}
      {...rest}
    />
  );
};

export default ImageSlot;
