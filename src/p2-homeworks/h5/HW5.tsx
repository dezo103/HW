import React from 'react'
import Header from './Header'
import AllRoutes from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}
            <HashRouter>
                <Header/>

                <AllRoutes/>
            </HashRouter>
            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
