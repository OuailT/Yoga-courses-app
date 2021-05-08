import React from 'react';
import Select from 'react-select';



const LevelsFilter = ({levels}) => {
    const option = levels.map((level)=> ({value : level, label: level}));
    console.log(option);
    return (
    <div>
        <Select
        options ={option}
        />
    </div>
    )
} 


export default LevelsFilter;