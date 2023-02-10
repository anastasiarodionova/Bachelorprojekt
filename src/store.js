import Vuex from 'vuex'
import { set, keys, getAll } from "../idb.js";

export const store = new Vuex.Store({
    state: {
        translations: []
    },
    mutations: {
        addTranslation(state, translation) {
            if (!state.translations.find(e => e.id === translation.id)) {
                set(translation.id, translation.name)
                state.translations.push(translation)
            }
        }
    },
    actions: {
        async POPULATE_FROM_CACHE({ state }) {
            let [keyss, values] = await Promise.all([keys(), getAll()])
            state.translations = keyss.map((key, index) => ({ id: key, name: values[index] }))
        }
    },
    getters: {
        translations: state => state.translations
    }
})