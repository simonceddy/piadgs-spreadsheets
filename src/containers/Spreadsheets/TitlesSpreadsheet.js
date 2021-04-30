import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spreadsheet from '../../components/Spreadsheet';
import { fetchTitles } from '../../store/actions';

const columns = [
  { key: 'title', name: 'Title' },
  // { key: 'authors', name: 'Authors' },
  // { key: 'subjects', name: 'Subjects' },
  { key: 'isbn', name: 'ISBN' },
  { key: 'callNumber', name: 'Call Number' },
  { key: 'cost', name: 'Cost' },
  { key: 'imprint', name: 'Imprint' },
];

function TitlesSpreadsheet({ rows = [], fetchData = () => null }) {
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    if (!loadedData) {
      Promise.resolve(fetchData())
        .then(() => setLoadedData(true));
    }
  }, [rows]);

  return (
    <Spreadsheet columns={columns} rows={rows} />
  );
}

const mapStateToProps = (state) => ({
  rows: state.titles.spreadsheet.rows
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchTitles())
});

export default connect(mapStateToProps, mapDispatchToProps)(TitlesSpreadsheet);
