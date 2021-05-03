import logo from './logo.svg';
import './App.css';
//   importing Components
import CardView from "./View/CardView/cardView";
import ResponsiveMasonry from "./Components/ResponsiveMasonry/responsiveManosry";
//   importing css files
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
        <CardView/>
        <ResponsiveMasonry/>
    </div>
  );
}

export default App;
