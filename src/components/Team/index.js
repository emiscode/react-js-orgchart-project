import "./Team.css";
import TeamMember from "../TeamMember";

const Team = (props) => {
  return (
    props.teamMembers.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="teamMembers">
          {props.teamMembers.map((teamMember, index) => (
            <TeamMember
              key={index}
              name={teamMember.name}
              picture={teamMember.picture}
              position={teamMember.position}
              backgroundColor={props.primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
