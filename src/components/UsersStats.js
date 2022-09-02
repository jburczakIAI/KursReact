import { useState, useEffect } from "react";
import ListOfSkills from "./ListOfSkills";
import { useUsers } from "../UsersContext";
export default function UsersStats() {
  
  const { users } = useUsers();
  const [sumOfSalaries, setSumOfSalaries] = useState("");
  const [listOfSkillsTmp, setListOfSkillsTmp] = useState({});

  useEffect(() => {
    setListOfSkillsTmp({}); //strictmode wywola dwukrotnie render wiec resetuje zeby tylko raz sumowalo
    let sumTmp = 0;
    users.forEach((element) => {
      sumTmp += parseFloat(element.salary);
      Object.keys(element.skills).forEach((keyTmp) => {
        setListOfSkillsTmp((prevSkills) => {
          return {
            ...prevSkills,
            [keyTmp]:
              typeof prevSkills[keyTmp] !== "undefined"
                ? prevSkills[keyTmp] + 1
                : 1,
          };
        });
      });
    });
    setSumOfSalaries(sumTmp);
  }, [users]);

  return (
    <>
      {users[0] ? (
        <>
          <h5>Sum of salaries: {sumOfSalaries}</h5>
          <h5>Sum of users with each skill:</h5>
          <ListOfSkills skills={listOfSkillsTmp} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
