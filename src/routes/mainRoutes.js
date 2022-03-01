import React, { lazy, Suspense } from 'react';
import {
    Route,
    Navigate,
    BrowserRouter as Router,
    Routes as Switch,
    Outlet
} from 'react-router-dom';

import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './constants';

const publicRoutes = [
    {
        path: PUBLIC_ROUTES.LOGIN,
        component: lazy(() => import('../pages/login/login'))
    }
]

const privateRoutes = [
    {
        path: PRIVATE_ROUTES.DASHBOARD,
        component: lazy(() => import('../pages/dashboard/dashboard'))
    }
]

function PrivateRoute() {
    const isLoggedIn = true;

    return (
        isLoggedIn ? <Outlet /> :
            <Navigate
                to={PUBLIC_ROUTES.LOGIN} />
    )
}

function Routes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Switch>
                    {
                        privateRoutes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact} element={<PrivateRoute />}>
                                <Route path={route.path} exact={route.exact} element={<route.component />} />
                            </Route>
                        ))
                    }
                    {
                        publicRoutes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact} element={<route.component />} />
                        ))
                    }
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routes;