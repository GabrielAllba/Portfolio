import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

import React from "react"

import { Provider } from "react-redux"
import store from "store/index"
function AdminLayout(props){
    

    return(
        <Provider store={store}>
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </Provider>
    )
}

export default AdminLayout