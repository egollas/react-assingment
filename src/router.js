import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './Containers/HomePage'
import ArticlePage from './Containers/ArticlePage'

export const Router =() => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/:articleId' component={ArticlePage} />
    </Switch>
  </BrowserRouter>
)

export default Router