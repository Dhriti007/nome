import React from 'react';
import { CoverConfig } from '../../data/caseStudies';
import ImageSlot from './ImageSlot';

interface ProjectCoverProps {
  cover: CoverConfig;
  title: string;
  /** taller composition for the case-study hero */
  hero?: boolean;
}

const Dots = () => (
  <div className="flex gap-1.5">
    <span className="w-2.5 h-2.5 rounded-full bg-neo-red border border-neo-black" />
    <span className="w-2.5 h-2.5 rounded-full bg-neo-yellow border border-neo-black" />
    <span className="w-2.5 h-2.5 rounded-full bg-neo-blue border border-neo-black" />
  </div>
);

/**
 * Composed project covers — each project gets a bespoke scene built from
 * real Figma captures, framed in the portfolio's neo-brutalist language.
 * No stock imagery: every pixel inside comes from the actual design file.
 */
const ProjectCover: React.FC<ProjectCoverProps> = ({ cover, title, hero = false }) => {
  const { layout, bg, accent, main, side = [], strip } = cover;

  if (layout === 'browser') {
    return (
      <div className="absolute inset-0 p-3 sm:p-4 flex gap-3" style={{ background: bg }}>
        {/* Browser window */}
        <div className="flex-1 min-w-0 flex flex-col border-4 border-neo-black bg-white overflow-hidden">
          <div className="flex items-center gap-2 px-2.5 h-7 border-b-4 border-neo-black bg-gray-100 shrink-0">
            <Dots />
            <div className="flex-1 h-3 mx-1 bg-white border-2 border-neo-black/70" />
          </div>
          <div className="relative flex-1 min-h-0 overflow-hidden">
            <ImageSlot
              src={main}
              alt={`${title} interface`}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
        {/* Side rail */}
        {side.length > 0 && (
          <div className={`flex-col gap-3 ${hero ? 'hidden sm:flex w-2/5' : 'hidden md:flex w-1/3'}`}>
            {side.map((src, i) => (
              <div key={i} className="flex-1 min-h-0 border-4 border-neo-black bg-white overflow-hidden">
                <ImageSlot
                  src={src}
                  alt={`${title} detail ${i + 1}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
        {/* Accent bar */}
        <div
          className="absolute bottom-0 left-0 h-2.5 border-t-4 border-neo-black"
          style={{ background: accent, width: '38%' }}
        />
      </div>
    );
  }

  if (layout === 'brand') {
    return (
      <div className="absolute inset-0 flex flex-col" style={{ background: bg }}>
        <div className="relative flex-1 min-h-0 flex items-center justify-center p-4 sm:p-6">
          <div className={`border-4 border-neo-black bg-white overflow-hidden shadow-neo ${hero ? 'max-h-full' : 'max-h-[86%]'} max-w-[72%]`}>
            <ImageSlot
              src={main}
              alt={`${title} primary visual`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          {/* floating chips */}
          {side[0] && (
            <div className="absolute top-3 left-3 sm:top-4 sm:left-5 w-[26%] aspect-[4/3] border-4 border-neo-black bg-white overflow-hidden shadow-neo -rotate-3">
              <ImageSlot src={side[0]} alt={`${title} secondary visual`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          )}
          {side[1] && (
            <div className="absolute bottom-4 right-3 sm:bottom-5 sm:right-5 w-[24%] aspect-[4/3] border-4 border-neo-black bg-white overflow-hidden shadow-neo rotate-2">
              <ImageSlot src={side[1]} alt={`${title} detail visual`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          )}
        </div>
        {strip && (
          <div className="shrink-0 h-9 sm:h-11 border-t-4 border-neo-black bg-neo-black flex items-center px-3 overflow-hidden">
            <ImageSlot src={strip} alt={`${title} wordmark`} className="h-5 sm:h-6 w-24 object-contain" loading="lazy" compact />
            <div className="ml-auto w-14 h-2" style={{ background: accent }} />
          </div>
        )}
      </div>
    );
  }

  if (layout === 'duo') {
    return (
      <div className="absolute inset-0 p-3 sm:p-4 flex gap-3" style={{ background: bg }}>
        <div className="flex-[3] min-w-0 border-4 border-neo-black bg-black overflow-hidden">
          <ImageSlot src={main} alt={`${title} primary visual`} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-[2] min-w-0 flex flex-col gap-3">
          {side.map((src, i) => (
            <div key={i} className="flex-1 min-h-0 border-4 border-neo-black bg-black overflow-hidden">
              <ImageSlot src={src} alt={`${title} detail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div
          className="absolute bottom-0 right-0 h-2.5 border-t-4 border-l-4 border-neo-black"
          style={{ background: accent, width: '30%' }}
        />
      </div>
    );
  }

  // 'strip' — top brand strip + two-column body
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: bg }}>
      {strip && (
        <div className="shrink-0 h-9 sm:h-11 border-b-4 border-neo-black bg-neo-black flex items-center px-3 overflow-hidden">
          <ImageSlot src={strip} alt={`${title} wordmark`} className="h-5 sm:h-6 w-24 object-contain" loading="lazy" compact />
          <div className="ml-auto w-14 h-2" style={{ background: accent }} />
        </div>
      )}
      <div className="relative flex-1 min-h-0 p-3 sm:p-4 flex gap-3">
        <div className="flex-[3] min-w-0 border-4 border-neo-black bg-white overflow-hidden">
          <ImageSlot src={main} alt={`${title} primary visual`} className="w-full h-full object-cover object-top" loading="lazy" />
        </div>
        <div className="flex-[2] min-w-0 flex flex-col gap-3">
          {side.map((src, i) => (
            <div key={i} className="flex-1 min-h-0 border-4 border-neo-black bg-white overflow-hidden">
              <ImageSlot src={src} alt={`${title} detail ${i + 1}`} className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
          ))}
        </div>
        <div
          className="absolute bottom-0 left-0 h-2.5 border-t-4 border-neo-black"
          style={{ background: accent, width: '34%' }}
        />
      </div>
    </div>
  );
};

export default ProjectCover;
