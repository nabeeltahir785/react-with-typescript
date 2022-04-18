import React from 'react';
import {Child} from "./props/Child";
import {Hello} from "./props/Hello";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
// import UserSearch from "./classes/UserSearch";
import {Provider} from "react-redux";
import {store} from "../src/redux"
import RepositoriesList from "./components/RepositoriesList";
const users  = [
    {name: 'Sarah', age:20},
    {name: 'Alex', age:20},
    {name: 'Michael',age:21}
]
function App() {
  return (
    <div className="App">
        {/*<EventComponent/>*/}
        {/*<UserSearch users={users}/>*/}
        {/*<UserSearch/>*/}
        <Provider store={store}>
            <h1>Search for A Package</h1>
            <RepositoriesList/>
        </Provider>
    </div>
  );
}

export default App;
