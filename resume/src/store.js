import Vuex from 'vuex'

export const createStore = () => new Vuex.Store({
  state: {
    firstName: 'FirstName',
    lastName: 'LastName',
    address: '123 Main St',
    city: 'Somewhere',
    state: 'TX',
    zip: '77777',
    phoneNumber: '555-555-5555',
    email: 'userE@mail.com',
  },
  getters: {
    fullName(state) {
      return `${state.firstName} ${state.lastName}`
    },
    fullAddressSingleLine(state) {
      return `${state.address}, ${state.city}, ${state.state} ${state.zip}`
    }
  }
})
