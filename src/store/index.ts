import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

import { chat } from "./modules/chat";

export const key: InjectionKey<any> = Symbol();

export const store = createStore({
  modules: {
    chat
  }
});
