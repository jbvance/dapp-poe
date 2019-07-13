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
      return {
        ...state,
        assetHash: action.assetHash,
        alreadyExists: action.alreadyExists
      }
    case constants.CREATE_ASSET_HASH:
      return {
        ...state,
        assetHash: action.hash,
        success: action.success,
        transaction: action.transaction
      }
    default:
      return state
  }
}
