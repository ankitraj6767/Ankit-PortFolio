const Footer = () => {
  return (
    <footer 
      className="border-t border-slate-800/70 bg-card/80"
    >
      <div className="section-container flex flex-col items-center justify-center gap-2 py-4 text-xs text-slate-200">
        <div
          className="flex items-center gap-2"
        >
          <span className="text-slate-100">© {new Date().getFullYear()} Ankit Raj .        All Right Reserved</span>
        </div>
        <span 
          className="text-slate-400"
        >
        </span>
      </div>
    </footer>
  )
}

export default Footer
