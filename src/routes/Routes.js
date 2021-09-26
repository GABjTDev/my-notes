import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Main";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:tech" component={Main} />
        </Switch>
    )
}

export default Routes
