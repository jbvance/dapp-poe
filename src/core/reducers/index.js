import { combineReducers } from 'redux'
import { providerReducer } from 'core/reducers/reducer-provider'
import { assetReducer }    from 'core/reducers/reducer-asset'
import { accountReducer }  from 'core/reducers/reducer-account'
import uiReducer           from 'core/reducers/reducer-ui'


const rootReducer = combineReducers({
  account: accountReducer,
  asset: assetReducer,
  provider: providerReducer,
  ui: uiReducer
})

export default rootReducer
