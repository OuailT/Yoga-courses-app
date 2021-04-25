import axios from "axios";
import React,{useState, useEffect} from "react";
// import CoursesData from "./Data/CoursesData";
import YogaCourses from "./components/YogaCourses/YogaCourses";

//API
const url = 'https://course-api.com/react-tours-project';


function App() {
  const [yogaCourses, setYogaCourses] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);


  //Function to fetch the data from the API
  const GetCourses = async () => {
    const response = await axios.get(url)
    const {data} = response;
    return data;
  }

//UseEffect to Fetch run the a function on every render
  useEffect(()=> {
    const GetCoursesYoga = async () => {
      const result = await GetCourses();
      setYogaCourses(result);
      console.log(result);
    } 
    GetCoursesYoga();
  }, []);


  return (
    <main>
      <YogaCourses yogaCourses= {yogaCourses}/>
    </main>
  );
}

export default App;
