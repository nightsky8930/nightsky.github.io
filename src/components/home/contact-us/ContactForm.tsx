import { FormEvent, RefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessIcon from "../../icons/SuccessIcon";

const ContactForm = () => {
  let formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [isSent, setIsSent] = useState(false); // State to track if message is sent

  const sendEmail = (formRef: RefObject<HTMLFormElement>) => {
    if (formRef && formRef.current) {
      emailjs
        .sendForm(
          "service_9ohndzi",
          "template_jnensyk",
          formRef.current,
          "2vaz7zaFxITISj8LD"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsSent(true);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    sendEmail(formRef);
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setSubscribe(false);
  };

  return (
    <>
      {isSent ? (
        <div className="message-sent items-center">
          <SuccessIcon />
          <h2>Your message has been sent successfully!</h2>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl font-bold mb-4 text-black text-center md:text-left">
            Reach us!
          </h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="py-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="from_name"
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="py-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="reply_to"
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="py-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="py-4">
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows={4}
                placeholder="Message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="py-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
                />
                <span className="ml-2 text-gray-700">
                  Sign up for our email list for updates, promotions, and more.
                </span>
              </label>
            </div>
            <div className="flex-grow flex flex-row items-center">
              <button
                className="flex-grow flex bg-gray-500 hover:bg-blue-700 items-center justify-center rounded-full text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
