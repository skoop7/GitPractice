import React from "react";
import { Mail, Phone } from "lucide-react";

function ContactMap() {
  return (
    <div className="min-h-full p-4 sm:p-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-8 sm:space-y-14 flex flex-col justify-start mt-4 text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold font-Poppins text-[#347928]">
            Contact Us
          </h1>

          <div className="text-base sm:text-lg text-black font-Lora">
            Shop no. 19,Okay plus Big benn building Swej farm,new sanganer road
            <br />
            Opp. Palika bazar , Jaipur , Rajasthan
            <br className="hidden sm:block" />
          </div>

          <div className="space-y-6 sm:space-y-14">
            <div className="flex flex-col md:flex-row items-center text-black gap-2 justify-center md:justify-start">
              <span className="font-semibold flex text-lg items-center font-Lora text-black gap-2">
                <Mail className="w-5 h-5 text-lg" />
                Email Us:
              </span>
              <a
                href="mailto:tripprrr2025@gmail.com"
                className="text-black text-lg font-Lora hover:text-green-600"
              >
                tripprrr2025@gmail.com
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 justify-center md:justify-start">
              <span className="font-semibold flex items-center font-Lora text-lg gap-2">
                <Phone className="w-5 h-5 text-lg" />
                Phone No.:
              </span>
              <a
                href="tel:9195300 14942"
                className="text-black text-lg font-Lora hover:text-green-600"
              >
                +91 9351 937 933
              </a>
            </div>
          </div>
        </div>

        <div className="h-[300px] sm:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.388255313045!2d75.77000237489425!3d26.891170561017052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db442cfef7709%3A0xf8d62d76c92dbefa!2sOkay%20Plus%20Big%20Benn!5e0!3m2!1sen!2sin!4v1742296258520!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactMap;
