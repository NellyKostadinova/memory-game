import React from 'react';
import '../App.css';

function LevelSelect(props) {
  const handleChange = (e) => {
    props.changeHandler(e.target.value);
  };

  return (
    <div className="LevelSelect">
      <label htmlFor="level">Select game level: </label>
      <select name="level" onChange={handleChange}>
        <option value="5">Easy</option>
        <option value="8">Medium</option>
        <option value="10">Hard</option>
      </select>
    </div>
  );
}

export default LevelSelect;
