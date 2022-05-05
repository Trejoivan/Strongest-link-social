import './GymForm.css';
import React, { useState } from 'react';
import StrongestLinkApi from '../../api/StrongestLinkApi';
import {
  Button
} from '@chakra-ui/react';

function GymForm(props) {
  const [nameField, setNameField] = useState('');
  const user = props.username

  const handleSaveWorkouts = async (e) => {
    e.preventDefault();
    const gymData = {
      name: e.target.elements['gym_name'].value,
      type: 'gym',
      description: 'a location',
      latitude: e.target.elements['lat'].value,
      longitude: e.target.elements['lng'].value,
      attendees: user
    };
    const data = await StrongestLinkApi.postPin(gymData);
    console.log(gymData);
    props.refresh();
    props.removePin([]);
    props.closeinfoWindow(null);
    setNameField("");
  };


  return (
    <div className='infoWindow'>
      <form onSubmit={handleSaveWorkouts} className="bg" method="POST">
        <label>Input the gym info</label>
        <input className="inputField" value={nameField} onChange={(e) => setNameField(e.target.value)} name="gym_name"></input>
        <select className="inputField"  name="selectList" id="selectList">
          <option value="gym">Gym</option>
          <option value="run">Run</option> 
          <option value="bike">Bike</option> 
        </select>
        <input name="lat" type="hidden" value={props.lat} />
        <input name="lng" type="hidden" value={props.lng} />
        <Button className="button" type="submit" >Create Gym Location</Button>
      </form>
    </div>);
}

export default GymForm;