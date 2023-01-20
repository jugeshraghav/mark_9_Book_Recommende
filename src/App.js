import "./styles.css";
import { useState } from "react";
const BookList = {
  Coding: [
    { name: "Javascript- New way of thinking", type: "coding", rating: 4.5 },
    { name: "Coding Fundamentals", type: "coding", rating: 5 },
    { name: "Data Structures and Algorithms", type: "coding", rating: 4 }
  ],
  Health: [
    { name: "Eat Healthy", type: "Health", rating: 4.5 },
    { name: "Fitness Mantra", type: "Health", rating: 5 },
    { name: "Vegan: new lifestyle", type: "Health", rating: 4.5 }
  ],
  Fiction: [
    { name: "Gulliver's Travels", type: "Fiction", rating: 4.5 },
    { name: "Shaktiman", type: "Fiction", rating: 3 },
    { name: "New age Earth", type: "Fiction", rating: 5 }
  ]
};

export default function App() {
  const [Books, setBook] = useState(BookList.Coding);

  function clickEventHandler(event) {
    var text = BookList[event.target.innerHTML];
    setBook(text);
    console.log(text);
  }

  function showBookCard(book) {
    return (
      <>
        <div className="card">
          <h2>{book.name}</h2>
          <h3>Rating:{book.rating}</h3>
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <h1>Book Recommender</h1>
      <h2>Find out some books to read!</h2>
      <div>
        <button onClick={clickEventHandler}>Coding</button>

        <button onClick={clickEventHandler}>Health</button>

        <button onClick={clickEventHandler}>Fiction</button>
      </div>
      {Books?.map((book) => {
        return showBookCard(book);
      })}
    </div>
  );
}
