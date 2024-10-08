import { useState } from "react";
import Favorite from "./Favorite";
import FavoriteListModal from "./FavoriteListModal";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [showFavModal, setShowFavModal] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        {/* Logo Starts Here */}
        <Logo />
        {/* Logo Ends Here */}

        <div className="flex items-center gap-4 relative">
          {/* Search Starts Here */}
          <Search />
          {/* Search Ends Here */}

          {/* Favorite Starts Here */}
          <Favorite onShow={() => setShowFavModal(!showFavModal)} />
          {/* Favorite Ends Here */}

          {/* FavoriteListModal Starts Here */}
          {showFavModal && <FavoriteListModal />}
          {/* FavoriteListModal Ends Here */}
        </div>
      </nav>
    </header>
  );
}
