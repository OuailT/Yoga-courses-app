import React,{useState, useEffect} from "react";
// import CoursesData from "./Data/CoursesData";
import YogaCourses from "./components/YogaCourses/YogaCourses";


function App() {
  const [yogaCourses, setYogaCourses] = useState();
  const [isLoading, setIsLoading] = useState(true);



  return (
    <div>
      <h1>Welcome to our yoga courses master class</h1>
      <YogaCourses yogaCourses= {yogaCourses}/>
    </div>
  );
}

export default App;
