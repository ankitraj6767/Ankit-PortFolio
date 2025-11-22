import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsapp = () => {
  const whatsappLink = 'https://wa.me/916200667346?text=Hi%20Ankit%2C%20I%20need%20your%20help'

  return (
    <a
      href={whatsappLink}
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/40 md:bottom-4 md:right-4"
    >
      <FaWhatsapp size={22} />
    </a>
  )
}

export default FloatingWhatsapp
