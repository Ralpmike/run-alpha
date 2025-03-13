

// eslint-disable-next-line react/prop-types
const ProfileCard = ({ image, name, title }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center space-y-3 cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{title}</p>
      <span className="text-gray-400 text-xl">›</span>
    </div>
  );
};

export default ProfileCard;