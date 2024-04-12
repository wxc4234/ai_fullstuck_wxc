import React from 'react'
import { observer } from 'mobx-react-lite';

import counter from './counterStore'
import movie from './movieStore'
import todo from './todoStore'

class RootStore {
  constructor() {
    this.couterStore = counter
    this.movieStore = movie
    this.todoStore = todo
  }
}
const rootStore = new RootStore()

// const context = React.createContext(rootStore)

const useStore = () => rootStore

export { useStore, observer }