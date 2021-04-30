import ToolbarRow from '../../components/Spreadsheet/ToolbarRow';

function Toolbar({ children }) {
  return (
    <ToolbarRow>
      {children}
    </ToolbarRow>
  );
}

export default Toolbar;
