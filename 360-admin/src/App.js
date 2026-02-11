// import logo from './logo.svg';
import './App.css';
import Routing from './Components/Routing/Routing';
import Logo from './Assests/app_logo.png'
function App() {
  return (
    <div>
    <div className="App">
      <Routing/>
    </div>
    <div>
      <div className='text-smaller-device'>
        <div className='smaller-device-logo'>
         <img  src={Logo} alt='360-Kitchen'/>
        </div>
       <h1>"Optimized for desktop viewing. Please use a larger device."</h1>
      </div>
    </div>

    </div>
  );
}
export default App;
