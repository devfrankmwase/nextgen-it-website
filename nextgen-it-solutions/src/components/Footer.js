import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#1c1c1c] via-[#2e2e2e] to-[#3a3a3a] text-white py-12 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-[#F5C627] mb-3">
            NextGen IT Solutions
          </h2>
          <p className="text-gray-300">
            Professional IT services for homes & businesses. Reliable, fast, and tailored solutions.
          </p>
        </div>

        {/* LINKS */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#F5C627] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-[#F5C627]">Home</a></li>
            <li><a href="/services" className="hover:text-[#F5C627]">Services</a></li>
            <li><a href="/about" className="hover:text-[#F5C627]">About</a></li>
            <li><a href="/contact" className="hover:text-[#F5C627]">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-[#F5C627] mb-3">
            Connect With Us
          </h3>

          <p className="text-gray-300 mb-2">📞 +26772284537</p>
          <p className="text-gray-300 mb-4">📍 Gaborone, Botswana</p>

          {/* NEXT LEVEL SOCIAL ICONS */}
          <div className="flex justify-center md:justify-end gap-6">

            {/* FACEBOOK */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 bg-[#F5C627]/40 transition duration-500"></div>
              <div className="relative p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                              transition duration-500
                              group-hover:scale-110 group-hover:-translate-y-1
                              group-hover:bg-[#F5C627] group-hover:text-[#1c1c1c]
                              shadow-[0_0_10px_rgba(245,198,39,0.3)]
                              group-hover:shadow-[0_0_25px_rgba(245,198,39,0.8)]">
                <FaFacebookF size={18} />
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 bg-[#F5C627]/40 transition duration-500"></div>
              <div className="relative p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                              transition duration-500
                              group-hover:scale-110 group-hover:-translate-y-1
                              group-hover:bg-[#F5C627] group-hover:text-[#1c1c1c]
                              shadow-[0_0_10px_rgba(245,198,39,0.3)]
                              group-hover:shadow-[0_0_25px_rgba(245,198,39,0.8)]">
                <FaLinkedinIn size={18} />
              </div>
            </a>

            {/* TIKTOK */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 bg-[#F5C627]/40 transition duration-500"></div>
              <div className="relative p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                              transition duration-500
                              group-hover:scale-110 group-hover:-translate-y-1
                              group-hover:bg-[#F5C627] group-hover:text-[#1c1c1c]
                              shadow-[0_0_10px_rgba(245,198,39,0.3)]
                              group-hover:shadow-[0_0_25px_rgba(245,198,39,0.8)]">
                <FaTiktok size={18} />
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} NextGen IT Solutions. All rights reserved.
      </div>

    </footer>
  );
}