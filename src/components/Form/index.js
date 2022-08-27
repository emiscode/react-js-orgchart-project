import "./Form.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [picture, setPicture] = useState("");
  const [team, setTeam] = useState(props.teams[0]);

  const saveForm = (event) => {
    event.preventDefault();
    props.onSaveTeamMember({ name, position, picture, team });
    setName("");
    setPicture("");
    setPosition("");
    setTeam(props.teams[0]);
  };

  return (
    <section className="form">
      <form onSubmit={saveForm}>
        <h2>Fill out the form to create the card for the team member</h2>
        <TextField
          label="Name"
          value={name}
          required={true}
          placeholder="Type your name"
          onValueChanged={(value) => setName(value)}
        />
        <TextField
          label="Position"
          value={position}
          required={true}
          placeholder="Type your position"
          onValueChanged={(value) => setPosition(value)}
        />
        <TextField
          label="Picture"
          value={picture}
          placeholder="Type your picture url"
          onValueChanged={(value) => setPicture(value)}
        />
        <Dropdown
          label="Team"
          value={team}
          items={props.teams}
          required={true}
          onValueChanged={(value) => setTeam(value)}
        />
        <Button>Create card</Button>
      </form>
    </section>
  );
};

export default Form;
