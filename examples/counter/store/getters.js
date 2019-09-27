const limit = 5

//所有数据的统一出口
const getters = {//类似计算属性
    recentHistory: state => {
        const end = state.history.length
        const begin = end -limit > 0 ? end - limit : 0
        return state.history.slice(begin,end).toString().replace(/,/g, '，')
    },
    count: state=> state.count
}

export default getters