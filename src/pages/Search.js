import BookCard from "../component/BookCard";
import { useBookContext } from "../context/BookContext";
export default function Search() {
  const { state, dispatch } = useBookContext();
  return (
    <div className="library">
      <div class="input-group rounded search-bar">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH_INPUT", data: e.target.value })
          }
        />
      </div>
      <div className="book-container">
        {state.allBooks.map((book) => {
          return <BookCard {...book} />;
        })}
      </div>
    </div>
  );
}
