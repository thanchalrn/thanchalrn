// Header Component (components/Header.jsx)
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import { HiMenuAlt3 } from "react-icons/hi";

export const Header = () => {
  return (
    <header className="py-6 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          {/* <h1 className="text-3xl xl:text-4xl font-semibold">
            Fern<span className="text-accent">.</span>
          </h1> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          {/* <Link href="/contact">
            <Button>Hire me</Button>
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button className="text-3xl">
            <HiMenuAlt3 />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;