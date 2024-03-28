import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="hero  bg-base-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="../pngwing 1.png" alt="" />
          <div className="lg:mr-20">
            <h1 className="lg:text-5xl text-xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>

            <Link
              to="/listed-books"
              className="btn text-white bg-green-600 mt-6"
            >
              View the list
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

//         <img src="/src/images/pngwing 1.png" alt="" />
