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

      <div className="relative space-y-8 border-l border-slate-800/70 pl-6">
        {experiences.map((exp, idx) => (
          <div key={exp.company + exp.role} className="relative">
            <div className="absolute -left-[13px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow shadow-cyan-500/40" />
            <div className="card-surface p-5 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-glow">
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
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {idx !== experiences.length - 1 && (
              <div className="absolute left-[-1px] top-full h-6 w-[2px] bg-gradient-to-b from-cyan-400/30 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
