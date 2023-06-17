import { books } from "./db/books";
export const reducer = (state, action) => {
  switch (action.type) {
    case "MOVE": {
      let filteredBook = state.allBooks.slice();

      filteredBook = filteredBook.map((book) => {
        if (book.id === action.id) {
          console.log("id", action.id);
          return { ...book, category: action.category };
        } else {
          return book;
        }
      });
      console.log("filtered", filteredBook);
      const readBooks = filteredBook.filter(
        ({ category }) => category === "read"
      );
      const currentlyReadingBooks = filteredBook.filter(
        ({ category }) => category === "currently reading"
      );
      const wantToReadBooks = filteredBook.filter(
        ({ category }) => category === "want to read"
      );

      return {
        ...state,
        allBooks: filteredBook,
        read: readBooks,
        currentlyReading: currentlyReadingBooks,
        wantToRead: wantToReadBooks,
      };
    }

    case "SET_READ": {
      const books = state.allBooks.filter(
        ({ category }) => category === "read"
      );
      return {
        ...state,
        read: books,
      };
    }
    case "SET_CURRENTLY_READING": {
      const books = state.allBooks.filter(
        ({ category }) => category === "currently reading"
      );
      return {
        ...state,
        currentlyReading: books,
      };
    }
    case "SET_WANT_TO_READ": {
      const books = state.allBooks.filter(
        ({ category }) => category === "want to read"
      );
      return {
        ...state,
        wantToRead: books,
      };
    }
    case "SET_SEARCH_INPUT": {
      return {
        ...state,
        searchInput: action.data,
      };
    }
    case "FILTER_BY_TITLE": {
      let filteredBook = books.slice();
      if (state.searchInput !== "") {
        filteredBook = filteredBook.filter(({ title }) =>
          title.toLowerCase().includes(state.searchInput.toLowerCase())
        );
      }
      return {
        ...state,
        allBooks: filteredBook,
      };
    }
    default:
      throw new Error("Unknown action type");
  }
};
