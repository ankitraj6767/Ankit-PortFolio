

const Footer = () => {
  return (
    <footer 
      className="border-t border-slate-800/70 bg-card/80"
      
      
      
      
    >
      <div className="section-container flex flex-col items-center justify-center gap-2 py-4 text-xs text-slate-200">
        <div
          className="flex items-center gap-2"
          
          
          
          
        >
          <span 
            className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
            
            
          />
          <span className="text-slate-100">© {new Date().getFullYear()} Ankit Raj</span>
        </div>
        <span 
          className="text-slate-400"
          
          
          
          
        >
          Built with ❤️ for the web. Crafted for every screen.
        </span>
      </div>
    </footer>
  )
}

export default Footer
