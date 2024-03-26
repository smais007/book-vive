import Tab from "../components/Tab/Tab";

const ListedBooks = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Title Text */}
      <div className="bg-[#1313130D] py-8 rounded-2xl">
        <h1 className="text-[#131313] font-bold text-3xl text-center">Books</h1>
      </div>
      <div>
        <button>Filter Books</button>
      </div>
      <Tab></Tab>
    </div>
  );
};

export default ListedBooks;
