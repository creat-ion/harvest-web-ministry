import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-fhm-gray-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fhm-black mb-6">
            Get in <span className="text-fhm-yellow">Touch</span>
          </h2>
          <p className="text-xl text-fhm-gray max-w-3xl mx-auto leading-relaxed">
            We would love to hear from you! Whether you have questions about our services, 
            need prayer, or want to get involved, we're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-fhm-black mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-fhm-yellow w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-fhm-black" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-fhm-black mb-1">Address</h4>
                  <p className="text-fhm-gray">123 Faith Street<br />Hope City, HC 12345<br />United States</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-fhm-yellow w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-fhm-black" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-fhm-black mb-1">Phone</h4>
                  <p className="text-fhm-gray">(555) 123-PRAY<br />(555) 123-7729</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-fhm-yellow w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-fhm-black" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-fhm-black mb-1">Email</h4>
                  <p className="text-fhm-gray">info@finalharvestministry.org<br />pastor@finalharvestministry.org</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-fhm-yellow w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-fhm-black" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-fhm-black mb-1">Office Hours</h4>
                  <p className="text-fhm-gray">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: After Services
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-fhm-black mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button size="sm" className="bg-fhm-yellow text-fhm-black hover:bg-fhm-yellow-dark">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button size="sm" className="bg-fhm-yellow text-fhm-black hover:bg-fhm-yellow-dark">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
                <Button size="sm" className="bg-fhm-yellow text-fhm-black hover:bg-fhm-yellow-dark">
                  <Youtube className="h-4 w-4 mr-2" />
                  YouTube
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-fhm-white shadow-lg">
            <h3 className="text-2xl font-bold text-fhm-black mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-fhm-black mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-fhm-gray rounded-lg focus:ring-2 focus:ring-fhm-yellow focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-fhm-black mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-fhm-gray rounded-lg focus:ring-2 focus:ring-fhm-yellow focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-fhm-black mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-fhm-gray rounded-lg focus:ring-2 focus:ring-fhm-yellow focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-fhm-black mb-2">Phone (Optional)</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-fhm-gray rounded-lg focus:ring-2 focus:ring-fhm-yellow focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-fhm-black mb-2">Subject</label>
                <select className="w-full px-4 py-2 border border-fhm-gray rounded-lg focus:ring-2 focus:ring-fhm-yellow focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>Prayer Request</option>
                  <option>Service Information</option>
                  <option>Volunteer Opportunities</option>
                  <option>Event Information</option>
                  <option>Pastoral Care</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-fhm-black mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-2 border border-fhm-gray rounded-lg focus:ring-2 focus:ring-fhm-yellow focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-fhm-yellow text-fhm-black hover:bg-fhm-yellow-dark">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-fhm-black mb-6 text-center">Find Us</h3>
          <div className="bg-fhm-gray rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-fhm-yellow mx-auto mb-4" />
              <p className="text-fhm-gray">Interactive Map Coming Soon</p>
              <p className="text-sm text-fhm-gray">123 Faith Street, Hope City, HC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;