import { useState } from "react";
import ListOfSkills from "./ListOfSkills";
import ConfirmationButtons from "./ConfirmationButtons";
import UsersActionButtons from "./UsersActionButtons";
import { useUsers } from "../UsersContext";

export default function UsersBody({ tableSort }) {
  
  const sortUsersList = () => {
    return [...users].sort((a, b) => {
      if (tableSort === "asc") {
        return a["salary"] - b["salary"];
      } else if (tableSort === "desc") {
        return b["salary"] - a["salary"];
      } else return 0;
    });
  };

  const deleteUser = (UserObj, setUsers) => {
    setUsers((usersTmp) => usersTmp.filter((data) => data !== UserObj));
    setDelUser("");
  };

  const { users, setUsers } = useUsers();
  const [delUser, setDelUser] = useState("");

  return (
    <>
      {sortUsersList().map((cred, index) => (
        <tr key={`${cred.name}_${cred.surname}_${index}`}>
          {Object.values(cred).map((val) =>
            typeof val !== "object" ? (
              <td key={val}>{val}</td>
            ) : (
              <td key={val}>
                <ListOfSkills skills={cred.skills} />
              </td>
            )
          )}
          <UsersActionButtons
            cred={cred}
            delUser={delUser}
            index={index}
            setDelUser={setDelUser}
          />
          <td>
            <ConfirmationButtons
              showOptions={delUser === index}
              onClickY={() => deleteUser(cred, setUsers)}
              onClickN={() => setDelUser("")}
            />
          </td>
        </tr>
      ))}
    </>
  );
}
