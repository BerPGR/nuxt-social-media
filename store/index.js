export const state = () => ({
    publications: []
})

export const mutations = {
    ADD_PUBLICATION(state, publication) {
        state.publications = [{content: publication}, ...state.publications]
    }
}