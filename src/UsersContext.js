import { createContext, useContext, useState } from "react";
import { usersDB } from "./helpers/dataSets/usersDB";

const usersCtx = createContext({});

export default function UsersProvider({ children }) {

  const clear = () => {
    setEditedObj(null);
    setSkills({});
    setInfo({ name: "", surname: "", salary: "" });
  };

  const [users, setUsers] = useState(usersDB);
  const [skills, setSkills] = useState({});
  const [info, setInfo] = useState({ name: "", surname: "", salary: "" });
  const [editedObj, setEditedObj] = useState(null);

  return (
    <usersCtx.Provider
      value={{
        users,
        setUsers,
        skills,
        setSkills,
        info,
        setInfo,
        editedObj,
        setEditedObj,
        clear,
      }}
    >
      {children}
    </usersCtx.Provider>
  );
}

export const useUsers = () => useContext(usersCtx);

