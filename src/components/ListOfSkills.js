export default function ListOfSkills({ skills, setSkills = null }) {
  
  const delSkill = (key) => {
    setSkills((oldSkills) => {
      let tmp = { ...oldSkills };
      delete tmp[key];
      return tmp;
    });
  };
  
  return (
    <ul className="ListOfSkills">
      {Object.keys(skills).map((key) => (
        <li className="skillItem" key={key}>
          {key}: {skills[key]}
          {setSkills !== null ? (
            <button onClick={() => delSkill(key)}>Del</button>
          ) : (
            <></>
          )}
        </li>
      ))}
    </ul>
  );
}
