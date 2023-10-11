import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LogInPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { UserInfoPage } from './pages/UserInfoPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
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