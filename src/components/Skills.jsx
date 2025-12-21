
import { cpHighlights, skillCategories, skillLevels, softSkills } from '../data/content'
import SectionHeader from './SectionHeader'

const Skills = () => {
  return (
    <section id="skills" className="section-container scroll-mt-24 space-y-10">
      <SectionHeader
        eyebrow="Skills"
        title="Technical toolbox"
        description="A balanced mix of backend strength, frontend craft, competitive programming, and the habits that keep teams moving."
        align="center"
      />

      <div 
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        
        
        
        
      >
        {skillCategories.map((group, index) => (
          <div
            key={group.title}
            className="glass-card flex h-full flex-col p-5 sm:p-6 transition duration-300 tilt-card"
            
            
            
            
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)',
              borderColor: 'rgba(34, 211, 238, 0.3)'
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-50">{group.title}</h3>
              <span 
                className="text-xs uppercase tracking-[0.2em] text-slate-500"
                
              >
                Core
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{group.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-200 shadow-sm shadow-cyan-500/5 transition neon-hover cursor-default"
                  
                  
                  
                  
                  
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div 
        className="grid gap-4 md:grid-cols-2"
        
        
        
        
      >
        <div 
          className="glass-card flex h-full flex-col p-5 sm:p-6 transition duration-300 tilt-card"
          
          
          
          
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-50">{cpHighlights.title}</h3>
            <span 
              className="text-xs uppercase tracking-[0.2em] text-cyan-400"
            >
              CP
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-400">{cpHighlights.description}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {cpHighlights.bullets.map((bullet, index) => (
              <li 
                key={bullet} 
                className="flex gap-3"
                
                
                
                
              >
                <span 
                  className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div 
          className="glass-card flex h-full flex-col p-5 sm:p-6 transition duration-300 tilt-card"
          
          
          
          
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-50">{softSkills.title}</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Team</span>
          </div>
          <p className="mt-2 text-sm text-slate-400">{softSkills.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {softSkills.items.map((skill, index) => (
              <span
                key={skill}
                className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-200 shadow-sm shadow-cyan-500/5 transition neon-hover cursor-default"
                
                
                
                
                
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="glass-card p-5 sm:p-6 transition duration-300 tilt-card"
        
        
        
        
        whileHover={{ 
          scale: 1.01,
          boxShadow: '0 25px 50px rgba(34, 211, 238, 0.1)'
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-50">Skill levels</h3>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Snapshot</span>
        </div>
        <p className="mt-2 text-sm text-slate-400">A quick, honest view of my strongest areas right now.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillLevels.map((skill, index) => (
            <div 
              key={skill.name} 
              className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 shadow-sm shadow-cyan-500/5 neon-hover"
              
              
              
              
              
            >
              <div className="text-sm font-semibold text-slate-50">{skill.name}</div>
              <div 
                className="text-xs uppercase tracking-[0.2em] text-cyan-200"
                
                
                
                
              >
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
