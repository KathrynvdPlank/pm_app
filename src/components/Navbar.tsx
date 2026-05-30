// BurgerMenu.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="burger-button"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        ☰
      </button>

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeMenu}>
          ×
        </button>

        <nav>
          <ul>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}