import './App.css';
import SideBar from './components/SideBar';
import SideBarData from './components/SideBarData';

function App() {
  // const blogArr = [
  //   {
  //     title: 'Title1',
  //     description: 'This is just random text'
  //   },
  //   {
  //     title: 'Title2',
  //     description: 'This is just random text'
  //   },
  //   {
  //     title: 'Title3',
  //     description: 'This is just random text'
  //   }
  // ]

  // const obj1 = {
  //   title: 'Object1',
  //   description: 'This is just random text object'
  // }

  // const obj2 = {
  //   title: 'Object2',
  //   description: 'This is just random text object'
  // }

  // const blogElements =  {
  //   // margin:16px,

  // }


  return (
    <div className="App" style = {
      {
        // margin: '16px',
        // Padding: '16px',
        // borderRadius: '5px',
        // boxShadow: '0 2px 5px #ccc',
        // background: 'Black',
        // color: 'white'
      }
      }>
      
      <SideBar/>
    </div>
  );
}

export default App;

