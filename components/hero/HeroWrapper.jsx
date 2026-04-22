"use client";

import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

export default function HeroWrapper() {
  return (
    <>
      {/* Mobile */}
      <div className="block lg:hidden">
        <MobileHero />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopHero />
      </div>
    </>
  );
}
