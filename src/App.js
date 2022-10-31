import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');


function GetTime(t) {
  const [time, modifier] = t.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
  
}
const handleSubmit = (e) =>{
  e.preventDefault();
  setValue(value);
 
} ; 
const [times, setTimes] = useState([]);


const handleClick = () => {
  setTimes(current => [...current, GetTime(value) ]);

}


return(
  <div className="app-style">
    <form onSubmit={e => handleSubmit(e)}>
      <label><h1>Insert Time</h1></label>
      <label><p>Example : 12:25 PM/04:25 PM/12:05AM etc.</p></label>

    <input
           type="text"
           placeholder="Insert Time"
           onChange={e => setValue(e.target.value)}
       />
    </form>
      <div>
        <button onClick={handleClick}>Convert Time</button>
      </div>

      {times.map((times, index) => {
        return (
          <div key={index}>
            <h2>{times}</h2>
          </div>
        );
      })}
    </div>
)
    }
export default App;
