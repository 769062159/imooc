import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import reducers from './reducer'
import Login from './container/login/login'
import Register from './container/register/register'
import 'antd-mobile/dist/antd-mobile.css'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/*只渲染命中的第一个route*/}
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Redirect to='/login'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)

