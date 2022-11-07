import { DefaultLayout } from './components/templates/DefaultLayout';
import { Home } from './pages/Home/Home';

const App = () => (
  <>
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  </>
);

export default App;
