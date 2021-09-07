import logo from './logo.svg';
import './App.css';

function App() {
  const blogArr = [
    {
      title: 'Title1',
      description: 'This is just random text'
    },
    {
      title: 'Title2',
      description: 'This is just random text'
    },
    {
      title: 'Title3',
      description: 'This is just random text'
    }
  ]

  const obj1 = {
    title: 'Object1',
    description: 'This is just random text object'
  }

  const obj2 = {
    title: 'Object2',
    description: 'This is just random text object'
  }

  const blogElements =  {
    // margin:16px,

  }


  return (
    <div className="App" style = {
      {
        margin: '16px',
        Padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px #ccc',
        background: 'Black',
        color: 'white'
      }
    }>
      <h1>Array elements: {blogArr[0].title}</h1>
      <h3>This is a test</h3>
      <h2>Object elements: {obj1.title}</h2>
      <hr />
      <h1>Array elements: {blogArr[0].title}</h1>
      <h3>This is a test</h3>
      <h2>Object elements: {obj1.title}</h2>
      <hr />
      <h1>Array elements: {blogArr[0].title}</h1>
      <h3>This is a test</h3>
      <h2>Object elements: {obj1.title}</h2>
      <hr />
    </div>
  );
}

export default App;
