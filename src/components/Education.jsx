import { education } from '../data/content'
import SectionHeader from './SectionHeader'

const Education = () => {
  return (
    <section id="education" className="section-container scroll-mt-24 space-y-10 pb-16">
      <SectionHeader
        eyebrow="Education"
        title="Academic Background"
        description="Formal education that grounds my engineering craft."
        align="center"
      />

      <div className="mx-auto grid max-w-5xl gap-6">
        {education.map((item) => (
          <div key={item.school} className="card-surface p-6 sm:p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-glow">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{item.credential}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-50">{item.school}</h3>
                <p className="text-sm text-slate-400">{item.location}</p>
              </div>
              <div className="text-right">
                <span className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200">
                  {item.duration}
                </span>
                <div className="mt-2 text-sm font-semibold text-cyan-200">{item.detail}</div>
              </div>
            </div>

            {item.summary && <p className="mt-4 text-sm text-slate-300 leading-relaxed">{item.summary}</p>}

            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
