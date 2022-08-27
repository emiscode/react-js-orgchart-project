import "./TeamMember.css";

const TeamMember = ({ name, picture, position }) => {
  return (
    <div>
      <div>
        <img src={picture} alt={name} />
      </div>
      <div>
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default TeamMember;
