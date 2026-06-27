// Imports
import { Menu } from "lucide-react";

// Interface
interface HeaderProps {
  isExpnadedNav: boolean;
  setIsExpandedNav: React.Dispatch<React.SetStateAction<boolean>>;
}

//
function Header({ isExpnadedNav, setIsExpandedNav }: HeaderProps) {
  return (
    <header className="min-w-screen min-h-16 px-2 fixed top-0 z-20 bg-white flex flex-row items-center justify-between">
      <div>
        {/* Menu Expand btn */}
        <button
          type="button"
          onClick={() => setIsExpandedNav(!isExpnadedNav)}
          className="rounded-full hover:bg-gray-200 active:bg-gray-300 p-3 cursor-pointer transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-500" />
        </button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <h1 className="font-bold">Google Meet</h1>
        <img
          src="/favicon.png"
          alt="G-Meet Desktop Launcher - icon"
          className="w-10 h-10"
        />
      </div>
    </header>
  );
}

export default Header;
