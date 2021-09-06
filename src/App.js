// Dependencies
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Component
import CustomLayout from './components/CustomLayout';
import Home from './pages/Home';
import About from './pages/About'
import NotFound from './pages/NotFound'

// Assets
import 'antd/dist/antd.css';
import { routes } from './config';

const { home, about, repo, root } = routes

function App() {
  return (
    <BrowserRouter>
      <CustomLayout>
        <Switch>  
            <Route exact path={root} component={Home} />
            <Route exact path={repo} component={Home} />
            <Route exact path={home} component={Home} />
            <Route exact path={about} component={About} />
            <Route component={NotFound} />
        </Switch>
      </CustomLayout>
    </BrowserRouter>
  );
}

export default App;
