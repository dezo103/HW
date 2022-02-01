import React from 'react'
import {Route, Routes} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import Junior_plus from "./pages/Junior_plus";
export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus',
    // add paths
}


function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<Junior_plus/>}/>
                {/*Switch выбирает первый подходящий роут*/}
                {/*<Switch>*/}

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

                {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
                {/*// add routes*/}

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                {/*<Route render={() => <Error404/>}/>*/}

                {/*</Switch>*/}
            </Routes>
        </div>
    )
}

export default AllRoutes
