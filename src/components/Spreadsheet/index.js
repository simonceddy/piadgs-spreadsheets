import RenderCell from './RenderCell';

function Spreadsheet({ columns = [], rows = [] }) {
  // console.log(rows);

  return (
    <div className="p-2 overflow-scroll flex-1 w-full">
      <table>
        <thead>
          <tr>
            <th className="p-0.5">Row</th>
            {columns.map(({ name, key }) => (
              <th className="p-0.5" key={`spreadsheet-header-${key}`}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((data, id) => (
            <tr key={`spreadsheet-${id}`}>
              <td id={`spreadsheet-${id}-row`}>{id}</td>
              {columns.map(({ key }) => (
                <RenderCell key={key} id={key} value={data[key]} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Spreadsheet;
