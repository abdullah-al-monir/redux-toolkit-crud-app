import React from "react";
import Title from "../../components/Title";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BooksSlice";
const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  console.log(books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <Title heading={"List of Books"} />
      <div className="max-w-screen-xl px-5 lg:px-10 mx-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-center">Title</th>
              <th className="py-2 px-4 border-b text-center">Author</th>
              <th className="py-2 px-4 border-b text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, author, title } = book;
                return (
                  <tr key={id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b text-left">{id}</td>
                    <td className="py-2 px-4 border-b text-center">{title}</td>
                    <td className="py-2 px-4 border-b text-center">{author}</td>
                    <td className="py-2 px-4 border-b text-right">
                      <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">
                        <Link to="/edit-book" state={{ title, author, id }}>
                          Edit
                        </Link>
                      </button>
                      <button
                        onClick={() => handleDelete(id)}
                        className="bg-red-500 text-white py-1 px-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksView;
