const getStoredReadBook = () => {
  const storedReadBook = localStorage.getItem("read-books");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};
const readBook = (bookId) => {
  const storedReadBooks = getStoredReadBook();
  const exists = storedReadBooks.find((readId) => readId === bookId);
  if (!exists) {
    storedReadBooks.push(bookId);
    localStorage.setItem("read-books", JSON.stringify(storedReadBooks));
  }
};

const wishlistBook = (bookId) => {
  const storedReadBooks = getStoredReadBook();
  const isAlreadyRead = storedReadBooks.find((readId) => readId === bookId);

  if (isAlreadyRead) {
    throw new Error("Book already marked as read. Cannot add to wishlist.");
  }

  const storedWishlist = getStoredWishlist();
  storedWishlist.push(bookId);
  localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
};

const getStoredWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};

export { getStoredReadBook, readBook, wishlistBook, getStoredWishlist };
