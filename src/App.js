import banner from './images/banner.jpg'
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App bg-danger">
      <NavBar />
        <div className='row m-0'>
        <img src={banner} className='img-fluid p-0' alt='banner parking las praderas'/>
        </div>
    </div>
  );
}

export default App;
