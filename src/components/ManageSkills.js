import { useState } from "react";
import ListOfSkills from "./ListOfSkills";
import UsersInputs from "./UsersInputs";
import { useUsers } from "../UsersContext";

export default function ManageSkills() {

  const [skill, setSkill] = useState({ skillValue: "", keyValue: "" });
  const { skills, setSkills } = useUsers();
  
  const addSkill = () => {
    setSkills((oldObject) =>
      Object.assign(oldObject, { [skill.keyValue]: skill.skillValue })
    );
    setSkill({ skillValue: "", keyValue: "" });
  };

  return (
    <div>
      <ListOfSkills skills={skills} setSkills={setSkills} />
      <UsersInputs setValue={setSkill} value={skill} keyToSet={"keyValue"} />
      <UsersInputs setValue={setSkill} value={skill} keyToSet={"skillValue"} />
      <button onClick={() => addSkill()}>Add skill</button>
    </div>
  );
}
