import Filter from "../components/Filter/Filter";
import Tab from "../components/Tab/Tab";

const ListedBooks = () => {
  const handleSortByName = async () => {
    const req = await fetch("/books.json");
    const res = await req.json();

    function compare(prop) {
      return function (a, b) {
        console.log(prop); // outputs -> name
        return -1; // sort stuff
      };
    }

    const data = res.sort(compare("bookName"));
  };

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Title Text */}
      <div className="bg-[#1313130D] py-8 rounded-2xl">
        <h1 className="text-[#131313] font-bold text-3xl text-center">Books</h1>
      </div>
      <div>
        <Filter ></Filter>
      </div>
      <Tab></Tab>
    </div>
  );
};

export default ListedBooks;
