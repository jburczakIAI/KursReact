export default function UsersInputs({ setValue, value, keyToSet }) {

  const getInputType = (keyToSet) =>
    ["salary", "skill"].includes(String(keyToSet)) ? "number" : "text";

  const changeValue = (event) => {
    const { value } = event.target;
    setValue((old) => ({ ...old, ...{ [keyToSet]: value } }));
  };
  
  return (
    <>
      <label> {keyToSet}: </label>
      <input
        type={getInputType(keyToSet)}
        value={value[keyToSet]}
        onChange={changeValue}
      />
    </>
  );
}
