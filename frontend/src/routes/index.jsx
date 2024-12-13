import AddTodos from "../components/commmon/AddTodos";
import MyTodos from "../components/commmon/MyTodos";
import AppLayOut from "../pages/AppLayOut";
import Home from "../pages/Home";

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/',
        element: <AppLayOut />,
        children: [
            {
                path: 'add-todos',
                element: <AddTodos />
            },
            {
                path: 'my-todos',
                element: <MyTodos />
            },
        ]
    },
    {
        path: '*',
        element: <h1>404 Not Found</h1>
    }
]