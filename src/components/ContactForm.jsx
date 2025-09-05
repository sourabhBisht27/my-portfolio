import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const service_id = import.meta.env.VITE_APP_SERVICE_ID;
  const template_id = import.meta.env.VITE_APP_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_APP_PUBLIC_KEY;

  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        `${service_id}`,
        `${template_id}`,
        formRef.current,
        `${public_key}`
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setIsSending(false);
          formRef.current.reset();
        },
        (error) => {
          setMessage("❌ Something went wrong. Please try again.");
          setIsSending(false);
          //   setMessage("Send Message");
        }
      );
  };

  return (
    <div className="bg-[#111827] p-6 rounded-2xl shadow-lg max-w-lg mx-auto mt-12">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="space-y-4"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          disabled={isSending}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition text-white font-semibold"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
      {message && <p className="text-center mt-4">{message}</p>}
    </div>
  );
};

export default ContactForm;
