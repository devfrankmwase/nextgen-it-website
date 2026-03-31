import heroBg from "../assets/hero-bg.jpg";
import repairImg from "../assets/repair.jpg";
import techImg from "../assets/technician.jpg";
import {
  GlobeAltIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  ComputerDesktopIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  ArchiveBoxIcon,
  ChartBarIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

export default function Home() {
  const services = [
    { icon: GlobeAltIcon, title: "Networking Setup", desc: "We design and implement secure home and office networks, optimize Wi-Fi, and troubleshoot connectivity issues to ensure seamless internet access." },
    { icon: CircleStackIcon, title: "Data Backup & Recovery", desc: "Protect critical files with our automated backup solutions and recover lost data efficiently to minimize downtime." },
    { icon: ShieldCheckIcon, title: "Virus & Malware Removal", desc: "Safeguard your devices by removing harmful software, securing against future attacks, and optimizing performance." },
    { icon: ComputerDesktopIcon, title: "OS Installation", desc: "Install and configure Windows or Linux operating systems, update drivers, and ensure your system runs smoothly." },
    { icon: Cog6ToothIcon, title: "Hardware Upgrades", desc: "Boost your computer’s performance with RAM, SSD, GPU, or CPU upgrades tailored to your needs." },
    { icon: CpuChipIcon, title: "Custom PC Building", desc: "We build custom PCs for gaming, office, or professional use, with optimized performance and reliability." },
    { icon: ArchiveBoxIcon, title: "Software Installation", desc: "Install and configure essential software tools, ensuring full compatibility and optimal performance." },
    { icon: ChartBarIcon, title: "IT Consulting", desc: "Professional advice to improve your IT infrastructure, streamline operations, and increase productivity." },
    { icon: BoltIcon, title: "Remote Support", desc: "Receive expert IT support from anywhere via secure remote access for quick problem resolution." }
  ];

  return (
    <div className="font-sans text-white bg-[#1c1c1c] min-h-screen">

      {/* HERO */}
      <section
        className="relative text-center min-h-[85vh] flex flex-col justify-center px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <img src="/logo.png" alt="NextGen IT Logo" className="mx-auto w-44 mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Repairing Today, <span className="text-[#F5C627]">Innovating Tomorrow</span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg md:text-xl">
            NextGen IT Solutions delivers reliable IT services for homes and businesses in Botswana. From repairs to remote support, we make technology simple and effective.
          </p>
          <a
            href="https://wa.me/26771489392"
            className="bg-[#F5C627] text-[#1c1c1c] px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition transform"
          >
            Get Help Now
          </a>
        </div>
      </section>

      {/* PROMO CTA */}
<section className="relative py-16 flex flex-col justify-center text-center w-full bg-gradient-to-r from-[#474646] via-[#595959] to-[#3d3d3d] rounded-xl mx-6 md:mx-0 mb-20 shadow-2xl">
  <div className="absolute -top-10 -left-16 w-48 h-48 bg-gradient-to-tr from-[#F5C627] to-[#FFD83D] rounded-full opacity-25 animate-pulse"></div>
  <div className="absolute -bottom-10 -right-16 w-64 h-64 bg-gradient-to-br from-[#F5C627] to-[#FFA500] rounded-full opacity-25 animate-pulse"></div>
  <div className="relative z-10 max-w-3xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
      🔥 First Repair? <span className="text-[#F5C627]">Get 10% Off</span>
    </h2>
    <p className="text-gray-200 text-lg md:text-xl mb-6">
      Book your first repair or IT service today and experience fast, reliable, and professional support.
    </p>
    <a
      href="https://wa.me/26772284537"
      className="inline-block bg-[#474646] text-[#F5C627] font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition transform hover:shadow-2xl"
    >
      Claim Discount
    </a>
  </div>
</section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#F5C627]">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 text-center 
                           backdrop-blur-xl bg-white/5 
                           border border-white/10
                           shadow-[0_0_30px_rgba(245,198,39,0.2)]
                           transition duration-500
                           hover:-translate-y-2 
                           hover:shadow-[0_0_40px_rgba(245,198,39,0.6)]"
              >
                <div className="flex justify-center mb-5">
                  <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20
                                  shadow-[0_0_10px_rgba(245,198,39,0.3)]
                                  group-hover:shadow-[0_0_20px_rgba(245,198,39,0.7)]
                                  transition-all duration-500">
                    <Icon className="w-10 h-10 text-[#F5C627]" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#F5C627]">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REPAIR SECTION */}
     <section className="py-20 min-h-[65vh] flex items-center max-w-full mx-auto grid md:grid-cols-2 gap-8 mt-12 bg-gradient-to-r from-[#3d3d3d] via-[#474646] to-[#595959]">
  <img src={repairImg} alt="Computer Repair" className="rounded-xl shadow-lg hover:scale-105 transition transform w-full" />
  <div className="px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5C627]">Professional Computer Repairs</h2>
    <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed">
      At NextGen IT Solutions, we provide comprehensive computer repair services for both hardware and software issues. 
      Whether it’s a slow system, virus infection, or broken hardware component, our skilled technicians diagnose and resolve the problem quickly and efficiently. 
      We specialize in desktop and laptop repairs, ensuring your devices are restored to optimal performance. Our priority is minimal downtime and maximum reliability, giving you peace of mind with every service.
    </p>
    <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed">
      All repairs are performed using high-quality components and industry-standard tools. 
      We offer transparent pricing, detailed diagnostics, and timely updates so you’re always informed about the status of your device.
    </p>
    <a href="https://wa.me/26772284537" className="bg-[#F5C627] text-[#474646] px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition transform">
      Book Repair
    </a>
  </div>
</section>

      {/* TECH TEAM SECTION */}
     <section className="py-20 min-h-[65vh] grid md:grid-cols-2 gap-10 items-center px-6 bg-gradient-to-r from-[#3d3d3d] via-[#474646] to-[#595959] mt-12">
  <div>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5C627]">Expert Technicians You Can Trust</h2>
    <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed">
      Our team of highly skilled and certified IT technicians is dedicated to delivering top-tier IT solutions. 
      Each technician undergoes rigorous training and has hands-on experience with a wide range of technologies, from networking and cybersecurity to hardware upgrades and custom PC building. 
      We are committed to keeping up with the latest industry standards and tools to ensure your devices and systems operate at peak efficiency.
    </p>
    <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed">
      Beyond technical expertise, our team prides itself on providing exceptional customer service. 
      We communicate clearly, explain solutions in simple terms, and guide you through every step of the process. 
      With NextGen IT Solutions, you’re not just hiring technicians—you’re partnering with IT professionals who care about your technology as much as you do.
    </p>
  </div>
  <img src={techImg} alt="Technician working" className="rounded-xl shadow-lg hover:scale-105 transition transform w-full" />
</section>

    </div>
  );
}