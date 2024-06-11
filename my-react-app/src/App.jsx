import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "cherry", calories: 77 },
    { id: 4, name: "date", calories: 23 },
    { id: 5, name: "elderberry", calories: 73 },
  ];

  const vegetables = [
    { id: 1, name: "artichoke", calories: 60 },
    { id: 2, name: "broccoli", calories: 55 },
    { id: 3, name: "carrot", calories: 41 },
    { id: 4, name: "daikon", calories: 18 },
    { id: 5, name: "endive", calories: 17 },
  ];

  return (
    <div>{fruits.length > 0 && <List item={fruits} category="Fruits" /> }
    {vegetables.length > 0 && <List item={vegetables} category="Vegetables" />}
    </div>
  );
}

export default App;
