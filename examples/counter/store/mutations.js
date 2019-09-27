const mutations = {//唯一操作state的方法
    increment(state) {
        state.count++
        state.history.push('mutations')
    },
    decrement(state) {
        state.count--
        state.history.push('decrement')
    },
}

export default mutations