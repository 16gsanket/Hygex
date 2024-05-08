import { useState } from "react";

function Navbar() {
  const [showNavBar, setShowNavbar] = useState(false);
  return (
    <div className="h-[10dvh] w-full  flex align-middle justify-between items-center px-4">
      <div className="h-4/6 w-3/12 ">
        <img src="/logo.png" alt="" />
      </div>

      <div className="sm:hidden" onClick={() => setShowNavbar((s) => !s)}>
        <p>&#9776;</p>
      </div>
      {showNavBar && (
        <div className="absolute top-14 right-1 bg-blue-200/90 h-full w-fit px-28 ">
          <ul className="flex flex-col w-5/12 align-middle justify-between items-center text-stone-600 text-lg gap-4 ">
            <li>Home</li>
            <li>Flashcard</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li className="bg-gradient-to-tr from-blue-600 to-blue-900 px-4 text-stone-200 py-1 rounded-full">
              Login
            </li>
          </ul>
        </div>
      )}

      <ul className="sm:flex sm:w-5/12 sm:align-middle sm:justify-between sm:items-center text-stone-600 text-lg hidden">
        <li>Home</li>
        <li>Flashcard</li>
        <li>Contact</li>
        <li>FAQ</li>
        <li className="bg-gradient-to-tr from-blue-600 to-blue-900 px-4 text-stone-200 py-1 rounded-full">
          Login
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
