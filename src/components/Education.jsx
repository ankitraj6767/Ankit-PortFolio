
import { education } from '../data/content'
import SectionHeader from './SectionHeader'

const Education = () => {
  return (
    <section id="education" className="section-container scroll-mt-24 space-y-10 pb-16 perspective-container">
      <SectionHeader
        eyebrow="Education"
        title="Academic Background"
        description="Formal education that grounds my engineering craft."
        align="center"
      />

      <div 
        className="mx-auto grid max-w-5xl gap-6"
        
        
        
        
      >
        {education.map((item, index) => (
          <div 
            key={item.school} 
            className="glass-card p-6 sm:p-7 transition duration-300 tilt-card"
            
            
            
            
            whileHover={{ 
              scale: 1.02,
              y: -8,
              boxShadow: '0 30px 60px rgba(34, 211, 238, 0.15)',
              borderColor: 'rgba(34, 211, 238, 0.3)'
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div
                
                
                
                
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{item.credential}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-50">{item.school}</h3>
                <p className="text-sm text-slate-400">{item.location}</p>
              </div>
              <div 
                className="text-right"
                
                
                
                
              >
                <span 
                  className="inline-block rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 neon-hover"
                  
                >
                  {item.duration}
                </span>
                <div 
                  className="mt-2 text-sm font-semibold text-cyan-200"
                  
                  
                  
                  
                >
                  {item.detail}
                </div>
              </div>
            </div>

            {item.summary && (
              <p 
                className="mt-4 text-sm text-slate-300 leading-relaxed"
                
                
                
                
              >
                {item.summary}
              </p>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {item.highlights.map((point, pointIndex) => (
                  <li 
                    key={point}
                    className="flex gap-2"
                    
                    
                    
                    
                  >
                    <span 
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 flex-shrink-0"
                      
                      
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Courses Section */}
            {item.courses && item.courses.length > 0 && (
              <div 
                className="mt-5"
                
                
                
                
              >
                <h4 className="text-xs uppercase tracking-wider text-cyan-300 font-semibold mb-2">Key Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course, courseIndex) => (
                    <span
                      key={course}
                      className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300"
                      
                      
                      
                      
                      
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Activities Section */}
            {item.activities && item.activities.length > 0 && (
              <div 
                className="mt-4"
                
                
                
                
              >
                <h4 className="text-xs uppercase tracking-wider text-cyan-300 font-semibold mb-2">Activities & Achievements</h4>
                <div className="flex flex-wrap gap-2">
                  {item.activities.map((activity, actIndex) => (
                    <span
                      key={activity}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200"
                      
                      
                      
                      
                      
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
