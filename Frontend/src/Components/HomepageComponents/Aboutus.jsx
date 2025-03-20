import React from "react";
import { Clock, Map, Shield, Award } from "lucide-react";
import About_Us from "../../assets/About_Us.png";

function AboutUs() {
  return (
    <div className="min-h-screen mt-10 bg-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">About us</h2>
          <p className="text-gray-600">
            Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor
            erat felis and sed vehicula tortor malesuada gravida. Mauris
            volutpat enim quis pult gont congue. Suspendisse ullamcorper.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Feature 1 */}
            <div className="bg-[#E8F5E9] rounded-xl p-4 flex items-start space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-sm">Safety First</p>
                <p className="text-sm">Always</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-2 rounded-xl p-4 flex items-start space-x-3">
              <div className="bg-gray-50 p-2 rounded-lg">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-sm">Trusted Travel</p>
                <p className="text-sm">Guides</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#FFF8E1] rounded-xl p-4 flex items-start space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-sm">Expertise and</p>
                <p className="text-sm">experience</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#E8F5E9] rounded-xl p-4 flex items-start space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-sm">Time and stress</p>
                <p className="text-sm">savings</p>
              </div>
            </div>
          </div>

          <button className="bg-[#2E7D32] text-white px-6 py-2 rounded-full hover:bg-[#1B5E20] transition-colors">
            Know more
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
