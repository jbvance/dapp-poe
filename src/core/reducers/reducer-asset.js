import constants from 'core/types'

const intialState = {
  stagedAsset: null,
  assetHash: null,
  alreadyExists: false,
  error: '',
  transation: null,
  success: false
}

export const assetReducer = (state = intialState, action) => {
  switch (action.type) {

    case constants.ADD_ASSET:
      return { ...state, stagedAsset: action.asset[0] }

    case constants.CHECK_ASSET:
      debugger
      return {
        ...state,
        assetHash: action.assetHash,
        alreadyExists: action.alreadyExists
      }
    default:
      return state
  }
}
