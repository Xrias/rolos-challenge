import {createStore} from "vuex";
import {postModule, PostState} from "@/store/postModule";

export type State = {
  post: PostState
}

export default createStore({
  modules: {
    post: postModule
  }
})
