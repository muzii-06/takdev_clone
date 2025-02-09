import React from "react";
import "./Marquee.css";

const icons = [
  { src: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2024/06/partners-logo-1-1.png", alt: "React" },
  { src: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2024/06/partners-logo-1.png", alt: "Node.js" },
  { src: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2024/06/partners-logo-2-1-300x60.png", alt: "Express.js" },
  { src: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2024/06/partners-logo-2.png", alt: "GameMaker" },
  { src: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2024/06/partners-logo-3-300x36.webp", alt: "WordPress" },
  { src: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2024/06/partners-logo-3.png", alt: "Adobe XD" },
  { src: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2024/06/qtq_72-2.webp", alt: "Blender" },
  { src: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2024/06/qtq_72-3.webp", alt: "Adobe Animate" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/game-maker-2.png", alt: "Flutter" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/laravel.png", alt: "Unreal Engine" },
];

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {/* Render icons twice for a seamless loop */}
        {[...icons, ...icons].map((icon, index) => (
          <img width={"100%"} key={index} src={icon.src} alt={icon.alt} />
        ))}
      </div>
    </div>
  );
}
