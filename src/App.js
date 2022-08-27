import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Programming",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      name: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    {
      name: "Devops",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },
    {
      name: "Mobile",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
    },
    {
      name: "Back-End",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
    },
  ];

  const [teamMembers, setTeamMembers] = useState([]);

  const addTeamMember = (teamMember) => {
    setTeamMembers([...teamMembers, teamMember]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onSaveTeamMember={(teamMember) => addTeamMember(teamMember)}
      />

      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          teamMembers={teamMembers.filter(
            (teamMember) => teamMember.team === team.name
          )}
        />
      ))}
    </div>
  );
}

export default App;
