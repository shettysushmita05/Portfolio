// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_0gi1r3s", // Replace with your EmailJS service ID
//         "template_yszt1gu", // Replace with your EmailJS template ID
//         form.current,
//         "JAF4-rpKXsNXHBHNV" // Replace with your EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           console.log(error.text);
//           alert("Failed to send message.");
//         }
//       );
//   };

//   return (
//     <section className="py-16 lg:section" id="contact">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* text */}
//           <motion.div
//             variants={fadeIn("right", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 flex justify-start items-center"
//           >
//             <div>
//               <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
//                 Get in touch
//               </h4>
//               <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
//                 Let's work <br /> together!
//               </h2>
//             </div>
//           </motion.div>
//           {/* form */}
//           <motion.form
//             ref={form}
//             onSubmit={sendEmail}
//             variants={fadeIn("left", 0.5)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 border rounded-2xl p-6 pb-16 lg:pb-20 gap-y-6 flex flex-col items-start"
//           >
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
//               type="text"
//               name="name"
//               placeholder="Your name"
//             />
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
//               type="email"
//               name="user_email"
//               placeholder="Your email"
//             />
//             <textarea
//               className="lg:mb-10 mb-8 bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none"
//               name="message"
//               cols={30}
//               rows={6}
//               placeholder="Your Message"
//             ></textarea>
//             <button type="submit" className="btn btn-lg">
//               Send Message
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;













      import React, { useState } from "react";
      // motion
      import { motion } from "framer-motion";
      // emailjs
      import emailjs from "emailjs-com";
      // variants
      import { fadeIn } from "../variants";
      
      const Contact = () => {
        // State for form fields
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");

        // State for success popup
        const [successPopup, setSuccessPopup] = useState(false);
      
        // Function to send email
        const sendEmail = (e) => {
          e.preventDefault(); // Prevent default form submission behavior
      
          // EmailJS service for sending the email
          
emailjs
.sendForm(
  "service_0gi1r3s", // Replace with your EmailJS service ID
  "template_yszt1gu", // Replace with your EmailJS template ID
 e.target,
  "JAF4-rpKXsNXHBHNV" // Replace with your EmailJS public key
)
            .then(
              (result) => {
                console.log(result.text); // Success
                // Clear the form fields after success
                setName("");
                setEmail("");
                setMessage("");
              // Show success popup
          setSuccessPopup(true);

          // Hide popup after 3 seconds
          setTimeout(() => {
            setSuccessPopup(false);
          }, 3000);
        },
              (error) => {
                console.log(error.text); // Error handling
              }
            );
        };
      
        return (
          <section className="py-16 lg:section" id="contact">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row">
                {/* text */}
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 flex justify-start items-center"
                >
                  <div>
                    <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                      Get in touch
                    </h4>
                    <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                      Let's work <br /> together!
                    </h2>
                  </div>
                </motion.div>
                {/* form */}
                <motion.form
                  onSubmit={sendEmail}
                  variants={fadeIn("left", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 border rounded-2xl p-6 pb-16 lg:pb-20 gap-y-6 flex flex-col items-start"
                >
                  <input
                    className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Update state on input change
                    required
                  />
                  <input
                    className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                    type="email"
                    placeholder="Your email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update state on input change
                    required
                  />
                  <textarea
                    className="lg:mb-10 mb-8 bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none"
                    placeholder="Your Message"
                    name="message"
                    cols={30}
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} // Update state on input change
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-lg">
                    Send Message
                  </button>
                </motion.form>
              </div>
            </div>
            {/* Success popup */}
            {successPopup && (
              <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-md">
                Message sent successfully!
              </div>
            )}
          </section>
        );
      };
      
      export default Contact;