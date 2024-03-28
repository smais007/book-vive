import { Link, useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../../utils";
import { useEffect, useState } from "react";

export default function WishlistBooks() {
  const [books] = useState(useLoaderData() || []);
  const [wishlistData, setWishlistData] = useState([]);
  useEffect(() => {
    const wishIds = getStoredWishlist();
    if (books.length > 0) {
      const wishBook = books.filter((book) => wishIds.includes(book.bookId));
      setWishlistData(wishBook);
    }
  }, [books]);

  return (
    <>
      <div className="bg-white mx-4 lg:mx-0">
        <main className="mx-auto max-w-2xl pb-24 pt-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8">
          <section aria-labelledby="products-heading" className="mt-6">
            <h2 id="products-heading" className="sr-only">
              Products purchased
            </h2>

            <div className="space-y-8">
              {wishlistData.map((book) => (
                <div
                  key={book.bookId}
                  className="border-b border-t border-[#13131399] bg-white shadow-sm sm:rounded-lg sm:border"
                >
                  <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                    <div className="sm:flex lg:col-span-7">
                      {/* <div className="aspect-h-1 aspect-w-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40">
                      <img
                        src={book.image}
                        alt={book.bookName}
                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                      />
                    </div> */}
                      <div className="w-full lg:w-1/3">
                        <img
                          src={book.image}
                          alt=""
                          className="rounded-lg shadow-lg h-80 w-96 "
                        />
                      </div>

                      <div className="mt-6 sm:ml-6 sm:mt-0">
                        <h3 className="text-2xl font-bold text-gray-900">
                          <a href="#">{book.bookName}</a>
                        </h3>
                        <p className="mt-2 text-base font-medium text-gray-900">
                          {book.author}
                        </p>
                        {/* <div className="flex justify-between gap-10">
                        <h1 >{book.tags.join(", ")}</h1>
                        <p>Year of Publishing: {book.yearOfPublishing}</p>
                      </div> */}
                        <div className="flex flex-wrap gap-3">
                          <div className="mt-2">Tags</div>
                          <div className="space-x-2 text-green-600 bg-green-100 rounded-2xl px-4 py-2 text-sm">
                            #{book.tags[0]}
                          </div>
                          <div className="space-x-2 text-green-600 bg-green-100 rounded-2xl px-4 py-2 text-sm">
                            #{book.tags[1]}
                          </div>
                          <div className="mt-3">
                            Year Of Publishing {book.yearOfPublishing}
                          </div>
                        </div>

                        {/* <div className="flex">
                        <p>Publisher: {book.publisher}</p>
                        <p>Pages: {book.totalPages}</p>
                      </div> */}

                        <div className="flex gap-4 my-8">
                          <div>
                            <h3>Publisher: {book.publisher}</h3>
                          </div>
                          <div>
                            <h3>Page {book.totalPages}</h3>
                          </div>
                        </div>
                        <hr />

                        {/* <div className="flex">
                        <p>Category: {book.category}</p>
                        <p>Rating: {book.rating}</p>
                        <button>View Details</button>
                      </div> */}
                        <div className="flex gap-3 my-3">
                          <div>
                            <button className="bg-blue-200 self-start px-5 py-2 text-sm rounded-3xl text-gray-900">
                              Catagory {book.category}
                            </button>
                          </div>{" "}
                          <div>
                            <button className="bg-orange-200 self-start px-5 py-2 text-sm  rounded-3xl text-gray-900">
                              Rating {book.rating}
                            </button>
                          </div>
                          <div>
                            <Link to={`/${book.bookId}`}>
                              <button className="bg-green-300 self-start px-5 py-2 text-sm rounded-3xl text-gray-900">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
