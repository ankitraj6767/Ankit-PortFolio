import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/content'
import SectionHeader from './SectionHeader'

const Projects = () => {
  return (
    <section id="projects" className="section-container scroll-mt-24 space-y-6">
      <SectionHeader
        eyebrow="Projects"
        title="Selected Work"
        description="A few projects that highlight how I think about UI polish, backend reliability, and developer experience."
        align="center"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="card-surface h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-glow"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{project.description}</p>
              </div>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-800 bg-slate-900/60 p-2 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-100"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FiGithub />
                </a>
              ) : (
                <div className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
                  Repo on request
                </div>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100 ring-1 ring-cyan-500/30"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-cyan-200">
              <FiArrowUpRight />
              <span>Demos and code walkthroughs are available on request.</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
