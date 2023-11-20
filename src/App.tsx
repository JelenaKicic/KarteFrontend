import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from "react"
import Ticket from "./features/tickets/Ticket"
import AddTicket from "./features/tickets/AddTicket"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ticket />,
  },
])
function App() {
  return (
    <div className="App h-full">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
