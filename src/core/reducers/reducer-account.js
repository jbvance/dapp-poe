import constants from 'core/types'

const initialState = {
  id: null
}

export function accountReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_ACCOUNT:
      return { ...state, id: action.id }
    case constants.SET_ACCOUNT_EMAIL:
      return { ...state, email: action.email }
    default:
      return state
  }
}
