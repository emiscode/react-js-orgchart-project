import "./Team.css";
import TeamMember from "../TeamMember";

const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <TeamMember />
    </section>
  );
};

export default Team;
