import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const menuItems = [
    { name: "Home", link: "#hero-section" },
    { name: "About Me", link: "#about-section" },
    { name: "Projects", link: "#projects-section" },
    { name: "Skills", link: "#skills-section" },
    { name: "Contact", link: "#contact-section" },
  ];
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(window.location.hash || "#hero-section");

    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="flex justify-between lg:justify-around px-4 py-4 sticky top-0 bg-white z-99 shadow-md ">
      <div className="text-2xl font-bold ">Sarina.</div>
      <div className="hidden lg:flex gap-6 text-lg font-medium  items-center">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`${
              activeLink === item.link ? "text-lime-600 font-semibold" : ""
            } hover:text-lime-600`}>
            {item.name}
          </a>
        ))}

        <a href="/Sarina_CV.pdf" download="Sarina_Shrestha_CV.pdf">
          <button className="bg-lime-500 text-white rounded-2xl px-4 py-1 cursor-pointer">
            Download CV
          </button>
        </a>
      </div>
      <div className="lg:hidden">
        <MdMenu
          size={24}
          onClick={() => {
            setOpen(!open);
          }}
          className="cursor-pointer"
        />
        {open && (
          <div className="w-full  absolute left-0 top-14 transition-all ease-in-out flex flex-col gap-4 bg-white rounded-xl shadow-md p-4 font-semibold text-lg">
            {" "}
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`${
                  activeLink === item.link ? "text-lime-900 font-semibold" : ""
                } hover:text-lime-900`}
                onClick={() => {
                setOpen(false);
              }}>
                {item.name}
              </a>
            ))}
            <a
              href="/Sarina_CV.pdf"
              download="Sarina_Shrestha_CV.pdf"
              onClick={() => {
                setOpen(false);
              }}>
              <button className="bg-lime-500 text-white rounded-2xl px-4 py-1 cursor-pointer">
                Download CV
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;