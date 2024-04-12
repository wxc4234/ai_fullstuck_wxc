import { makeAutoObservable } from 'mobx'

class TodoStore {
  list = [
    { id: 1, name: ' 学习react', isDone: true },
    { id: 2, name: ' 学习mobx', isDone: false }
  ]
  constructor() {
    makeAutoObservable(this)
  }

  checkItem(id) {
    this.list = this.list.map(item => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
      return item
    })
  }
  addItem(name) {
    this.list.push({
      id: this.list.length + 1,
      name,
      isDone: false
    })

  }
  handleDele(id) {
    this.list = this.list.filter(item => item.id !== id)
  }

  toggleAll(checked) {
    this.list = this.list.map(item => {
      item.isDone = checked
      return item
    })
  }
  editItem(id, name) {
    this.list = this.list.map(item => {
      if (item.id === id) {
        item.name = name
      }
      return item
    })
  }
  showItem(id) {
    this.list.map(item => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }

    })
  }
}

const todoStore = new TodoStore()

export default todoStore