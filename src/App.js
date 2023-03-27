import axios from 'axios';
import './App.css';
import Cards from './Cards';
import { useEffect ,useState} from 'react';
function App() {

//const[data,setData]=useState([])

  //useEffect(()=>  {axios.get('https://jsonplaceholder.typicode.com/posts')
//.then (res=> setData(res.data))
//.catch(err=> console.log(err))
  //},[])

  const[UserList,setUsersList]= useState([]);
  useEffect(()=> {axios.get('https://jsonplaceholder.typicode.com/users')
  .then (res => { setUsersList(res.data)
  console.log(res.data)})
 
},[])


  return (
    <div className="App">
   
    {
      UserList.map((e)=> (<Cards User= {e} />))} </div>
    
  )
}
  
export default App;
