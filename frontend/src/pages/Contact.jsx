import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import headerBg from "../assets/contact-header-bg.jpg"; // your header image
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});

 const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};


const handleSubmit = async (e) => {
  e.preventDefault();
  
   // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }
    
    setLoading(true);

  try {
    await axios.post("/api/messages", formData);
    toast.success("Message sent successfully ✅");

    setFormData({
      name: "",
      email: "",
      message: ""
    }); 
  } 
  
  catch (error) {
    console.error(error);
    toast.error("Failed to send message ❌");
  } finally{
    setLoading(false);
  }
};

  return (
    
    <div className="relative font-sans text-white bg-[#1c1c1c] min-h-screen overflow-hidden">

      {/* HEADER IMAGE */}
      <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${headerBg})` }}
        ></div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5C627]">
            Contact Us
          </h1>
          <p className="text-gray-300 mt-4 text-lg md:text-xl max-w-2xl">
            Need help? Reach out and we’ll get back to you quickly.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT BELOW HEADER */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-16 px-6 mt-16 mb-32">
        {/* space-y-16 for more space between cards, mb-32 for footer gap */}

        {/* FORM CARD */}
        <div className="group relative p-[1px] rounded-2xl 
                        bg-gradient-to-br from-[#F5C627]/40 via-transparent to-[#FFA500]/40">
          <div className="bg-[#2a2a2a] rounded-2xl p-10 border border-white/10
                          hover:shadow-[0_0_40px_rgba(245,198,39,0.5)]
                          transition duration-500">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
               name="name" value={formData.name} onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-lg bg-white/10 border border-white/20 
                           focus:outline-none focus:border-[#F5C627]"
              />
              <input
              name="email" value={formData.email} onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-lg bg-white/10 border border-white/20 
                           focus:outline-none focus:border-[#F5C627]"
              />
              <textarea
              name="message" value={formData.message} onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                className="p-4 rounded-lg bg-white/10 border border-white/20 
                           focus:outline-none focus:border-[#F5C627]"
              />
              <button
                type="submit"
                  disabled={loading}
                     className="bg-[#F5C627] text-[#1c1c1c] font-bold py-3 rounded-lg
             hover:scale-105 transition transform disabled:opacity-50 flex justify-center items-center gap-2"
              >
                 {loading && <span className="loader border-t-2 border-b-2 border-white rounded-full w-5 h-5 animate-spin"></span>}
                {loading ? "Sending..." : "Send Message"}
              </button>


            </form>
        {status === "success" && (
                <p className="text-green-400 mt-4 text-center">
                  ✅ Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 mt-4 text-center">
                  ❌ Failed to send message. Try again.
                </p>
              )}

            
          </div>
        </div>

        {/* CONTACT INFO CARD BELOW FORM */}
        <div className="max-w-md mx-auto bg-[#2a2a2a] rounded-2xl p-8 border border-white/10
                        shadow-[0_0_40px_rgba(245,198,39,0.3)] hover:shadow-[0_0_60px_rgba(245,198,39,0.5)]
                        transition-all duration-500 flex flex-col gap-4 text-gray-300">
          <h2 className="text-2xl font-semibold text-[#F5C627] mb-4 text-center">
            Our Contact Info
          </h2>
          <div className="flex items-center gap-4">
            <FaPhone className="text-[#F5C627] text-xl" />
            <span>+26772284537</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#F5C627] text-xl" />
            <span>nextgenitsolutions@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#F5C627] text-xl" />
            <span>Gaborone, Botswana</span>
          </div>
        </div>
      </div>
                {/* TOAST CONTAINER */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable />


    </div>
  );
}
