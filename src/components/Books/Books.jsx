import { Link, useLoaderData } from "react-router-dom";

const Books = () => {
  const books = useLoaderData() || [];

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div>
            <h1 className="text-center font-bold  text-[#131313] pb-12 text-3xl lg:text-4xl">
              Books
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {books.map((book) => (
              <Link
                to={`/${book.bookId}`}
                key={book.bookId}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-h-4 aspect-w-3 rounded-2xl bg-white p-4 sm:aspect-none group-hover:opacity-75 sm:h-96">
                  <img
                    src={book.image}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full rounded-2xl"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <div className="flex gap-3 text-[#23BE0A]">
                    <p className=" bg-[#23BE0A0D] px-4 rounded-3xl">
                      {book.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                    </p>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900">
                    <a href={"/"}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {book.bookName}
                    </a>
                  </h3>

                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-base font-medium  text-[#131313CC] pb-5">
                      By : {book.author}
                    </p>
                    <hr className="border-dotted" />
                    <div className="pt-5  flex justify-between items-center">
                      <p className="text-base font-medium text-gray-900">
                        {book.category}
                      </p>
                      <p className="flex  justify-center items-center gap-2">
                        {" "}
                        <span>{book.rating}</span>{" "}
                        <span>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                          </svg>
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
