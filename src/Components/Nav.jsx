import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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
      img: "data:image/jpeg;base64,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",
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
    {name:"Shop",href:"#Shop"},
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
