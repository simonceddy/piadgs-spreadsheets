function Spreadsheet({ columns = [], rows = [] }) {
  console.log(rows);

  return (
    <div className="p-2 overflow-scroll flex-1 w-full">
      <table>
        <thead>
          <tr>
            {columns.map(({ name, key }) => (
              <th className="p-2" key={`spreadsheet-header-${key}`}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((data, id) => (
            <tr key={`spreadsheet-${id}`}>
              {columns.map(({ key }) => (
                <td key={`spreadsheet-${id}-${key}`}>{data[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Spreadsheet;
