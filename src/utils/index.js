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
  // alert("Alreay readed");
};

export { getStoredReadBook, readBook };
