import React from 'react';
import People from '../People';

function App() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [peopleDiv, setPeopleDiv] = React.useState(<p>Loading...</p>);
  const handleChange = (event : any) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    setPeopleDiv(<People searchTerm={searchTerm}/>);
  }, [searchTerm]);
  
  return (
    <div>
      <div>
        <input type="text" placeholder="Search for a character..." value={searchTerm} onChange={(e) => handleChange(e)}></input>
      </div>
      {peopleDiv}
    </div>
  );
}

export default App;
