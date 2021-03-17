import './App.css';
import Navbar from './components/layouts/Navbar';
import Tab from './components/layouts/Tab';
import Piechart from './components/Piechart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Piechart/> */}
      <Tab/>
    </div>
  );
}

export default App;
