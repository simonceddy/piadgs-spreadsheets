import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spreadsheet from '../../components/Spreadsheet';
import { titleColumns } from '../../shared/columns';
import { fetchTitles, sortTitles } from '../../store/actions';

function TitlesSpreadsheet({
  rows = [],
  fetchData = () => null,
  sortDirection,
  sortKey,
  sortRows
}) {
  console.log(/* rows[0], */sortKey, sortDirection);

  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    if (!loadedData) {
      Promise.resolve(fetchData())
        .then(() => setLoadedData(true));
    }
  }, [loadedData]);

  if (!loadedData) {
    return <div className="m-auto text-xl">Loading Titles...</div>;
  }

  return (
    <Spreadsheet
      sortDirection={sortDirection}
      sortKey={sortKey}
      handleSort={sortRows}
      columns={titleColumns}
      rows={rows}
    />
  );
}

const mapStateToProps = (state) => ({
  rows: state.titles.spreadsheet.rows,
  // page: state.titles.spreadsheet.page,
  sortKey: state.titles.spreadsheet.sortKey,
  sortDirection: state.titles.spreadsheet.sortDirection,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchTitles()),
  sortRows: (key) => dispatch(sortTitles(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(TitlesSpreadsheet);
