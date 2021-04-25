import React from 'react';
import SingleYogaCourse from '../SingleYogaCourse/SingleYogaCourse';

const YogaCourses = ({yogaCourses}) => {
    return (
        <section>
            <div className="title">
                <h2>Welcome to our yoga courses</h2>
            </div>
        <div>
            {yogaCourses.map((yogaCourse)=> {
                // const {id, name, info, image, price} = yogaCourse;
                return (
                    <SingleYogaCourse key={yogaCourse.id} {...yogaCourse}/>
                )
            })}
        </div>
        </section>
    )
}

export default YogaCourses;