import Theme from './library/theme/theme';
import GlobalStyles from './library/globalStyles/globalStyles';

import Input from './components/ui/input/input';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <div>Page</div>
      <Input
        placeholder={'Input 1'}
        onChange={(value) => console.log(value)} />
      <Input
        placeholder={'Input 2'}
        onChange={(value) => console.log(value)} />
      <Input
        placeholder={'Input 3'}
        onChange={(value) => console.log(value)} />
    </Theme>
  );
}

export default App;
