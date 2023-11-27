import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from "./views/home/home"
import Create from "./views/create/create"
import Detail from './views/detail/detail';


const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Switch> 
          <Route exact path="/home" component={Home} />
          <Route  path="/home/:id" component={Detail} />
          <Route  path="/create" component={Create} />
      </Switch>
      </div>
      </BrowserRouter>
  );
};


export default App;
