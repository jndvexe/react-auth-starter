import { sign } from 'jsonwebtoken';
import { signUpRoute } from './signUpRoute';
import { logInRoute } from './logInRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';

export const routes = [
    logInRoute,
    signUpRoute,
    testRoute,
    updateUserInfoRoute,
];
