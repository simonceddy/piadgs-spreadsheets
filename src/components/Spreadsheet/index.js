import RenderCell from './RenderCell';

function Spreadsheet({
  columns = [],
  rows = [],
  handleSort,
  sortKey,
  sortDirection
}) {
  // console.log(rows);
  const directionChar = () => (sortDirection === 'ASC' ? '▲' : '▼');

  return (
    <div className="p-2 overflow-scroll flex-1 w-full">
      <table>
        <thead>
          <tr>
            <th
              className="p-0.5"
            >
              Row
            </th>
            {columns.map(({ name, key }) => (
              <th
                key={`spreadsheet-header-${key}`}
                onClick={() => handleSort(key)}
                className={`${key === sortKey ? 'underline' : ''} p-0.5`}
              >
                {name}{key === sortKey ? directionChar() : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((data, id) => (
            <tr key={`spreadsheet-${id}`}>
              <td id={`spreadsheet-${id}-row`} className="border p-0.5">{id}</td>
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
