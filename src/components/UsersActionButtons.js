import { useUsers } from "../UsersContext";
import { useState } from "react";
export default function UsersActionButtons({
  cred,
  delUser,
  setDelUser,
  index,
}) {
  const { setSkills, setInfo, setEditedObj, editedObj, clear } = useUsers();

  const sendInfoToManage = () => {
    const info = {
      name: cred.name,
      surname: cred.surname,
      salary: cred.salary,
    };
    setInfo(info);
    setSkills({ ...cred.skills });
    setEditedObj(cred);
  };

  const editingButton = () => {
    editedObj !== cred ? sendInfoToManage() : clear();
  };

  return (
    <td>
      <button
        onClick={() => {
          delUser !== "" ? setDelUser("") : setDelUser(index);
        }}
      >
        Del
      </button>
      <button onClick={() => editingButton()}>Edit</button>
    </td>
  );
}
