import axios from "axios";
import React,{useState, useEffect} from "react";
import YogaCourses from "./components/YogaCourses/YogaCourses";
import Loading from "./components/IsLoading/Loading";

//API to fetch the data
const url = 'https://gist.githubusercontent.com/Tayarthouail/8fb14fe117fdd718ceabd6ee05ed4525/raw/8c86c4bb89fc51667ba0578b2dcba14a0b21f08c/Yoga-courses-api.json';


function App() {
  const [yogaCourses, setYogaCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


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
      setTimeout(() => {setIsLoading(false)}, 1000);
      console.log(result);
    } 
    GetCoursesYoga();
  }, []);


  if(isLoading) {
    return (
      <Loading/>
    )
  } 
  else {
    return (
      <main>
        <YogaCourses yogaCourses= {yogaCourses}/>
      </main>
      );
  }

  
}

export default App;
