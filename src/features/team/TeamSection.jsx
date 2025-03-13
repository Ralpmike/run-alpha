import teamMembers from "../../data/data";
import ProfileCard from "./TeamProfileCard";

const TeamSection = () => {
  return (

    <div className="lg:px-30 px-6 md:py-16 py-6 w-full mx-auto text-center">
      <h2 className="text-2xl py-2 font-semibold italic">Meet the Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3 md:p-6 lg:gap-12">
      {teamMembers.slice(0, 6).map((member) => (
        <ProfileCard
          key={member.id}
          image={member.image}
          name={member.name}
          title={member.title}
          />
        ))}
    </div>
  </div>
  );
};

export default TeamSection;