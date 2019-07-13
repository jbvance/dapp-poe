import sha256    from 'sha256'
import constants from 'core/types'

export const addAsset = asset => ({
  type: constants.ADD_ASSET,
  asset
})

async function checkIfAssetRegistered(ProofOfExContract, assetHash) {
  console.log("GOT HERE")
  const assetExists = ProofOfExContract.deployed().then((poe) => {
    return poe.checkIfRegistered(assetHash)
  })
  return assetExists
}

function dispatchAssetAlreadyExists(dispatch) {
  dispatch((() => {
    return {
      type: constants.CHECK_ASSET,
      alreadyExists: true
    }
  })())
}

function dispatchAssetDoesNotExist(assetHash, dispatch) {
  dispatch((() => {
    return {
      type: constants.CHECK_ASSET,
      alreadyExists: false,
      assetHash
    }
  })())
}

export function checkIfRegistered(assetUrl) {
  return async (dispatch, getState) => {
    const { proofOfExContract } = getState().contract
    const assetHash = sha256(assetUrl)
    const assetExists = await checkIfAssetRegistered(proofOfExContract, assetHash)

    if (assetExists) {
      dispatchAssetAlreadyExists(dispatch)
    } else {
      dispatchAssetDoesNotExist(assetHash, dispatch)
    }
  }
}
