import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from "./views/home/home"
import Form from "./views/form/form"
import Detail from './views/detail/detail';


const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Switch> 
          <Route exact path="/home" component={Home} />
          <Route  path="/home/:id" component={Detail} />
          <Route  path="/" component={Form} />
      </Switch>
      </div>
      </BrowserRouter>
  );
};


export default App;
