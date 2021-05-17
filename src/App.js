import axios from "axios";
import ReactPaginate from 'react-paginate';
import React,{useState, useEffect} from "react";
import YogaCourses from "./components/YogaCourses/YogaCourses";
import Loading from "./components/IsLoading/Loading";
import LevelsFilter from './components/LevelsFilter/LevelsFilter';

//API to fetch the data
const url = 'https://gist.githubusercontent.com/Tayarthouail/8fb14fe117fdd718ceabd6ee05ed4525/raw/8c86c4bb89fc51667ba0578b2dcba14a0b21f08c/Yoga-courses-api.json';

function App() {
  
  //states
  const [yogaCourses, setYogaCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [levels, setLevels] = useState([]);
  const [level, setLevel] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  //Paginate react 
  const coursePerPage = 2;

  // const PageVisited = numberPage * coursePerPage;
  const pageCount = Math.ceil(yogaCourses.length / coursePerPage);
  console.log(pageCount);

  //Track changes on each numberPage and display the data 
  useEffect(()=> {
    setYogaCourses(yogaCourses.slice(pageNumber * 2 , (pageNumber + 1) * 2))
  },[pageNumber]);

  //To the next Page
  const pageChange = ({selected}) => {
    setPageNumber(selected);
  }

  //levelChangeHandler 
  const levelChangeHandler = ({value}) => {
      setLevel(value);
  }

  //Filter by Levels // stateless
  const filterLevels = (level) => {
    return yogaCourses.filter((singleLevel)=> level ? singleLevel.level === level : true);
  }

  //Function to fetch the data from the API
  const GetCourses = async () => {
    const response = await axios.get(url)
    const {data} = response;
    return data;
  }

//UseEffect to run the function on every render
  useEffect(()=> {
    const GetCoursesYoga = async () => {
      const result = await GetCourses();
      setYogaCourses(result);
      setLevels(Array.from(new Set(result.map((result)=> result.level))));
    } 
    GetCoursesYoga();
  }, []);


  //check if the we got response
  useEffect(()=> {
    if(yogaCourses.length > 0) {
      setIsLoading(false);
    }
  }, [yogaCourses])
  

  if(isLoading) {
    return (
      <Loading/>
    )
  } 
  else {
    return (
      <main>
        <div className="title">
                <h2>YOUR PRACTICE REIMAGINED</h2>
            </div>
        <LevelsFilter levels={levels} onChange={levelChangeHandler}/>
        <YogaCourses yogaCourses= {(filterLevels(level)).slice(0, 2)}/>
        <ReactPaginate
        previousLabel = {"Previous"}
        nextLabel = {"Next"}
        pageCount = {pageCount}
        onPageChange= {pageChange}
        />
      </main>
      );
  }

}

export default App;
