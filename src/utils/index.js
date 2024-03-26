export const getBooks = (list) => {
  const storedBooks = localStorage.getItem("books");

  if (storedBooks === null) return [];

  const data = JSON.parse(storedBooks);

  return data.filter((node) => node.list === list);
};

export const saveBook = (book, list) => {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  const isExist = books.find((b) => {
    if (b.list === "read" && list === "whish" && b.id === book.id) {
      console.log("Can't add to list");
      return b;
    }

    if (b.id === book.id) {
      return b;
    }
  });
  if (!isExist) return console.log("Already exists");

  books.push({ ...book, list });

  console.log(books);

  localStorage.setItem("books", JSON.stringify(books));
  console.log("Added successfully");
};
