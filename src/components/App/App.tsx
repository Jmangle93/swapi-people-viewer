import React from 'react';
import People from '../People';

function App() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [peopleDiv, setPeopleDiv] = React.useState(<p>Loading...</p>);
  const handleChange = (event : any) => {
    setSearchTerm(event.target.value);
  };

  function doSearch() {
    setPeopleDiv(<People searchTerm={searchTerm}/>)
  }
  
  return (
    <div>
      <div>
        <input type="text" placeholder="Search for a character..." value={searchTerm} onChange={(e) => handleChange(e)}></input>
        <button type="button" onClick={doSearch}>Search</button>
      </div>
      {peopleDiv}
    </div>
  );
}

export default App;
