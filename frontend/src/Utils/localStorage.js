// ADD A PRODUCT TO A LOCALSTORAGE
export const addFavoriteToLocalStorage = (product) => {
  const favorites = getFavoritesFromLocalStorage();

  if (!favorites.some((p) => p._id === product._id)) {
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

// REMOVE PRODUCT FROM A LOCALSTORAGE
export const removeFavoriteFromLocalStorage = (productId) => {
  const favorites = getFavoritesFromLocalStorage();
  const updateFavorites = favorites.filter(
    (product) => product._id !== productId
  );

  localStorage.setItem("favorites", JSON.stringify(updateFavorites));
};

// RETRIVE FAVORITES FROM A LOCALSTORAGE
export const getFavoritesFromLocalStorage = () => {
  const favoritesJSON = localStorage.getItem("favorites");
  return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};
