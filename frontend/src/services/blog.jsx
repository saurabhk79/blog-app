import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";

const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_BASE_URL + "/blog",
    prepareHeaders: {
      authorization: "Bearer <Token>",
    },
  }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => "/",
    }),
    getUserBlogs: builder.query({
      query: () => "/user/blog",
    }),
    getBlogById: builder.query({
      query: (id) => "/" + toString(id),
    }),

    // makeBlog : builder.mutation()
  }),
});

export const { useGetAllBlogsQuery,useGetBlogByIdQuery, useGetUserBlogsQuery } = blogApi;

export default blogApi;
