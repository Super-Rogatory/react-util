function App() {
  const name = 'Chukwudi';
  const x = true;
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>Hi {x ? name : 'Who?'}</h2>
    </div>
    
  );
}

export default App;
