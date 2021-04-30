import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spreadsheet from '../../components/Spreadsheet';
import { titleColumns } from '../../shared/columns';
import { fetchTitles } from '../../store/actions';

function TitlesSpreadsheet({ rows = [], fetchData = () => null }) {
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
    <Spreadsheet columns={titleColumns} rows={rows} />
  );
}

const mapStateToProps = (state) => ({
  rows: state.titles.spreadsheet.rows
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchTitles())
});

export default connect(mapStateToProps, mapDispatchToProps)(TitlesSpreadsheet);
