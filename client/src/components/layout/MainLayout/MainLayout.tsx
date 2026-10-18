import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import AnnouncementBar from "../AnnouncementBar/AnnouncementBar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ANNOUNCEMENT_HEIGHT = 40;
const NAVBAR_HEIGHT = 78;

const MainLayout = () => {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarTop = announcementVisible ? `${ANNOUNCEMENT_HEIGHT}px` : "0px";

  const contentTopSpacing = announcementVisible
    ? ANNOUNCEMENT_HEIGHT + NAVBAR_HEIGHT
    : NAVBAR_HEIGHT;

  return (
    <div className="min-vh-100 d-flex flex-column">
      <header>
        <AnnouncementBar
          visible={announcementVisible}
          onClose={() => setAnnouncementVisible(false)}
        />

        <Navbar isScrolled={isScrolled} navbarTop={navbarTop} />
      </header>

      <main
        className="flex-grow-1"
        style={{
          paddingTop: `${contentTopSpacing}px`,
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
