import './App.css';
import {useEffect, useState } from 'react';
import {getGuests, deleteGuest as apiDeleteGuest} from "./GuestsService";
import HotelForm from './hotelForm';
import GuestsGrid from './GuestsGrid';


function App() {

  const [guests, setGuests] = useState([]);
  useEffect(()=>{
    getGuests()
    .then((data)=>{
      console.log(data);
      setGuests(data)
    })
  },[]);

  const addGuest = (guest) => {
    let temp = guest = guests.map(g => g);
    temp.push(guest);
    setGuests(temp);
  }

  const deleteGuest = (id) => {
    apiDeleteGuest(id).then(()=>{
      let temp = guests.map(g=>g);
      const toDel = guests.map(g =>g._id).indexOf(id);
      temp.splice(toDel, 1);
      setGuests(temp);
    })
  }
  if(!guests) return <h1>Loading</h1>

  return (
    <div className="App">
      <h1>GD Hotels - Scotland</h1>
      <HotelForm addGuest={addGuest}/>
      <br></br>
      <GuestsGrid guests={guests} deleteGuest={deleteGuest}/>
    </div>
  );
}

export default App;
