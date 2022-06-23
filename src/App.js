import { Switch, Route } from "react-router-dom";
// Pages
import MainPage from "pages/MainPage";
import NotFound from "pages/NotFound";

const App = () => {
  return (
    <Switch>
      <Route exact path="/main" component={MainPage} />
      <Route component={NotFound} status={404} />
    </Switch>
  );
};

export default App;
