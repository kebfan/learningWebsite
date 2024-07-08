import { createBrowserRouter } from 'react-router-dom';
import _ from 'lodash'
import App from '../App';
import Loginpage from '../pages/loginpage/Login';
import Register from '../pages/registerpage/Register';
import Home from '../pages/homepage/Home';
import Admin from '../pages/adminpage/admin';
import Lesson from '../pages/lessonpage/lesson';
import Unit from '../pages/unitpage/unit';
import Handler from './handler';
import LessonEdit from '../pages/lessonEdit/lessonEdit';
import React from 'react';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Handler Component={Home} FallbackComponent={Home} />
            },
            {
                path: '/lesson',
                element: <Handler Component={Lesson} FallbackComponent={Loginpage} />
            },

            {
                path: '/login',
                element: <Handler Component={Loginpage} FallbackComponent={Loginpage} />
            },
            {
                path: '/register',
                element: <Handler Component={Register} FallbackComponent={Register} />
            },
            {
                path: '/unit',
                element: <Handler Component={Unit} FallbackComponent={Loginpage} />
            },
            {
                path: '/admin',
                element: <Handler Component={Admin} FallbackComponent={Home} admin={true} />
            },
            {
                path: '/admin/lesson',
                element: <Handler Component={LessonEdit} FallbackComponent={Loginpage} />
            },

        ]
    }
];
const router = createBrowserRouter(routes);

export default router;
