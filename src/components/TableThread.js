export default function TableThread({ sample }) {
  
  const cols = [...Object.keys(sample), "Action"];

  return (
    <thead>
      <tr>
        {cols.map((colVal) => (
          <th key={colVal}>{colVal}</th>
        ))}
      </tr>
    </thead>
  );
}
