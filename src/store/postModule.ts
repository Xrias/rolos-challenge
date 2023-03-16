const POSTS_LIMIT = 5

import { getPosts, Post } from '@/api/api';

export type PostState = {
    posts: Post[],
    currentPageNumber: number,
    countOfPages: number,
    error: string
}

export const postModule = {
    state: () => ({
        posts: [],
        currentPageNumber: 1,
        countOfPages: 0
    }),
    mutations: {
        setPosts(state:PostState, posts:Post[]) {
            state.posts = posts;
        },
        setCurrentPageNumber(state:PostState, currentPageNumber:number) {
            state.currentPageNumber = currentPageNumber
        },
        setCountOfPages(state:PostState, countOfPages:number) {
            state.countOfPages = countOfPages
        },
        setError(state:PostState, error:string) {
            state.error = error
        }
    },
    actions: {
        async fetchPosts({state, commit}:{state:PostState, commit:any}) {
            try {
                const skip = (state.currentPageNumber - 1) * POSTS_LIMIT
                const response = await getPosts(POSTS_LIMIT, skip)
                commit('setCountOfPages', Math.ceil(response.total / POSTS_LIMIT))
                commit('setPosts', response.posts)
            } catch (e) {
                commit('setError', 'Ooops :( ')
            }
        }
    },
    namespaced: true
}
