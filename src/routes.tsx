import { createBrowserRouter, Navigate } from "react-router-dom"
import Timeline from "./pages/timeline"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/timeline" />
    },
    {
        path: "/timeline",
        element: <Timeline />
    },
    // TODO: add form page
])