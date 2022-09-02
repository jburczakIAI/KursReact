export default function RadioDots(optionsArray, setProperty) {
  return (
    <div id="sort_radio">
      {optionsArray.map((val) => (
        <span key={val}>
          <input
            type="radio"
            value={val}
            name="sort_radio_check"
            defaultChecked={optionsArray[0] === val ? true : false}
            onChange={() => setProperty(val)}
          />
          {val}
        </span>
      ))}
    </div>
  );
}
