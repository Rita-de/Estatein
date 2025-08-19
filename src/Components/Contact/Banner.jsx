import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Email from "./Email";


const Banner = () => {
  return (
    <div>
      <div className="bg-black">
       
        <h3 className="font-bold text-3xl sm:text-4xl p-6 sm:p-8 text-white text-center">
          Contact Us
        </h3>
      </div>
      <div className="min-h-screen bg-[#1b1b1b] flex flex-col items-center px-4 py-12">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              You Will Grow, You Will Succeed. We Promise That
            </h1>
            <p className="text-gray-600 mb-8">
             "Together, we'll turn your property dreams into reality — step by step, home by home."
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="text-[#703BF7] w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Call for inquiry</h3>
                  <p className="text-gray-600">+234-903-387-9041</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-[#703BF7]  w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Send us email</h3>
                  <p className="text-gray-600">praisekamsi1616@gmail</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-[#703BF7]  w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Opening hours</h3>
                  <p className="text-gray-600">24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-[#703BF7]  w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-gray-600">
                    19 North Road Piscataway, NY 08854
                  </p>
                </div>
              </div>
            </div>
          </div>

         <Email/>
        </div>

        <div className="max-w-6xl w-full mt-12">
          <iframe
            title="map"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59754103.43789443!2d29.089653557229415!3d23.92147593601786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sng!4v1754651783015!5m2!1sen!2sng"
            className="w-full h-64 md:h-96 rounded-lg border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
           <iframe
            title="map"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60648832726!2d-0.4312474072555601!3d51.528607007953084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1754651955072!5m2!1sen!2sng"
            className="w-full h-64 md:h-96 rounded-lg border-none mt-10"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Banner;