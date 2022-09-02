import UsersInputs from "./UsersInputs";
import ManageSkills from "./ManageSkills";
import { useUsers } from "../UsersContext";

export default function ManageUser() {
  
  const {
    setUsers,
    skills,
    setInfo,
    info,
    editedObj,
    clear,
  } = useUsers();

  const saveUser = () => {

    const newUserObject = {
      name: info.name,
      surname: info.surname,
      skills: skills,
      salary: parseFloat(info.salary),
    };

    if (!editedObj) setUsers((oldObject) => [...oldObject, newUserObject]);
    else {
      setUsers((oldObject) =>
        oldObject.map((element) => (element === editedObj ? newUserObject : element))
      );
    }
    clear();
  };

  return (
    <>
      <h1>Manage users</h1>
      <div className="usersInfo">
        {Object.keys(info).map((key) => (
          <UsersInputs
            key={key}
            setValue={setInfo}
            value={info}
            keyToSet={String(key)}
          />
        ))}
      </div>
      <ManageSkills />
      <button onClick={() => saveUser()}>Save user</button>
    </>
  );
}
