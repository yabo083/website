import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Students</h1>
      <Student age="20" isStudent={true} />
      <Student name="Jane" age="22" />
    </div>
  );
}

export default App;
