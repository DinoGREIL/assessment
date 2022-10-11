import Pages from './Pages';
function filterListtosee(Listofposts, categorytofilter) {
    //to avoid errors we check if there is a list
    if (typeof(Listofposts) ==="undefined"){
        return [];
    }
    else {
        // if no filter than we do nothing
    if (categorytofilter === "") {
        return Listofposts;
    }
    //if there is a filter we check for each post if there is a category that contains the filter 
    //But we can have false positives: some categories will be marked as corresponding to the filter 
    //because they are similar even if they are not the complete category 
    //exemple:ecommerce correspond to mm
    return Listofposts.filter(
        post => {
        for (let i = 0; i < post.categories.length; i++) {
            let category = post.categories[i];
            if (category.name.toUpperCase().includes(categorytofilter.toUpperCase())) {
                return true;
            }
        }
        return false;
        }
    );}
}
//before slicing the list we need to check if it can be sliced
function sliceList(listtoslice,begin,end){
    //we check if the list is defined
    if (typeof(listtoslice) ==="undefined"){
        return [];
    }
    //we check if the list as been generated
    else if(listtoslice[0]==="Error:empty"){
        return [];
    }
    //if the list is generated we procede with the slicing
    else {
        return listtoslice.slice(begin,end);
    }
};
function RealList(props){
    const currentPage = props.currentPage;
    const setCurrentPage = props.setCurrentPage;
    //we filter the list 
    const Listtosee=filterListtosee(props.ListtoSee.posts,props.category);

    //then we slice it 
    const Listtoshow=sliceList(Listtosee,props.FirstPost,props.LastPost);
    //we deduce the number of pages
    const nbPages = Math.ceil(Listtosee.length / props.PostPerPage);
    return(<div>
        <Pages currentPage={currentPage} setCurrentPage={setCurrentPage} nbPages={nbPages}/>
        <ul>
      {Listtoshow.map((post) => (
        <li key={post.id}>
            <img src={post.author.avatar} alt="avatar picture"/> 
            <strong>{post.title}</strong> by user <em>{post.author.name}</em> at <em>{post.publishDate}</em> :
            <br/>
            "{post.summary}"
            
            <br/>
            Categories: 
            <ul>
            {post.categories.map(category => <li key={category.id}>{category.name}</li>)}
            </ul>
        
        
        
        </li>
      ))}
    </ul>
    <Pages currentPage={currentPage} setCurrentPage={setCurrentPage} nbPages={nbPages}/></div>
    )
}
export default RealList;