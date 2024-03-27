export const getBooks = (list) => {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks === null) return [];
  const data = JSON.parse(storedBooks);
  return data.filter((node) => node.list === list);
};

export const saveBook = (book, list) => {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  const isExist = books.find((b) => {
    if (b.list === "read" && list === "wish" && b.bookId === book.bookId) {
      return true;
    }

    if (b.bookId === book.bookId && b.list === list) {
      return true;
    }
    return false;
  });

  if (isExist) return;
  books.push({ ...book, list });
  localStorage.setItem("books", JSON.stringify(books));
};
