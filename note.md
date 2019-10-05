1. redux-thunk action creators tunk函数
2. redux-promise  

Hook只能在函数式组件中使用 复用不同组件之间的状态逻辑。
+ State Hook
+ Effect Hook 与类组件中componentDidMount、componentDidUpdate和componentWillUnmount具有相同的功能

使用规则
+ 只能在函数最外层调用Hook。不要在循环、条件判断或子函数中调用。
+ 只能在React的函数组件中调用Hook。不要在其他函数中调用。

组件之间重用状态逻辑
+ 高阶组件
+ render props
+ 自定义Hook
  
  