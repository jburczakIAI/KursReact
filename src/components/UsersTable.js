import { useState } from "react";
import UsersTableInteractionTab from "./UsersTableInteractionTab";
import UsersBody from "./UsersBody";
import TableThread from "./TableThread";
import { useUsers } from "../UsersContext";
export default function UsersTable() {
  
  const { users } = useUsers();

  const [tableSort, setTableSort] = useState("off");

  if (users[0]) {
    return (
      <>
        <h1>Users list</h1>
        <UsersTableInteractionTab setTableSort={setTableSort} />
        <table className="usersTable">
          <TableThread sample={users[0]} />
          <tbody>
            <UsersBody tableSort={tableSort} />
          </tbody>
        </table>
      </>
    );
  } else {
    return <></>;
  }
}
