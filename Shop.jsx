import { useState } from "react";
import { books } from "../data/books";
import BookCard from "../components/BookCard";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", "Fiction", "Self-Help", "Science"];

  const filtered = books.filter(b =>
    (category === "All" || b.category === category) &&
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input placeholder="Search books..." value={search} onChange={e => setSearch(e.target.value)} />
      {categories.map(cat => <button key={cat} onClick={() => setCategory(cat)}>{cat}</button>)}
      <div className="book-grid">
        {filtered.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
}