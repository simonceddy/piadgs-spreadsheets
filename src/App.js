import AppContainer from './components/Spreadsheet/AppContainer';
import TitlesSpreadsheet from './containers/Spreadsheets/TitlesSpreadsheet';
import Toolbar from './containers/Spreadsheets/Toolbar';
import Messages from './shared/containers/Messages';

function App() {
  return (
    <AppContainer>
      <Toolbar>
        <Messages />
      </Toolbar>
      <TitlesSpreadsheet />
    </AppContainer>
  );
}

export default App;
