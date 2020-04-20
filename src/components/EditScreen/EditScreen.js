import React from "react"




const EditScreen = (props) => {



    return(
        <form>
            <div className="form-group" >
                <input type="text" className="form-control" placeholder="Enter vehicle make..." />
            </div>
            <div className="form-group" >
                <input type="text" className="form-control" placeholder="Enter vehicle model..." />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="submit" className="btn btn-danger" onClick={props.closed} >Close</button>
        </form>
    )
    


}


export default EditScreen