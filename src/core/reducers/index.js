import { combineReducers } from 'redux'
import { providerReducer } from 'core/reducers/reducer-provider'
import { assetReducer }    from 'core/reducers/reducer-asset'
import uiReducer           from 'core/reducers/reducer-ui'

const rootReducer = combineReducers({
  asset: assetReducer,
  provider: providerReducer,
  ui: uiReducer
})

export default rootReducer
