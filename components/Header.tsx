import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Button from "./UI/Button";

const Header = () => {
  return (
    <header className="relative z-50">
      <section className="absolute top-0 right-0 left-0 flexBetween bg-white shadow-md max-container pl-8 mt-10 z-10 lg:head-container">
        <Link href="/" className="py-5">
          <Image src="/qwik-logo.png" alt="Logo" width={175} height={54} />
        </Link>
        <div className="lg:flexBetween hidden">
          <Navbar />
          <Button type="button" title="Book Now" variant="btn_dark_blue" />
        </div>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer mr-8 lg:hidden"
        />
      </section>
    </header>
  );
};

export default Header;
