import { Menu, X, Cross } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fhm-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Cross className="h-8 w-8 text-fhm-yellow" />
            <div>
              <h1 className="text-2xl font-bold text-fhm-black">Final Harvest</h1>
              <p className="text-sm text-fhm-gray">Ministry</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-fhm-black hover:text-fhm-yellow transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-fhm-yellow text-fhm-black hover:bg-fhm-yellow-dark">
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-fhm-black" />
            ) : (
              <Menu className="h-6 w-6 text-fhm-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-fhm-black hover:text-fhm-yellow transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-fhm-yellow text-fhm-black hover:bg-fhm-yellow-dark w-full mt-4">
                Join Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;