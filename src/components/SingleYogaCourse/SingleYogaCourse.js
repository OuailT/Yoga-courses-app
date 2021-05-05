import React,{useState} from 'react';

const SingleYogaCourse = ({id, name,trainer, videoNum, level, members, info, image, price}) => {
    const [readMore, setReadMore] = useState(false);

    const [likeCount , setLike] = useState(50);
    const [dislikeCount, setDislike] = useState(20);

    const [likeState, setLikeState] = useState(false);
    const [dislikeState, setDislikeState] = useState(false);
    const [vote, setVote] = useState(false);


    //function to like
    const likeCourse = () => {
        if ( !vote && !likeState ) {
            setLike(likeCount + 1 );
            setLikeState(true);
            setVote(true);
            
        }

        if ( vote && likeState ) {
            setLike(likeCount - 1);
            setLikeState(false);
            setVote(false);
            
        }
    }


    const DislikeCourse = () => {
        if ( !vote && !dislikeState ) {
           setDislike(dislikeCount - 1);
           setDislikeState(true);
           setVote(true);

        }

        if ( vote && dislikeState ) {
            setDislike(dislikeCount + 1);
            setDislikeState(false);
            setVote(false);
        }
    }

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

                <div className="ratio-section">
 
                    <div>
                    <i onClick={likeCourse} className="far fa-thumbs-up"></i>
                    <h5>{likeCount}</h5>
                    </div>
                    
                    <div>
                    <i onClick={DislikeCourse} className="far fa-thumbs-down"></i>
                    <h5>{dislikeCount}</h5>
                    </div>
                </div>

                <button className="btn">Join The Course</button>
            </footer>
        </section>
    )
}


export default SingleYogaCourse;