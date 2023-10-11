import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LogInPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { UserInfoPage } from './pages/UserInfoPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <UserInfoPage />
                </Route>
                <Route path="/login">
                    <LogInPage />
                </Route>
                <Route path="/signup">
                    <SignupPage />
                </Route>
            </Switch>
        </Router>
    );
}