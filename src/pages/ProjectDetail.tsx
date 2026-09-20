import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectDetailsBackground from '../components/ProjectDetailsBackground';
import {
  CaseStudyHero,
  CaseStudyMeta,
  CaseStudyChallenge,
  CaseStudyApproach,
  CaseStudyPalette,
  CaseStudyGallery,
  CaseStudyDecisions,
  CaseStudyOutcome,
  CaseStudyNav,
} from '../components/projects/CaseStudyParts';
import { getCaseStudy, getAdjacentCaseStudies } from '../data/caseStudies';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Support slug ids and legacy numeric indexes (/project/3 etc.)
  const slug =
    id && /^\d+$/.test(id)
      ? projects[Math.max(0, Math.min(projects.length - 1, parseInt(id, 10) - 1))]?.id
      : id;

  const study = slug ? getCaseStudy(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (study) document.title = `${study.title} — Case Study | itz~dhriti~here`;
    return () => {
      document.title = 'itz~dhriti~here';
    };
  }, [slug, study]);

  if (!study) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neo-dark-blue-bg dark:to-neo-dark-blue-deep">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="neo-box p-6 text-center max-w-md bg-white dark:bg-neo-dark-box">
            <h2 className="font-display font-bold text-xl mb-4 dark:text-white">Project not found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The project you're looking for doesn't exist or may have been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neo-blue dark:bg-neo-dark-blue-accent text-white border-2 border-neo-black dark:border-neo-dark-border font-display font-bold shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform"
              >
                <ArrowLeft size={16} /> Back to Projects
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neo-red dark:bg-neo-dark-red text-white border-2 border-neo-black dark:border-neo-dark-border font-display font-bold shadow-neo dark:shadow-neo-dark hover:translate-y-[-2px] transition-transform"
              >
                <Home size={16} /> Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { prev, next } = getAdjacentCaseStudies(study.slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neo-dark-blue-bg dark:to-neo-dark-blue-deep">
      <ProjectDetailsBackground />
      <Navbar />

      <main className="container-xl py-14 sm:py-16 relative z-10">
        <CaseStudyHero study={study} />
        <CaseStudyMeta study={study} />
        <CaseStudyChallenge study={study} />
        <CaseStudyApproach study={study} />
        <CaseStudyGallery study={study} />
        <CaseStudyPalette study={study} />
        <CaseStudyDecisions study={study} />
        <CaseStudyOutcome study={study} />
        <CaseStudyNav
          prev={prev ? { slug: prev.slug, title: prev.title } : null}
          next={next ? { slug: next.slug, title: next.title } : null}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
