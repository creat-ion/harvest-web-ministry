import { Cross, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fhm-black text-fhm-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Mission */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Cross className="h-8 w-8 text-fhm-yellow" />
              <div>
                <h3 className="text-xl font-bold">Final Harvest Ministry</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Gathering souls for the Kingdom of God. Join us in spreading His love, hope, and salvation.
            </p>
            <div className="flex items-center text-fhm-yellow">
              <Heart className="h-4 w-4 mr-2" />
              <span className="text-sm">Serving with Love Since 2009</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-fhm-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-fhm-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-fhm-yellow transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-fhm-yellow transition-colors">Services</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-fhm-yellow transition-colors">Events</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-fhm-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-fhm-yellow">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-fhm-yellow" />
                <span className="text-gray-300 text-sm">123 Faith Street, Hope City, HC 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-fhm-yellow" />
                <span className="text-gray-300 text-sm">(555) 123-PRAY</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-fhm-yellow" />
                <span className="text-gray-300 text-sm">info@finalharvestministry.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Final Harvest Ministry. All rights reserved. | Built with ❤️ for God's Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;