import { Module } from "vuex";

export interface State {
  userData: {
    id: number;
  };
  chatRoomID: number;
}

export const chat: Module<State, any> = {
  namespaced: true,
  state: {
    userData: {
      id: 12345
    },
    chatRoomID: 74021740
  }
};
