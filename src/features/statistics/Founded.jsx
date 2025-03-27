const Founded = ({ year, description }) => {
  return (
    <div className="p-8 space-y-16 bg-alpha md:w-[280px] md:h-[450px] shadow-md border-4 border-[#ffca28] hover:scale-105 ease-in-out duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path fill="#ffca28" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z" />
      </svg>
      <div className="text-gray-200">
        <p className="text-base mb-4">Founded</p>
        <h1 className="text-5xl font-bold mb-4">{year}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Founded;
