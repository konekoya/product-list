export const Header = () => {
  return (
    <header>
      <h1 className="flex flex-col mb-8">
        <span className="text-4xl mb-1 font-black">Some sweets of</span>
        <span className="text-2xl font-thin">Happiness!</span>
      </h1>
      <div className="flex mb-4">
        <nav className="flex xs:space-x-3 text-sm -mx-1">
          <a
            href="#"
            className="py-2 px-3.5 rounded-xl text-gray hover:bg-yellow hover:text-gray-dark font-normal"
          >
            Donuts
          </a>
          <a
            href="#"
            className="py-2 px-3.5 rounded-xl text-gray hover:bg-yellow hover:text-gray-dark font-normal"
          >
            Ice cream
          </a>
          <a
            href="#"
            className="py-2 px-3.5 rounded-xl text-gray hover:bg-yellow hover:text-gray-dark font-normal"
          >
            Bomboloni
          </a>
        </nav>

        <span className="ml-4 flex justify-center items-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="6.24997"
              width="22"
              height="1.94444"
              rx="0.972222"
              fill="#696969"
            />
            <ellipse cx="16" cy="7.22221" rx="3" ry="2.91667" fill="#696969" />
            <rect
              y="14.0278"
              width="22"
              height="1.94444"
              rx="0.972222"
              fill="#696969"
            />
            <ellipse cx="7" cy="15" rx="3" ry="2.91667" fill="#696969" />
          </svg>
        </span>
      </div>
    </header>
  );
};
