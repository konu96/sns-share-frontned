import { GetterTree, ActionTree, MutationTree } from 'vuex';

export const state = () => ({
    message: '',
    isLoading: false,
    ogpData: {}
});

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    setMessage(state, payload: string) {
        state.message = payload;
    },
    setLoading(state, payload: boolean) {
        state.isLoading = payload;
    }
};

export const actions: ActionTree<RootState, RootState> = {
    async setMessage({ commit }, payload: string) {
        const json = await this.$axios.$post('/api/messages', payload);
        if (json.uuid) {
            this.$router.push(`/message/${json.uuid}`);
        }
    },

    setLoading({ commit }, payload: boolean) {
        commit('setLoading', payload);
    }
};

export const getters: GetterTree<RootState, RootState> = {
    message(state) {
        return state.message;
    },
    loading(state) {
        return state.isLoading;
    }
}