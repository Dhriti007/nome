import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Figma, ZoomIn } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudies';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import Reveal from './Reveal';
import ProjectCover from './ProjectCover';
import ImageSlot from './ImageSlot';

/* ---------------------------------- bits ---------------------------------- */

export const SectionTag: React.FC<{ label: string; color?: string }> = ({
  label,
  color = 'bg-neo-blue dark:bg-neo-dark-blue-accent',
}) => (
  <div
    className={`inline-block ${color} px-4 py-1 text-white border-4 border-neo-black dark:border-neo-dark-border transform -rotate-1 mb-4`}
  >
    <span className="font-display font-bold text-lg sm:text-xl uppercase">{label}</span>
  </div>
);

export const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="sub-heading mb-6 dark:text-white">{children}</h2>
);

/** A real capture from the design file, framed like an exhibit. */
export const DesignFrame: React.FC<{
  src: string;
  caption: string;
  tall?: boolean;
  wide?: boolean;
  className?: string;
}> = ({ src, caption, tall = false, wide = false, className = '' }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        className={`group/frame block w-full text-left border-4 border-neo-black dark:border-neo-dark-border bg-white dark:bg-neo-dark-box shadow-neo dark:shadow-neo-dark overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neo-blue ${className}`}
        aria-label={`Enlarge: ${caption}`}
      >
        <div className={`relative overflow-hidden ${wide ? 'aspect-[16/9] sm:aspect-[2/1]' : tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
          <ImageSlot
            src={src}
            alt={caption}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/frame:scale-[1.05]"
          />
          <span className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white dark:bg-neo-dark-box border-2 border-neo-black dark:border-neo-dark-border opacity-0 group-hover/frame:opacity-100 transition-opacity duration-200">
            <ZoomIn size={15} className="text-neo-black dark:text-white" />
          </span>
        </div>
        <p className="px-3 py-2.5 text-xs sm:text-sm font-medium border-t-4 border-neo-black dark:border-neo-dark-border text-gray-700 dark:text-neo-dark-blue-text">
          {caption}
        </p>
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-4xl border-4 border-neo-black dark:border-neo-dark-border bg-white dark:bg-neo-dark-box p-2 sm:p-3 shadow-neo-lg dark:shadow-neo-dark-lg">
      <DialogTitle className="sr-only">{caption}</DialogTitle>
      <ImageSlot src={src} alt={caption} className="w-full max-h-[75vh] object-contain min-h-[40vh]" />
      <p className="px-2 pt-2 text-sm font-medium text-gray-700 dark:text-neo-dark-blue-text">{caption}</p>
    </DialogContent>
  </Dialog>
);

/* --------------------------------- sections -------------------------------- */

export const CaseStudyHero: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <header className="mb-16 sm:mb-20">
    <Reveal y={16} duration={0.45}>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <Link
          to="/projects"
          className="neo-box p-3 inline-block bg-white dark:bg-neo-dark-box hover:-translate-y-1 transition-transform"
          aria-label="Back to all projects"
        >
          <ArrowLeft className="text-neo-black dark:text-white" />
        </Link>
        <SectionTag label={`Case Study 0${study.order}`} />
      </div>
    </Reveal>

    <Reveal y={20} delay={0.08} duration={0.5}>
      <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-tight dark:text-white mb-4">
        {study.title}
      </h1>
      <p className="text-xl sm:text-2xl font-medium max-w-3xl text-gray-700 dark:text-neo-dark-blue-text mb-8">
        {study.tagline}
      </p>
    </Reveal>

    <Reveal y={18} delay={0.16} duration={0.5}>
      <div className="flex flex-wrap gap-2.5 mb-10">
        <span className="px-3 py-1.5 max-w-full leading-tight bg-neo-red dark:bg-neo-dark-red text-white text-sm font-display font-bold uppercase border-2 border-neo-black dark:border-neo-dark-border">
          {study.category}
        </span>
        <span className="px-3 py-1.5 max-w-full leading-tight bg-neo-yellow dark:bg-neo-dark-yellow text-neo-black dark:text-neo-dark-blue-deep text-sm font-display font-bold uppercase border-2 border-neo-black dark:border-neo-dark-border">
          {study.year}
        </span>
        <span className="px-3 py-1.5 max-w-full leading-tight bg-white dark:bg-neo-dark-box text-neo-black dark:text-white text-sm font-display font-bold uppercase border-2 border-neo-black dark:border-neo-dark-border">
          {study.role}
        </span>
      </div>
    </Reveal>

    <Reveal y={26} delay={0.22} duration={0.55}>
      <div className="neo-box p-1">
        <div className="relative border-4 border-neo-black dark:border-neo-dark-border overflow-hidden h-[46vh] sm:h-[56vh]">
          <ProjectCover cover={study.cover} title={study.title} hero />
        </div>
      </div>
    </Reveal>
  </header>
);

export const CaseStudyMeta: React.FC<{ study: CaseStudy }> = ({ study }) => {
  const rows: { label: string; value: string; chips?: string[] }[] = [
    { label: 'Role', value: study.role },
    { label: 'Scope', value: study.scope },
    { label: 'Year', value: study.year },
    { label: 'Tools', value: study.tools.join(', ') },
    { label: 'Deliverables', value: '', chips: study.deliverables },
    { label: 'Disciplines', value: '', chips: study.disciplines },
  ];

  return (
    <section className="mb-16 sm:mb-24">
      <Reveal>
        <SectionTag label="Overview" />
        <div className="neo-box bg-white dark:bg-neo-dark-box p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {rows.map((row) => (
              <div key={row.label}>
                <p className="font-display font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-neo-dark-blue-text mb-1.5">
                  {row.label}
                </p>
                {row.chips ? (
                  <div className="flex flex-wrap gap-1.5">
                    {row.chips.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-medium px-2 py-0.5 bg-neo-yellow/70 dark:bg-neo-dark-yellow/80 text-neo-black dark:text-neo-dark-blue-deep border-2 border-neo-black dark:border-neo-dark-border"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="font-medium dark:text-white">{row.value}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t-4 border-dashed border-neo-black/20 dark:border-neo-dark-border/60">
            <a
              href={study.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-neo-black dark:bg-neo-dark-border text-white font-display font-bold text-sm border-2 border-neo-black dark:border-neo-dark-border shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform"
            >
              <Figma size={16} /> Open in Figma <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export const CaseStudyChallenge: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <section className="mb-16 sm:mb-24">
    <Reveal>
      <SectionTag label="The Challenge" color="bg-neo-red dark:bg-neo-dark-red" />
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-4xl mb-6 dark:text-white">
        {study.challenge}
      </h2>
      <p className="text-lg sm:text-xl leading-relaxed max-w-3xl text-gray-700 dark:text-neo-dark-blue-text">
        {study.challengeBody}
      </p>
    </Reveal>
  </section>
);

export const CaseStudyApproach: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <section className="mb-16 sm:mb-24">
    <Reveal>
      <SectionTag label="Design Approach" />
      <SectionHeading>
        How it <span className="text-neo-red dark:text-neo-dark-red">came together</span>
      </SectionHeading>
    </Reveal>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {study.approach.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.08}>
          <div className="neo-box bg-white dark:bg-neo-dark-box p-6 h-full relative">
            <span className="absolute -top-4 -left-2 w-9 h-9 flex items-center justify-center bg-neo-yellow dark:bg-neo-dark-yellow border-4 border-neo-black dark:border-neo-dark-border font-display font-bold text-neo-black dark:text-neo-dark-blue-deep">
              {i + 1}
            </span>
            <h3 className="font-display font-bold text-lg mt-2 mb-2 dark:text-white">{step.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-neo-dark-blue-text">
              {step.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export const CaseStudyPalette: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <section className="mb-16 sm:mb-24">
    <Reveal>
      <SectionTag label="Visual Language" color="bg-neo-black dark:bg-neo-dark-border" />
      <div className="neo-box bg-white dark:bg-neo-dark-box p-6 sm:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {study.palette.map((swatch) => (
            <div key={swatch.hex} className="border-4 border-neo-black dark:border-neo-dark-border">
              <div className="h-16 sm:h-20" style={{ background: swatch.hex }} />
              <div className="px-2.5 py-2 border-t-4 border-neo-black dark:border-neo-dark-border bg-white dark:bg-neo-dark-box">
                <p className="font-display font-bold text-sm dark:text-white leading-tight">{swatch.name}</p>
                <p className="text-xs text-gray-500 dark:text-neo-dark-blue-text font-mono">{swatch.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

export const CaseStudyGallery: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <section className="mb-16 sm:mb-24">
    <Reveal>
      <SectionTag label="Design Exploration" color="bg-neo-blue dark:bg-neo-dark-blue-accent" />
      <SectionHeading>
        From the <span className="text-neo-red dark:text-neo-dark-red">design file</span>
      </SectionHeading>
      <p className="text-gray-600 dark:text-neo-dark-blue-text max-w-2xl mb-8 -mt-3">
        Real frames and assets from the project — click any exhibit to inspect it up close.
      </p>
    </Reveal>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {study.gallery.map((item, i) => (
        <Reveal
          key={item.src + i}
          delay={(i % 2) * 0.08}
          className={item.wide ? 'sm:col-span-2' : ''}
        >
          <DesignFrame src={item.src} caption={item.caption} wide={item.wide} tall={item.tall && !item.wide} />
        </Reveal>
      ))}
    </div>
  </section>
);

export const CaseStudyDecisions: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <section className="mb-16 sm:mb-24">
    <Reveal>
      <SectionTag label="Key Decisions" color="bg-neo-red dark:bg-neo-dark-red" />
      <SectionHeading>
        Why it looks and works <span className="text-neo-red dark:text-neo-dark-red">this way</span>
      </SectionHeading>
    </Reveal>
    <div className="space-y-6">
      {study.decisions.map((d, i) => (
        <Reveal key={d.title} delay={0.04}>
          <div className="neo-box bg-white dark:bg-neo-dark-box p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <span className="font-display font-bold text-4xl sm:text-5xl text-neo-yellow dark:text-neo-dark-yellow [-webkit-text-stroke:2px_#000]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl mt-2 dark:text-white">{d.title}</h3>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <p className="font-display font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-neo-dark-blue-text mb-1.5">
                  The decision
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-neo-dark-blue-text">{d.why}</p>
              </div>
              <div className="sm:border-l-4 sm:border-neo-yellow dark:sm:border-neo-dark-yellow sm:pl-5">
                <p className="font-display font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-neo-dark-blue-text mb-1.5">
                  What it buys
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-neo-dark-blue-text">{d.benefit}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export const CaseStudyOutcome: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <section className="mb-8 sm:mb-12">
    <Reveal>
      <SectionTag label="Outcome" />
      <div className="neo-box bg-neo-yellow dark:bg-neo-dark-yellow p-6 sm:p-10">
        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6 text-neo-black dark:text-neo-dark-blue-deep">
          What shipped in the file
        </h2>
        <ul className="space-y-4">
          {study.outcome.map((line) => (
            <li key={line} className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 shrink-0 bg-neo-red dark:bg-neo-dark-red border-2 border-neo-black" />
              <span className="text-base sm:text-lg font-medium text-neo-black dark:text-neo-dark-blue-deep leading-relaxed">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </section>
);

export const CaseStudyNav: React.FC<{
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}> = ({ prev, next }) => (
  <nav className="mt-14 flex flex-col sm:flex-row gap-4 sm:justify-between" aria-label="Project navigation">
    {prev ? (
      <Link
        to={`/projects/${prev.slug}`}
        className="neo-box p-4 bg-white dark:bg-neo-dark-box flex items-center gap-3 hover:-translate-y-1 transition-transform sm:max-w-[45%]"
      >
        <ArrowLeft size={18} className="shrink-0 text-neo-black dark:text-white" />
        <span className="min-w-0">
          <span className="block text-xs uppercase tracking-wide text-gray-500 dark:text-neo-dark-blue-text font-medium">
            Previous project
          </span>
          <span className="block font-display font-bold dark:text-white truncate">{prev.title}</span>
        </span>
      </Link>
    ) : (
      <span className="hidden sm:block" />
    )}

    {next ? (
      <Link
        to={`/projects/${next.slug}`}
        className="neo-box p-4 bg-white dark:bg-neo-dark-box flex items-center justify-end gap-3 hover:-translate-y-1 transition-transform sm:max-w-[45%] sm:ml-auto text-right"
      >
        <span className="min-w-0">
          <span className="block text-xs uppercase tracking-wide text-gray-500 dark:text-neo-dark-blue-text font-medium">
            Next project
          </span>
          <span className="block font-display font-bold dark:text-white truncate">{next.title}</span>
        </span>
        <ArrowRight size={18} className="shrink-0 text-neo-black dark:text-white" />
      </Link>
    ) : (
      <span className="hidden sm:block" />
    )}
  </nav>
);
