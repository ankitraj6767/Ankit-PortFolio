import { experiences } from '../data/content'
import SectionHeader from './SectionHeader'

const Experience = () => {
  return (
    <section id="experience" className="section-container scroll-mt-24 space-y-6">
      <SectionHeader
        eyebrow="Experience"
        title="Career Journey"
        description="Highlights from roles where I shipped products, scaled systems, and collaborated with teams."
        align="center"
      />

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company + exp.role} className="card-surface p-5 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-glow">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-50">{exp.role}</h3>
                <p className="text-sm text-slate-400">{exp.company}</p>
              </div>
              <span className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200">
                {exp.duration}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {exp.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
