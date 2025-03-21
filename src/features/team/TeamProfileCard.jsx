

// eslint-disable-next-line react/prop-types
const ProfileCard = ({ image, name, title,quote }) => {
  return (
    <div className="bg-white w-[550px] shadow-md rounded-xl p-6 flex flex-col items-center text-center space-y-3 cursor-pointer hover:bg-secondary hover:text-white ease-in-out duration-300">
      <img
        src={image}
        alt={name}
        className="rounded-full object-cover"
      />
      <blockquote className="text-gray-500 text-xl italic font-lora">
        &apos;
        {quote}</blockquote>
     <div>
       <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{title}</p>
     </div>
      <span className="text-gray-400 text-xl">›</span>
    </div>
  );
};

export default ProfileCard;