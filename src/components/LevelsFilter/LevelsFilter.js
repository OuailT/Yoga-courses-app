import React from 'react';
import Select from 'react-select';

import './LevelsFilter.css';

const LevelsFilter = ({levels}) => {
    const option = levels.map((level)=> ({value : level, label: level}));
    return (
    <div>
        <Select
        options ={option}
        className="select-option"
        placeholder={"Type..."}
        />
    </div>
    )
} 


export default LevelsFilter;