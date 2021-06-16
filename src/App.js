import Header from './components/Header'
import Tasks from './components/Tasks'

const name = 'Ryan'

function App() {
  return (
    <div className="container">
      <Header greeting='Welcome' name={name}/>
      <Tasks />
    </div>
  );
}

export default App;
