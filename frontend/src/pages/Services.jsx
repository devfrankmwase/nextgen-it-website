import { GlobeAltIcon, CircleStackIcon, ShieldCheckIcon, ComputerDesktopIcon, Cog6ToothIcon, CpuChipIcon, ArchiveBoxIcon, ChartBarIcon, BoltIcon } from "@heroicons/react/24/outline";
import bgImage from "../assets/services-bg.jpg"; // full-body background image

export default function Services() {
  const services = [
    { icon: GlobeAltIcon, title: "Networking Setup", description: "Fast and reliable networking setup for home and business." },
    { icon: CircleStackIcon, title: "Data Backup & Recovery", description: "Secure backup solutions and data recovery services." },
    { icon: ShieldCheckIcon, title: "Virus & Malware Removal", description: "Protect your systems from viruses, malware, and ransomware." },
    { icon: ComputerDesktopIcon, title: "OS Installation", description: "Professional operating system installation and configuration." },
    { icon: Cog6ToothIcon, title: "Hardware Upgrades", description: "Upgrade your PC hardware for better performance." },
    { icon: CpuChipIcon, title: "Custom PC Building", description: "Custom-built PCs tailored to your needs." },
    { icon: ArchiveBoxIcon, title: "Software Installation", description: "Installation and configuration of all software solutions." },
    { icon: ChartBarIcon, title: "IT Consulting", description: "Expert IT advice to optimize your systems and workflow." },
    { icon: BoltIcon, title: "Remote Support", description: "Fast remote support wherever you are." }
  ];

  return (
    <div 
      className="relative font-sans text-white min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* HEADER */}
      <div className="text-center py-16 px-6 bg-black/60">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F5C627] mb-4">
          Our Services
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          High-quality IT solutions designed to keep your systems fast, secure, and running smoothly.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 bg-[#2a2a2a]/70 rounded-2xl mt-10">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-[1px] rounded-2xl 
                           bg-gradient-to-br from-[#F5C627]/30 via-transparent to-[#FFA500]/30"
              >
                <div className="bg-[#2a2a2a]/85 rounded-2xl p-8 border border-white/10
                                hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,198,39,0.4)]
                                transition duration-500 flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white/10 rounded-full shadow-[0_0_10px_rgba(245,198,39,0.5)] group-hover:shadow-[0_0_20px_rgba(245,198,39,0.7)]">
                    <Icon className="w-6 h-6 text-[#F5C627]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#F5C627]">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}