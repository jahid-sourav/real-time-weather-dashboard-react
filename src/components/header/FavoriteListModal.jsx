import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../context";

export default function FavoriteListModal() {
  const { favorites } = useContext(FavoriteContext);
  const { setSelectedLocation } = useContext(LocationContext);

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favorite Locations</h3>
      {favorites.length === 0 ? (
        <p className="text-center">No Data Added</p>
      ) : (
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {favorites.map((fav) => (
            <li key={fav.location} className="hover:bg-gray-200">
              <button onClick={() => setSelectedLocation({ ...fav })}>
                {fav.location}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
