# 组件

- props 中的数据类型
  1. 借助props-types依赖包，可以对props中的数据类型进行校验
  2. 为组件添加校验规则 List.propTypes = {}
  3. 可以限定props参数的类型，是否必传，以及可以指定参数的特定结构

- props 的默认值的写法
  1. 为组件添加默认值 List.defaultProps = {}
  2. 可以为props参数设置默认值


# 生命周期
- 挂载阶段
  1. constructor
  2. render
  3. componentDidMount

- 更新阶段
  1. render
  2. componentDidUpdate

- 卸载阶段\
  1. componentWillUnmount