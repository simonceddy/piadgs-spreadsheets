import { useMemo } from 'react';
import { renderValue } from '../../shared/columns';

function RenderCell({ id, value }) {
  const rendered = useMemo(() => renderValue(id, value), [value]);

  return (
    <td id={`spreadsheet-cell-${id}`}>
      {rendered}
    </td>
  );
}

export default RenderCell;
