// Dependencies
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Component
import Home from './pages/Home';
import CustomLayout from './components/CustomLayout';


// Assets
import 'antd/dist/antd.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomLayout>
          <Route exact path="/" component={Home} />
        </CustomLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
