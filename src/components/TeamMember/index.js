import "./TeamMember.css";

const TeamMember = ({ name, picture, position }) => {
  return (
    <div className="teamMember">
      <div className="header">
        <img src={picture} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default TeamMember;
