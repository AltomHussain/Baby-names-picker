
import './App.css';
import DisplayNames from './components/DisplayNames';
import babyNames from "./components/babyNames.json"
function App() {
  console.log(babyNames)
  return (
    <div className="App">
  <DisplayNames babyNames={babyNames}/>
    </div>
  );
}

export default App;
