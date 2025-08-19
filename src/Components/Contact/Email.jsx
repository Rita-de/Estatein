import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ne8i65b", "service_ne8i65b", form.current, {
        publicKey: "gynegzWwSXb5yNi9a",
      })
      .then(
        () => {
          toast.success("✅ Your message has been sent!");
        },
        (error) => {
          toast.error("❌ Failed to send message. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-[#1b1b1b] rounded-lg p-6 shadow-sm">
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
      <p className="text-gray-600 mb-6">
        Looking for your perfect rental? Let's find the place you'll love to
        call home — contact us today!
      </p>

      <form className="space-y-4" ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="Your name"
            className="border rounded-md px-3 py-2 w-full"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Your last name"
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Your E-mail address"
          className="border rounded-md px-3 py-2 w-full"
        />
        <textarea
          name="message"
          placeholder="Your message..."
          rows={4}
          className="border rounded-md px-3 py-2 w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-[#703BF7] text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Email;
