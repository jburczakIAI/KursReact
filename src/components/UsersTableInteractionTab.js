import { useState } from "react";
import ConfirmationButtons from "./ConfirmationButtons";
import RadioDots from "./RadioDots";
import { useUsers } from "../UsersContext";
export default function UsersTableInteractionTab({ setTableSort }) {

  const { setUsers } = useUsers();
  const sortingOptions = ["off", "asc", "desc"];
  const [delTable, setDelTable] = useState(false);
  
  return (
    <>
      <button
        onClick={() => {
          delTable ? setDelTable(false) : setDelTable(true);
        }}
      >
        Drop table
      </button>
      <ConfirmationButtons
        showOptions={delTable}
        onClickY={() => {
          setUsers([]);
          setDelTable(false);
        }}
        onClickN={() => setDelTable(false)}
      />
      {RadioDots(sortingOptions, setTableSort)}
    </>
  );
}
