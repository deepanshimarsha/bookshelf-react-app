import BookCard from "../component/BookCard";
import { useBookContext } from "../context/BookContext";
export default function Bookshelf() {
  const { state } = useBookContext();

  return (
    <div className="bookshelf-main">
      <div className="containers">
        <h2>Read</h2>
        <hr></hr>
        <div className="category">
          {state.read.map((book) => {
            return <BookCard {...book} />;
          })}
        </div>
      </div>
      <div className="containers">
        <h2>Currently reading</h2>
        <hr></hr>
        <div className="category">
          {state.currentlyReading.map((book) => {
            return <BookCard {...book} />;
          })}
        </div>
      </div>
      <div className="containers">
        <h2>Want to read</h2>
        <hr></hr>
        <div className="category">
          {state.wantToRead.map((book) => {
            return <BookCard {...book} />;
          })}
        </div>
      </div>
    </div>
  );
}
