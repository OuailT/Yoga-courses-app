import React,{useState} from 'react';

const SingleYogaCourse = ({id, name,trainer, videoNum, level, members, info, image, price}) => {
    
    const [readMore, setReadMore] = useState(false);
    return(
        <section key={id} className="single-course">
            <img src={image} alt={name}/>
            <footer>
                <div className="course-info">
                    <h3>{name}</h3>
                    <h4>{trainer}</h4>
                </div>

                <div className="services">
                    <div>
                    <i class="far fa-play-circle"></i> 
                    <h5>{videoNum}</h5>
                    </div>

                    <div>
                    <h5>{level}</h5>
                    </div>

                    <div>
                    <i class="fas fa-user"></i> 
                    <h5>{members}</h5>
                    </div>
                </div>
                <p>
                {readMore ? info : `${info.substring(0, 100)}...`}
                <button onClick ={()=> setReadMore(!readMore)} >
                {readMore ? "Show less" : "Show more"}
                </button>
                </p>

                <button className="btn">Join The Course</button>
            </footer>
        </section>
    )
}


export default SingleYogaCourse;