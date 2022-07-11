import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

// interface in typescript
export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Tony Stark",
      age: 52,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlA8OaFAFD3Sl6J6vYtkBmrt5En0s7GOQdnA&usqp=CAU",
      note: "Tony Stark, is a fictional character primarily portrayed by Robert Downey Jr. in the Marvel Cinematic Universe ",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
