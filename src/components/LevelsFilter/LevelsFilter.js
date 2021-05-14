import React from 'react';
import Select from 'react-select';

import './LevelsFilter.css';

const LevelsFilter = ({levels, onChange}) => {
    const option = levels.map((level)=> ({value : level, label: level}));
    return (
    <div>
        <Select
        options ={option}
        className="select-option"
        placeholder={"Type..."}
        onChange={onChange}
        />
    </div>
    )
} 


export default LevelsFilter;