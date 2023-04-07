import './App.css';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react';

function App() {
  const [search, setsearch] = useState('');
  return (
    <div className="App">
      <input type="text" placeholder="Search...." 
      onChange={(e)=>{setsearch(e.target.value)}}/>
      {JSONDATA.filter((item)=>{
        if(search == '') return item;
        else if(item.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          return item;
        }
      }).map((item, key)=>{
       return (
       <div className="user" key={key}>
          <p>{item.first_name}</p>
        </div>);
      })}
    </div>
  );
}

export default App;
