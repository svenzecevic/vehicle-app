import React from "react"
import EditModel from "../../containers/EditModel"
import Toolbar from "../../components/Toolbar/Toolbar"


const EditModelPage = () => (
    <React.Fragment>
        <h1>Enter new vehicle model</h1>
        <EditModel />
        <Toolbar />
    </React.Fragment>
)

export default EditModelPage