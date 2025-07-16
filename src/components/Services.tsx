import { Clock, Users, BookOpen, Heart, Music, Church } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: Music,
      title: "Sunday Worship",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for uplifting worship, powerful preaching, and fellowship with believers.",
      features: ["Contemporary & Traditional Music", "Biblical Teaching", "Children's Ministry"]
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      time: "Wednesday 7:00 PM",
      description: "Deep dive into God's word with fellow believers in a supportive environment.",
      features: ["Small Groups", "Verse-by-Verse Study", "Prayer & Discussion"]
    },
    {
      icon: Church,
      title: "Prayer Meeting",
      time: "Friday 6:00 PM",
      description: "Come together in corporate prayer for our community, nation, and world.",
      features: ["Intercessory Prayer", "Healing Prayer", "Testimonies"]
    },
    {
      icon: Heart,
      title: "Youth Ministry",
      time: "Saturday 4:00 PM",
      description: "Empowering young people to live boldly for Christ in their generation.",
      features: ["Age-Appropriate Teaching", "Fun Activities", "Mentorship"]
    },
    {
      icon: Users,
      title: "Community Outreach",
      time: "Monthly Events",
      description: "Serving our community with the love of Christ through practical action.",
      features: ["Food Distribution", "Prison Ministry", "Hospital Visits"]
    },
    {
      icon: Clock,
      title: "Special Events",
      time: "Throughout the Year",
      description: "Special services, conferences, and celebrations that strengthen our faith.",
      features: ["Revival Meetings", "Conferences", "Holiday Services"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-fhm-gray-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fhm-black mb-6">
            Our <span className="text-fhm-yellow">Services</span> & Programs
          </h2>
          <p className="text-xl text-fhm-gray max-w-3xl mx-auto leading-relaxed">
            We offer various services and programs designed to help you grow in your faith 
            and connect with our loving community.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-fhm-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Icon and Header */}
              <div className="flex items-center mb-4">
                <div className="bg-fhm-yellow w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <service.icon className="h-6 w-6 text-fhm-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fhm-black">{service.title}</h3>
                  <p className="text-fhm-yellow font-semibold">{service.time}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-fhm-gray mb-4 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-fhm-gray">
                    <div className="w-2 h-2 bg-fhm-yellow rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-fhm-white rounded-lg p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-fhm-black mb-4">
            Ready to Join Us?
          </h3>
          <p className="text-fhm-gray mb-6 max-w-2xl mx-auto">
            We would love to welcome you into our church family. Come as you are - 
            God has a place for everyone at Final Harvest Ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-fhm-yellow text-fhm-black hover:bg-fhm-yellow-dark">
              Plan Your Visit
            </Button>
            <Button variant="outline" className="border-fhm-black text-fhm-black hover:bg-fhm-black hover:text-fhm-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;