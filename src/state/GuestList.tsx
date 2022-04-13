import React, {useState} from 'react';

const GuestList: React.FC = () => {
    const [name,setName] = useState('');
    const [guests, setGuest] = useState<string[]>([]);
    const addGuest = () => {
        setName('');
        setGuest([...guests,name]);
    }
    return (<div>
        <h3>Guest Lists</h3>
        <ul>
            {guests.map((guest)=> <li>{guest}</li>)}
        </ul>

        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <button onClick={addGuest}>Add Guest</button>
    </div>
    );

};

export default GuestList;