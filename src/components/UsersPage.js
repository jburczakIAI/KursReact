import ManageUser from "./ManageUser";
import UsersStats from "./UsersStats";
import UsersTable from "./UsersTable";
import UsersProvider from "../UsersContext";

export default function UsersPage() {

  const centerDiva = { //tak wiem ale to jedyne stylowanie w tym projekcie
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <UsersProvider>
      <div className="App" style={centerDiva}>
        <ManageUser />
        <UsersTable />
        <UsersStats />
      </div>
    </UsersProvider>
  );
}
