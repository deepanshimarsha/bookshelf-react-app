import { useContext, createContext, useReducer, useEffect } from "react";
import { books } from "../db/books";
import { reducer } from "../reducer";

const BookContext = createContext(null);
const BookContextProvider = ({ children }) => {
  const initialState = {
    allBooks: books,
    read: books.filter(({ category }) => category === "read"),
    currentlyReading: books.filter(
      ({ category }) => category === "currently reading"
    ),
    wantToRead: books.filter(({ category }) => category === "want to read"),
    searchInput: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    dispatch({ type: "FILTER_BY_TITLE" });
  }, [state.searchInput]);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

const useBookContext = () => useContext(BookContext);
export { useBookContext, BookContextProvider };
