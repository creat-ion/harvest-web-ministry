import { Heart, Users, Globe, Cross } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We believe in showing Christ's love through our actions and words to all people."
    },
    {
      icon: Cross,
      title: "Faith & Devotion",
      description: "Our foundation is built on unwavering faith and dedication to God's word."
    },
    {
      icon: Users,
      title: "Community & Fellowship",
      description: "We foster a welcoming community where everyone can grow in their faith journey."
    },
    {
      icon: Globe,
      title: "Global Mission",
      description: "We are committed to spreading the Gospel to every nation and every people."
    }
  ];

  return (
    <section id="about" className="py-20 bg-fhm-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fhm-black mb-6">
            About <span className="text-fhm-yellow">Final Harvest</span> Ministry
          </h2>
          <p className="text-xl text-fhm-gray max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of love, faith, and service, Final Harvest Ministry 
            has been a beacon of hope in our community for over 15 years.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-fhm-black mb-6">Our Mission</h3>
            <p className="text-lg text-fhm-gray mb-6 leading-relaxed">
              At Final Harvest Ministry, we are dedicated to preparing souls for the second coming 
              of Christ. We believe that we are living in the end times, and it is our calling 
              to gather as many souls as possible for God's kingdom.
            </p>
            <p className="text-lg text-fhm-gray mb-6 leading-relaxed">
              Through worship, fellowship, community service, and evangelism, we strive to 
              create an environment where people can encounter the living God and experience 
              His transforming power.
            </p>
            <div className="bg-fhm-yellow-light p-6 rounded-lg border-l-4 border-fhm-yellow">
              <p className="text-fhm-black font-semibold italic">
                "We are called to be fishers of men, gathering the final harvest before 
                Christ's return. Every soul matters, every person is precious in God's sight."
              </p>
              <p className="text-fhm-gray mt-2">- Pastor's Vision</p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-fhm-gray-light rounded-lg h-96 flex items-center justify-center">
              <Cross className="h-24 w-24 text-fhm-yellow" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-fhm-yellow p-4 rounded-lg shadow-lg">
              <Heart className="h-8 w-8 text-fhm-black" />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-fhm-gray-light rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="bg-fhm-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-fhm-black" />
              </div>
              <h4 className="text-xl font-bold text-fhm-black mb-3">{value.title}</h4>
              <p className="text-fhm-gray leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;