import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Person,
  useAddTicketMutation,
  useGetAllTicketsQuery,
  useResendTicketMutation,
} from "../../app/services/GuestsApi"
import AddTicket from "./AddTicket"

function Ticket() {
  const [filter, setFilter] = useState("")
  const { data, error, isLoading } = useGetAllTicketsQuery(filter)
  const [resendTicket] = useResendTicketMutation()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }
  return (
    <div className="flex justify-center w-full h-full pt-20 pb-20">
      <div className="flex flex-col w-full max-w-3xl px-20 md:px-0">
        <div className="w-full mr-auto mb-16">
          <AddTicket />
        </div>
        <div className="w-full ml-auto mb-4">
          <input
            className="appearance-none block ml-auto md:w-1/3 w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name"
            type="search"
            placeholder="Search"
            onChange={onChange}
          />
        </div>
        <table className="shadow-lg bg-white border-collapse">
          <thead>
            <tr>
              <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
              <th className="bg-blue-100 sm:table-cell hidden border text-left px-8 py-4">
                Email
              </th>
              <th className="bg-blue-100 sm:table-cell hidden border text-left px-8 py-4">
                City
              </th>
              <th className="bg-blue-100 sm:table-cell hidden border text-left px-8 py-4">
                Type
              </th>
              <th className="bg-blue-100 border text-left px-8 py-4">Resend</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              !isLoading &&
              data.map((item: Person) => (
                <tr
                  className="border hover:bg-gray-50 focus:bg-gray-300"
                  key={item.id}
                >
                  <td className="px-8 py-4">
                    {item.name} {item.surname}
                  </td>
                  <td className="px-8 sm:table-cell hidden py-4">
                    {item.email}
                  </td>
                  <td className="px-8 sm:table-cell hidden py-4">
                    {item.city}
                  </td>
                  <td className="px-8 sm:table-cell hidden py-4">
                    {item.type}
                  </td>
                  <td className="px-8 py-4">
                    <button
                      onClick={() => resendTicket(item.id)}
                      className="bg-transparent hover:bg-blue-300 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded"
                    >
                      Resend
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ticket
