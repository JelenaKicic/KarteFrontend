import React from "react"

import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useAddTicketMutation } from "../../app/services/GuestsApi"

type FormValues = {
  name: string
  surname: string
  city: string
  email: string
  type: string
}

function AddTicket() {
  const [addTicket, result] = useAddTicketMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit = handleSubmit((data, e) => {
    addTicket(data)

    if (e) e.target.reset()
  })

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="flex md:flex-row flex-col mb-3">
        <div className="w-full mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            {...register("name", { required: "required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-xs italic" role="alert">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="w-full md:ml-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            {...register("surname", { required: "required" })}
          />
          {errors.surname && (
            <span className="text-red-500 text-xs italic" role="alert">
              {errors.surname.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap mb-3">
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="text"
            placeholder="email@gmail.com"
            {...register("email", {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs italic" role="alert">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex md:flex-row flex-col mb-3">
        <div className="w-full mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            City
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Banja Luka"
            {...register("city", { required: "required" })}
          />
          {errors.city && (
            <span className="text-red-500 text-xs italic" role="alert">
              {errors.city.message}
            </span>
          )}
        </div>
        <div className="w-full md:ml-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Type
          </label>
          <div className="relative">
            <select
              {...register("type")}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option value="FULL">Full</option>
              <option value="DAY">Day</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-left">
        <input
          type="submit"
          value="Add"
          className="bg-transparent hover:bg-blue-300 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded ml-auto"
        />
      </div>
    </form>
  )
}

export default AddTicket
