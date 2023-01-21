import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'; 

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

 const [people, setPeople] = useState<IState["people"]>([
  {
    name: "LeBron James",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 38,
    note: "Something allergic to something"
  }
 ])

  return (
    <div className="App">
     <h1> People invited to the party </h1>
    <List people={people}/>
    <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
