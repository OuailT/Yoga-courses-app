import React from 'react';

const SingleYogaCourse = ({id, name, info, image, price}) => {
    return(
        <section className="single-course">
            <img src={image} alt={name}/>
            <footer>
                <div className="course-info">
                    <h4>{name}</h4>
                    <h4 className="course-price">{price}</h4>
                </div>
                
                <p>{info}
                <button>redMore</button>
                </p>

                <button className="delete-btn">Not Interested</button>
            </footer>
        </section>
    )
}


export default SingleYogaCourse;