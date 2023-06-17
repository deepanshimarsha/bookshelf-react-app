import { useBookContext } from "../context/BookContext";
export default function BookCard(book) {
  const { title, author, image, category, id } = book;
  const { dispatch } = useBookContext();
  return (
    <div class="card" style={{ width: "12rem" }}>
      <img src={image} class="card-img-top" alt="book" />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{author}</p>
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
          onChange={(e) => {
            console.log(e.target.value);
            dispatch({ type: "MOVE", category: e.target.value, id: id });
          }}
        >
          <option selected>category</option>
          <option disabled>Move to...</option>
          <option value="read">
            <div> {category === "read" ? "✔" : " "}</div>
            <div>read</div>
          </option>
          <option value="currently reading">
            <div> {category === "currently reading" ? "✔" : " "}</div>
            <div>currently reading</div>
          </option>
          <option value="want to read">
            <div> {category === "want to read" ? "✔" : " "}</div>
            <div>want to read</div>
          </option>
          <option value="none">
            <div></div>
            <div>none</div>
          </option>
        </select>
      </div>
    </div>
  );
}
