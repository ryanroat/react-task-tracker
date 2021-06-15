import Header from './components/Header'

const name = 'Ryan'

function App() {
  return (
    <div className="container">
      <Header greeting='Welcome' name={name}/>
    </div>
  );
}

export default App;
