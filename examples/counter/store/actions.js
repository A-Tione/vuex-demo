//所有数据统一入口
const actions = {
    increment:({commit})=>commit('increment'),
    decrement:({commit})=>commit('decrement'),
    incrementIfOdd:({commit,state})=> {
        if (state.count % 2 === 0) {//不允许使用计算属性getters
            commit('increment')
        }
    },
    incrementAsync({commit}) {//参数为上下文的对象
        setTimeout(() => {
            commit('increment')//不可直接操作state，需通过mutations间接操作
        }, 1000)
    }
}

export default actions