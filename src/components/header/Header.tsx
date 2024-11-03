import Favorite from "./Favorite";
import FavouriteSearchModal from "./FavouriteSearchModal";
import SearchLocation from "./Search";

const Header = () => {
  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <nav className="container flex items-center justify-between py-6">
          <a href="./index.html">
            <h2 className="text-3xl font-bold font-sans">Climate-cast</h2>
          </a>

          <div className="flex items-center gap-4 relative">
            <SearchLocation />
            <Favorite />
            <FavouriteSearchModal />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
