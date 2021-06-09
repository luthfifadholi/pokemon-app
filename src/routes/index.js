import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from '../pages/Home/components/Container/index.jsx'
import Detail from '../pages/Detail/components/Container/index.jsx'
import MyPokemon from '../pages/MyPokemon/components/Container/index.jsx'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pokemon/:id">
        <Detail />
      </Route>
      <Route path="/mypokemon">
        <MyPokemon />
      </Route>
    </Switch>
  );
}

export default Routes;
