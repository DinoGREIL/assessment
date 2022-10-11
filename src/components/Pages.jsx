function Pages(props) {
    let nbPages = props.nbPages;
    let currentPage = props.currentPage;
    let setCurrentPage = props.setCurrentPage;
    //we go to the first page
    const firstPage = () => {
        setCurrentPage(1);
    }
    //we go to the previous page
    const prevPage = () => {
        if(currentPage > 1) 
        setCurrentPage(currentPage - 1);
    }
    //we go to the next page
    const nextPage = () => {
        if(currentPage < nbPages) 
        setCurrentPage(currentPage + 1);
    }
    //we go to the last page
    const lastPage = () => {
        setCurrentPage(nbPages);
    }

    return (
        <div>
        
            
            <button onClick={firstPage}>
                &lt;&lt;
            </button>
            
            
            <button onClick={prevPage}>
                &lt;
            </button>
            
            Page {currentPage} out of {nbPages}
            <button onClick={nextPage}>
                &gt;
            </button>
            
           
            <button onClick={lastPage}>
                &gt;&gt;
            </button>
           
       
        </div>
    );
}

export default Pages;