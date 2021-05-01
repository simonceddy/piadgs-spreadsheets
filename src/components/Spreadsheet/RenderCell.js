import { useMemo } from 'react';
import { renderValue } from '../../shared/columns';

function RenderCell({ id, value }) {
  const rendered = useMemo(() => renderValue(id, value), [value]);

  return (
    <td id={`spreadsheet-cell-${id}`} className="border p-0.5">
      {rendered}
    </td>
  );
}

export default RenderCell;
