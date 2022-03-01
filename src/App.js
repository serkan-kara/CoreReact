import Theme from './library/theme/theme';
import GlobalStyles from './library/globalStyles/globalStyles';
import MainRoutes from './routes/mainRoutes';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <MainRoutes />
    </Theme>
  );
}

export default App;
