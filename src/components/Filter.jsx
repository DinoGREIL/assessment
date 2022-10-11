function Filter(props) {
    let category = props.category;
    let setCategory = props.setCategory;
    let setCurrentPage = props.setCurrentPage;
    

    return (
        //the value of category change as the user type
        <label class="centercat">
            Category:&nbsp;
            <input type="text" value={category} 
            onChange={(event) => {
                setCurrentPage(1);
                setCategory(event.target.value);
                }
            }/>
        </label>
        
    );
}

export default Filter;