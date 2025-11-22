const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800/70 bg-card/80 backdrop-blur">
      <div className="section-container flex flex-col items-center justify-center gap-1 py-2 text-xs text-slate-200">
        <span className="text-slate-100">© {new Date().getFullYear()} Ankit Raj</span>
        <span className="text-slate-200">Built for the web and tuned for any screen size.</span>
      </div>
    </footer>
  )
}

export default Footer
