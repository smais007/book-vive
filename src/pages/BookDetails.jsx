import { Tab } from "@headlessui/react";
import { useLoaderData, useParams } from "react-router-dom";
import { readBook } from "../utils";
import { toast } from "sonner";

export default function BookDetails() {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);

  const handleRead = () => {
    readBook(idInt);
    toast.success("You read the book");

    // alert("Book Readed");
  };

  const handleWhish = () => {};

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Tab.Group as="div" className="flex flex-col-reverse">
            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              <Tab.Panel key={book.bookName}>
                <img
                  src={book.image}
                  className="h-2/3 w-full object-cover object-center sm:rounded-lg"
                />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 pb-4">
              {book.bookName}
            </h1>
            {/* Author */}
            <div>
              <p className="font-bold text-[#131313CC] pb-6">
                By <span>{book.author}</span>
              </p>
              <hr />
            </div>
            <div>
              <p className="py-4 font-medium">{book.category}</p>
              <hr />
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Review</h3>

              <div className="space-y-6 text-base text-gray-700" />
              <p>
                {" "}
                <strong>Review: </strong>
                <span dangerouslySetInnerHTML={{ __html: book.review }}></span>
              </p>
              <div className="py-7 flex gap-4">
                <h1 className="font-bold text-[#131313]">Tags</h1>
                <div className="flex">
                  <p className="">Lorem, ipsum.</p>
                  <p>Lorem.</p>
                </div>
              </div>
              <hr />
            </div>
            {/* Tags */}

            <section aria-labelledby="details-heading" className="mt-6">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="flex  gap-14">
                <div className="leading-7">
                  <p>Number of Page</p>
                  <p>Publisher</p>
                  <p>Year of Publishing</p>
                  <p>Rating</p>
                </div>
                <div className="leading-7 font-semibold">
                  <p>{book.totalPages}</p>
                  <p>{book.publisher}</p>
                  <p>{book.yearOfPublishing}</p>
                  <p>{book.rating}</p>
                </div>
              </div>
              <div className="flex gap-3 pt-8">
                <button
                  onClick={() => handleRead(book)}
                  type="button"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Read Now
                </button>
                <button
                  onClick={() => handleWhish(book)}
                  type="button"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Wishlist
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
