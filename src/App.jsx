import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SinglePost from './components/Single'
import Control from './Control'


const routes = createBrowserRouter([
    {
        path:'/',
        element:<Control />
    },
    {
        path:'/country/:id',
        element:<SinglePost />
    }
])

function App() {
    return (
        <RouterProvider router={routes}/>
    )
}

export default App