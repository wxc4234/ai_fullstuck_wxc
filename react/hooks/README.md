# hooks
1. 让函数组件变得更强大的钩子
2. hooks只能在函数组件里面使用

1. useState() 为函数组件引入了状态
2. useEffect() 默认执行一次，当组件中有状态变更导致组件重新渲染，该函数会被重新执行
   1. 可以充当 componentDidMount()
   2. 可以充当 componentDidUpdate()
   3. 可以充当 componentWillUnmount()

3.useRef 在函数组件当中获取dom元素
4. useContext() 为函数组件引入了上下文 createContext() 创建上下文，用于父组件提供数据，子组件通过useContext()获取数据