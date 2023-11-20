// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Person {
  id: number
  name: string
  surname: string
  city: string
  email: string
  type: string
}

export const guestsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  tagTypes: ["Ticket"],
  endpoints: (builder) => ({
    getAllTickets: builder.query({
      query: (filter: string) => `getall?filter=${filter}`,
      providesTags: ["Ticket"],
    }),
    addTicket: builder.mutation({
      query: (body) => ({
        url: `generate`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Ticket"],
    }),
    resendTicket: builder.mutation({
      query: (id: number) => ({
        url: `resend?id=${id}`,
        method: "PATCH",
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTicketsQuery, useAddTicketMutation, useResendTicketMutation } = guestsApi
