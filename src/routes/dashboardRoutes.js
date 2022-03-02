import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const routes = [
    {
        path: 'categories',
        component: lazy(() => import('../pages/content/categories'))
    }
]

export default function DashboardRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    routes.map((route, index) => (
                        <Route key={index} exact={route.exact} path={route.path} element={<route.component />} />
                    ))
                }
            </Routes>
        </Suspense>
    )
}