import Theme from './library/theme/theme';
import GlobalStyles from './library/globalStyles/globalStyles';

import Input from './components/ui/input/input';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <div>Page</div>
      <Input />
    </Theme>
  );
}

export default App;
