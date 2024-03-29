import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";

const selectToken = state => state.auth.token;

const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_BASE_URL + "/blog",
    prepareHeaders: (headers, { getState }) => {
      const token = selectToken(getState());
      
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      
      return headers;
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
      query: (id) => "/" + id,
    }),

    makeBlog: builder.mutation({
      query: (blogData) => ({
        url: "/",
        method: "POST",
        body: blogData,
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...blogData }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: blogData,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: "/" + id,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useGetUserBlogsQuery,
  useDeleteBlogMutation,
  useMakeBlogMutation,
  useUpdateBlogMutation,
} = blogApi;

export default blogApi;
