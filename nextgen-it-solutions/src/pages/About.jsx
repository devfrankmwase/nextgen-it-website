import headerBg from "../assets/header-bg.jpg"; // your header image

export default function About() {
  return (
    <div className="relative font-sans text-white bg-[#1c1c1c] min-h-screen py-20 px-6 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${headerBg})` }}
      ></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-24">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F5C627]">
            About NextGen IT Solutions
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Reliable IT solutions designed to keep your systems fast, secure, and running smoothly.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Who We Are",
              text: "NextGen IT Solutions is a modern IT service provider delivering fast, reliable, and efficient solutions. We support both individuals and businesses with remote and on-site services."
            },
            {
              title: "Our Mission",
              text: "To simplify technology by providing accessible, high-quality IT support that helps clients stay productive and stress-free."
            },
            {
              title: "Our Vision",
              text: "To become a trusted global IT partner known for innovation, performance, and customer satisfaction."
            },
            {
              title: "Why Choose Us",
              text: "We combine speed, expertise, and affordability to deliver dependable IT solutions tailored to your needs."
            }
          ].map((section, i) => (
            <div
              key={i}
              className="group relative p-[1px] rounded-2xl 
                         bg-gradient-to-br from-[#F5C627]/30 via-transparent to-[#FFA500]/30"
            >
              <div
                className="h-full bg-[#2a2a2a] rounded-2xl p-8 
                           border border-white/10
                           transition duration-500
                           hover:-translate-y-2
                           hover:shadow-[0_0_30px_rgba(245,198,39,0.4)]"
              >
                {/* ICON DOT */}
                <div className="w-3 h-3 bg-[#F5C627] rounded-full mb-4 shadow-[0_0_10px_rgba(245,198,39,0.8)]"></div>

                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#F5C627]">
                  {section.title}
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SERVICE AREA CARD */}
        <div className="group relative p-[1px] rounded-2xl 
                        bg-gradient-to-r from-[#F5C627]/40 via-transparent to-[#FFA500]/40">
          <div className="bg-[#2a2a2a] rounded-2xl p-10 border border-white/10
                          hover:shadow-[0_0_40px_rgba(245,198,39,0.5)]
                          transition duration-500">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#F5C627]">
              Service Area
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We provide global remote IT support and mobile services across Botswana, ensuring you always have access to professional assistance wherever you are.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}