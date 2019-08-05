export default {
    state: {
        sidebarState: true
    },
    getters: {
        getSidebarState(state) {
            return state.sidebarState
        }
    },
    mutations: {
        invertSidebarState(state) {
            state.sidebarState = !state.sidebarState
        }
    },
    actions: {
    }
}