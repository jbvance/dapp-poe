import { combineReducers } from 'redux'
import { providerReducer } from 'core/reducers/reducer-provider'
import { assetReducer }    from 'core/reducers/reducer-asset'
import { accountReducer }  from 'core/reducers/reducer-account'
import { contractReducer } from 'core/reducers/reducer-contract'
import uiReducer           from 'core/reducers/reducer-ui'


const rootReducer = combineReducers({
  account: accountReducer,
  asset: assetReducer,
  contract: contractReducer,
  provider: providerReducer,
  ui: uiReducer
})

export default rootReducer
