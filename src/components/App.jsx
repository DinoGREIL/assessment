import { useEffect,useState } from 'react';
import RealList from './RealList';
import Filter from './Filter';
function App() {
  const [ListtoSee, setList] = useState({posts:["Error:empty"]});
  //we put a default value in order to prevent errors on the first loop. 
  //Otherwise the program doesn't recognize posts and send an error
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const PostPerPage = 5;
  const LastPost = currentPage * PostPerPage;
  const FirstPost = LastPost - PostPerPage;
  //we charge the data
    useEffect(()=>{
      fetch('api/posts')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setList(result);
        
      });},[])
  
  return (
    <div class="center">
      <Filter category={category} setCategory={setCategory} setCurrentPage={setCurrentPage}/>
      <RealList ListtoSee={ListtoSee} category={category}  currentPage={currentPage} 
      setCurrentPage={setCurrentPage} FirstPost={FirstPost} LastPost={LastPost} PostPerPage={PostPerPage}  />
    </div>
    );
}

export default App;
