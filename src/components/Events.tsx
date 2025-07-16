import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "./ui/button";

const Events = () => {
  const events = [
    {
      title: "Revival Week",
      date: "March 15-20, 2024",
      time: "7:00 PM Daily",
      location: "Main Sanctuary",
      description: "Join us for a powerful week of revival with guest speakers and special worship.",
      attendees: "Open to All",
      featured: true
    },
    {
      title: "Youth Conference",
      date: "April 5, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Fellowship Hall",
      description: "A day dedicated to empowering young people in their faith journey.",
      attendees: "Ages 13-25",
      featured: false
    },
    {
      title: "Community Outreach",
      date: "April 12, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "City Park",
      description: "Serving our community with food, prayer, and the love of Christ.",
      attendees: "Volunteers Needed",
      featured: false
    },
    {
      title: "Easter Celebration",
      date: "March 31, 2024",
      time: "9:00 AM & 11:00 AM",
      location: "Main Sanctuary",
      description: "Celebrate the resurrection of our Lord Jesus Christ with special services.",
      attendees: "All Welcome",
      featured: true
    },
    {
      title: "Men's Prayer Breakfast",
      date: "Every Saturday",
      time: "7:00 AM",
      location: "Fellowship Hall",
      description: "Men gathering for prayer, fellowship, and encouragement.",
      attendees: "All Men",
      featured: false
    },
    {
      title: "Women's Bible Study",
      date: "Every Thursday",
      time: "10:00 AM",
      location: "Conference Room",
      description: "Women studying God's word together in a supportive environment.",
      attendees: "All Women",
      featured: false
    }
  ];

  return (
    <section id="events" className="py-20 bg-fhm-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fhm-black mb-6">
            Upcoming <span className="text-fhm-yellow">Events</span>
          </h2>
          <p className="text-xl text-fhm-gray max-w-3xl mx-auto leading-relaxed">
            Join us for special events, services, and activities that bring our 
            community together in worship and fellowship.
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-fhm-black mb-8 text-center">Featured Events</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.filter(event => event.featured).map((event, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-fhm-yellow-light to-fhm-yellow p-6 rounded-lg shadow-lg"
              >
                <div className="bg-fhm-white rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-fhm-black mb-4">{event.title}</h4>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-fhm-gray">
                      <Calendar className="h-4 w-4 mr-3 text-fhm-yellow" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-fhm-gray">
                      <Clock className="h-4 w-4 mr-3 text-fhm-yellow" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-fhm-gray">
                      <MapPin className="h-4 w-4 mr-3 text-fhm-yellow" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-fhm-gray">
                      <Users className="h-4 w-4 mr-3 text-fhm-yellow" />
                      {event.attendees}
                    </div>
                  </div>
                  <p className="text-fhm-gray mb-4 leading-relaxed">{event.description}</p>
                  <Button className="bg-fhm-yellow text-fhm-black hover:bg-fhm-yellow-dark">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Events */}
        <div>
          <h3 className="text-2xl font-bold text-fhm-black mb-8 text-center">Regular Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.filter(event => !event.featured).map((event, index) => (
              <div 
                key={index}
                className="bg-fhm-gray-light rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-bold text-fhm-black mb-3">{event.title}</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-fhm-gray">
                    <Calendar className="h-3 w-3 mr-2 text-fhm-yellow" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-fhm-gray">
                    <Clock className="h-3 w-3 mr-2 text-fhm-yellow" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-fhm-gray">
                    <MapPin className="h-3 w-3 mr-2 text-fhm-yellow" />
                    {event.location}
                  </div>
                </div>
                <p className="text-fhm-gray text-sm mb-4 leading-relaxed">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-fhm-yellow text-fhm-black px-2 py-1 rounded">
                    {event.attendees}
                  </span>
                  <Button size="sm" variant="outline" className="border-fhm-yellow text-fhm-yellow hover:bg-fhm-yellow hover:text-fhm-black">
                    Join
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Calendar CTA */}
        <div className="mt-16 text-center">
          <div className="bg-fhm-gray-light rounded-lg p-8">
            <Calendar className="h-16 w-16 text-fhm-yellow mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-fhm-black mb-4">Stay Updated</h3>
            <p className="text-fhm-gray mb-6 max-w-2xl mx-auto">
              Never miss an event! Subscribe to our newsletter or follow us on social media 
              to stay informed about all upcoming activities and special services.
            </p>
            <Button className="bg-fhm-yellow text-fhm-black hover:bg-fhm-yellow-dark">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;