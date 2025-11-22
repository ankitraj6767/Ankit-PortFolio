import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsapp = () => {
  const whatsappLink = 'https://wa.me/916200667346?text=Hi%20Ankit%2C%20I%20need%20your%20help'

  return (
    <a
      href={whatsappLink}
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-4 z-40 inline-flex items-center justify-center rounded-full bg-green-500 p-3 text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/40 md:bottom-8 md:right-8"
    >
      <FaWhatsapp size={22} />
    </a>
  )
}

export default FloatingWhatsapp
