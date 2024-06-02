import ClubInfo from "./ClubInfo";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="flex-grow flex justify-center items-center md:px-32 md:py-10 overflow-auto">
      <div className="border-r-2 rounded-lg shadow-xl flex-grow flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 p-12 bg-gradient-to-r from-customBlue to-white text-white">
          <ContactForm />
        </div>
        <div className="md:w-1/2 p-12 bg-gradient-to-r from-emerald-200 to-white rounded-r-lg shadow-xl">
          <ClubInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
