import { defineStore } from 'pinia'

interface CounterState {
  n: number
}

export const useCounter = defineStore('counter', {
  state: (): CounterState => ({
    n: 5,
  }),
  actions: {
    increment() {
      this.n++
    },
  },
  // getters: {
  //     num() {
  //         return this.n;
  //     }
  // }
})
