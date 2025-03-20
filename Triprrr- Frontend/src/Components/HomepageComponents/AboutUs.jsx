import React from "react";
import { Clock, Map, Shield, Award, ArrowRight } from "lucide-react";
import About_Us from "../../assets/About_Us.png";

function AboutUs() {
  return (
    <div className="min-h-1/3 my-10 bg-white px-8 pt-8 pb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-5xl font-Poppins font-medium">About us</h2>
          <p className="text-black font-medium font-Poppins my-10">
            Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor
            erat felis and sed vehicula tortor malesuada gravida. Mauris
            volutpat enim quis pult gont congue. Suspendisse ullamcorper.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Feature 1 */}
            <div className="bg-[#C0EBA6] rounded-xl p-4 flex items-start space-x-3">
              <div className="bg-white p-2 rounded-full">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-sm font-Poppins">Safety First</p>
                <p className="font-medium text-sm font-Poppins">Always</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#FFFBE6]  rounded-xl p-4 flex items-start space-x-3">
              <div className="bg-white p-2 rounded-full">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium font-Poppins text-sm">
                  Trusted Travel
                </p>
                <p className="text-sm font-Poppins font-medium">Guides</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#FFFBE6] rounded-xl p-4 flex items-start space-x-3">
              <div className="bg-white p-2 rounded-full">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium font-Poppins text-sm">
                  Expertise and
                </p>
                <p className="text-sm font-Poppins font-medium">experience</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#c0eba6] rounded-xl p-4 flex items-start space-x-3">
              <div className="bg-white p-2 rounded-full">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium font-Poppins text-sm">
                  Time and stress
                </p>
                <p className="text-sm font-Poppins font-medium">savings</p>
              </div>
            </div>
          </div>

          <button className="bg-[#2E7D32] flex items-center justify-center text-white text-lg px-10 py-3 font-medium mt-20 rounded-full hover:bg-[#1B5E20] transition-colors">
            Know more <ArrowRight className="w-5 h-5 ml-5 " />
          </button>
        </div>

        <div className="relative">
          <div className="relative">
            <img
              src={About_Us}
              alt="Travelers looking at map"
              className="w-full h-[500px] object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
