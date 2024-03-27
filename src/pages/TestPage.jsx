<div className="bg-white">
      <main className="mx-auto max-w-2xl pb-24 pt-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8">
        <section aria-labelledby="products-heading" className="mt-6">
          <h2 id="products-heading" className="sr-only">
            Products purchased
          </h2>

          <div className="space-y-8">
            {books.map((book) => (
              <div
                key={book.bookId}
                className="border-b border-t border-[#13131399] bg-white shadow-sm sm:rounded-lg sm:border"
              >
                <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                  <div className="sm:flex lg:col-span-7">
                    <div className="aspect-h-1 aspect-w-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40">
                      <img
                        src={book.image}
                        alt={book.bookName}
                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                      />
                    </div>

                    <div className="mt-6 sm:ml-6 sm:mt-0">
                      <h3 className="text-2xl font-bold text-gray-900">
                        <a href="#">{book.bookName}</a>
                      </h3>
                      <p className="mt-2 text-base font-medium text-gray-900">
                        {book.author}
                      </p>
                      <div className="flex justify-between gap-10">
                        <h1>{book.tags.join(", ")}</h1>
                        <p>Year of Publishing: {book.yearOfPublishing}</p>
                      </div>

                      <div className="flex">
                        <p>Publisher: {book.publisher}</p>
                        <p>Pages: {book.totalPages}</p>
                      </div>

                      <div className="flex">
                        <p>Category: {book.category}</p>
                        <p>Rating: {book.rating}</p>
                        <button  className="px-4 bg-green-300 py-3"onClick={() => addToWishlist(book)}>
                          Add to Read
                        </button>
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
    <h1>Wish list books </h1>