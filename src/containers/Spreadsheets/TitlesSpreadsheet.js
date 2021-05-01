import { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import Spreadsheet from '../../components/Spreadsheet';
import { titleColumns } from '../../shared/columns';
import { fetchTitles, sortTitles } from '../../store/actions';
import { paginate } from '../../util/paginate';

function TitlesSpreadsheet({
  rows = [],
  fetchData = () => null,
  sortDirection,
  sortKey,
  sortRows,
  pageNumber,
  perPage = 32
}) {
  // console.log(sortKey, sortDirection);
  const pages = useMemo(() => paginate(rows, perPage), [rows, perPage]);

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
      rows={pages[pageNumber - 1]}
    />
  );
}

const mapStateToProps = (state) => ({
  rows: state.titles.spreadsheet.rows,
  pageNumber: state.titles.spreadsheet.pageNumber,
  sortKey: state.titles.spreadsheet.sortKey,
  sortDirection: state.titles.spreadsheet.sortDirection,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchTitles()),
  sortRows: (key) => dispatch(sortTitles(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(TitlesSpreadsheet);
