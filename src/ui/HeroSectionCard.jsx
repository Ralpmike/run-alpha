

// eslint-disable-next-line react/prop-types
const HeroSectionCard = ({ data: { backgroundImage, description, title }}) => {
  return (
    <div
      className={`w-full text-center relative md:h-dvh h-[600px] bg-center bg-cover `}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-6" />

      <div className="absolute flex justify-center items-center flex-col top-0 left-0 w-full md:px-8 h-full text-white z-8">
        <h1 className="text-7xl font-extrabold mb-6 font-quicksand">{title}</h1>
        <p className="leading-relaxed text-base md:text-xl max-w-7xl italic font-inter">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroSectionCard;
