import React from "react"
import EditMake from "../../containers/EditMake"
import Toolbar from "../../components/Toolbar/Toolbar"

const EditMakePage = () => (
    <React.Fragment>
        <h1>Enter new vehicle make</h1>
        <EditMake />
        <Toolbar />
    </React.Fragment>
)


export default EditMakePage