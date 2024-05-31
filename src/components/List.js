import React from "react";
import SingleTask from "./SingleTask";


function List({listOfTasks, handleDelete, handleDone}){
    return(
        <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }} >
                
                {listOfTasks.map((elt) => (
                    <SingleTask elt={elt} 
                    handleDelete={handleDelete}  
                    handleDone={handleDone}
                />))}
                
            
            </div>
        </div>
    )

}

export default List;