import "./TeamMember.css";

const TeamMember = ({ name, picture, position, backgroundColor }) => {
  return (
    <div className="teamMember">
      <div className="header" style={{ backgroundColor }}>
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
