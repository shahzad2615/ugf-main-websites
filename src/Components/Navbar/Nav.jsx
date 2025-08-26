import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Globe ,User} from "lucide-react";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Navbar Links with description (JSW-style)
   const [selectedLang, setSelectedLang] = useState("EN");
  const navLinks = [
  {
    name: "About Us",
    dropdown: [
      {
        name: "Overview",
        description: "Who we are",
        img: "https://www.spicenews.com.au/wp-content/uploads/2024/06/Upwards-trend-Report-shows-bright-future-for-events-industry-Copy.jpg",
        href: "#overview",
      },
      {
        name: "Board of Trustees",
        description: "Meet our trustees",
        img: "https://plus.unsplash.com/premium_photo-1664301239248-e3a31726f9d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvYXJkJTIwb2YlMjBkaXJlY3RvcnN8ZW58MHx8MHx8fDA%3D",
        href: "#trustees",
      },
      {
        name: "Our Management",
        description: "Leadership team",
        img: "https://lsuonline-static.s3.amazonaws.com/media/images/2021/08/13/OCE_2021_Newsroom_Lg_HR_Management.jpeg",
        href: "#Management",
      },
      {
        name: "Certifications",
        description: "Our achievements",
        img: "https://blog.gsaaa.org/wp-content/uploads/2024/07/certification.jpg",
        href: "#certifications",
      },
      {
        name: "Annual Reports",
        description: "Yearly progress",
        img: "https://www.freshbooks.com/wp-content/uploads/2022/03/write-an-annual-report.jpg",
        href: "#Reports",
      },
      {
        name: "Newsletter",
        description: "Stay updated",
        img: "https://www.smilefoundationindia.org/wp-content/uploads/2025/07/Newsletter-july-2025.png",
        href: "#newsletter",
      },
      {
        name: "Financials Reports",
        description: "Performance insights",
        img: "https://www.techfunnel.com/wp-content/uploads/2018/01/Impact-of-Information-Technology-on-Financial-Reporting.jpg",
        href: "#partners",
      },
    ],
  },
  {
    name: "Our Initiatives",
    dropdown: [
      {
        name: "Upcoming Events",
        description: "See what's next",
        img: "data:image/jpeg;base64,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", // keeping your base64
        href: "#events",
      },
      {
        name: "Environment Protection",
        description: "Save our planet",
        img: "https://cdn.shopify.com/s/files/1/0564/9321/1807/files/2._bao_ve_mtr_600x600.jpg?v=1701595034",
        href: "#protection",
      },
      {
        name: "Animal Welfare",
        description: "Care for animals",
        img: "https://images.wagwalkingweb.com/media/care/veterinary-animal-welfare/veterinary-animal-welfare.jpg",
        href: "#welfare",
      },
      {
        name: "Women Empowerment",
        description: "Education & rights",
        img: "https://manndeshifoundation.org/wp-content/themes/manndeshi/img/work-xs/women.jpg",
        href: "#empowerment",
      },
      {
        name: "Social Justice",
        description: "Equality for all",
        img: "https://i0.wp.com/draya-eg.org/wp-content/uploads/2023/03/333.jpg?fit=730%2C438&ssl=1",
        href: "#justice",
      },
      {
        name: "Disaster Preparedness",
        description: "Ready for emergencies",
        img: "https://theunitedindian.com/images/disaster-hero.jpg",
        href: "#disaster",
      },
      {
        name: "Health Care",
        description: "Better health access",
        img: "https://lotusdiagnostic.com/wp-content/uploads/2023/01/close-up-doctor-with-stethoscope.jpg",
        href: "#health",
      },
      {
        name: "Road Safety",
        description: "Safe journeys ahead",
        img: "https://www.nirwanuniversity.ac.in/images/banner-road-safety-img-2.webp",
        href: "#roadsafety",
      },
    ],
  },
  { name: "Media", href: "#media" },
  { name: "Shop", href: "#Shop" },
  { name: "Blog", href: "#blog" },
  {
    name: "Get Involved",
    dropdown: [
      {
        name: "Volunteer",
        description: "Join our efforts",
        img: "https://tiyafoundation.org/wp-content/uploads/2023/01/become_volunteer.jpg",
        href: "#volunteer",
      },
      {
        name: "Careers",
        description: "Be part of us",
        img: "https://s3.amazonaws.com/libapps/accounts/1319/images/careers.jpg",
        href: "#membership",
      },
    ],
  },
  { name: "Contact", href: "#contact" },

  // 🔥 New: Language Selector
  // 🌐 Language Selector
 // 🌐 Language Picker
 
];


  const handleLinkClick = (name) => {
    setActiveLink(name);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur shadow-lg text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide">
          Utkarsh Global Foundation
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    activeLink === link.name
                      ? "text-yellow-500"
                      : "hover:text-yellow-500"
                  }`}
                >
                  {link.name} <ChevronDown size={16} />
                </button>

                {/* Mega Menu Dropdown */}
                <div
                  className={`absolute left-0 top-full mt-2 bg-yellow-500 text-gray-900 rounded-lg shadow-lg transform transition-all duration-200 p-6 grid grid-cols-4 gap-6 w-[900px] ${
                    openDropdown === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  {link.dropdown.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      onClick={() => handleLinkClick(link.name)}
                      className="flex flex-col items-center text-center hover:scale-105 transition-transform"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md shadow"
                      />
                      <span className="mt-2 font-semibold text-gray-800">
                        {item.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.description}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={index}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`font-medium transition-colors ${
                  activeLink === link.name
                    ? "text-yellow-500"
                    : "hover:text-yellow-500"
                }`}
              >
                {link.name}
              </a>
            )
          )}

          <a
            href="#donate"
            className="ml-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            Donate
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-yellow-500 text-gray-900 shadow-lg animate-fadeIn">
          {navLinks.map((link, index) => (
            <div key={index} className="border-b border-gray-200">
              {link.dropdown ? (
                <>
                  <button
                    className="w-full text-left px-6 py-3 font-medium flex justify-between items-center hover:bg-yellow-500"
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === index && (
                    <div className="bg-yellow-500 grid grid-cols-2 gap-4 p-4">
                      {link.dropdown.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          onClick={() => handleLinkClick(link.name)}
                          className="flex flex-col items-center text-center hover:scale-105 transition-transform"
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-md shadow"
                          />
                          <span className="mt-1 text-sm font-semibold">
                            {item.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {item.description}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
          <div className="p-4">
            <a
              href="#donate"
              className="block w-full bg-yellow-500 text-white text-center px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
