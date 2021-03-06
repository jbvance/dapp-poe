import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import * as providerActionCreators from 'core/actions/actions-provider'
import { MuiThemeProvider }   from '@material-ui/core/styles'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import ProgressIndicator        from 'components/ProgressIndicator'
import theme                    from 'configs/theme/config-theme'
import HomeView                 from 'containers/HomeView'
import UploadView               from 'containers/UploadView'
import AssetsView               from 'containers/AssetsView'
import PendingTransactionsView  from 'containers/PendingTransactionsView'
import LatestUploadsView        from 'containers/LatestUploadsView'
import RegisterView             from 'containers/RegisterView'
import NormalLayoutRoute        from './layouts/NormalLayoutRoute'
import RegistrationLayoutRoute  from './layouts/RegistrationLayoutRoute'
import MetaMaskNotification     from './components/MetaMaskNotification'

import './styles.scss' // global styles

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      web3Provider: null
    }
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      web3Provider: nextProps.provider.web3Provider
    }
  }

  componentDidMount() {
    const { actions } = this.props
    actions.provider.setProvider()
  }

  render() {
    const { web3Provider } = this.state
    const isLoading = false
    // const isLoading = web3Provider === null

    return (
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <div>
            <div className="app-shell">
              { isLoading ? (
                <ProgressIndicator color="secondary" size={50} />
              ) : (
                <Switch>
                  <NormalLayoutRoute path="/assets" component={AssetsView} />
                  <NormalLayoutRoute path="/pending" component={PendingTransactionsView} />
                  <NormalLayoutRoute path="/latest" component={LatestUploadsView} />
                  <NormalLayoutRoute path="/upload" component={UploadView} />
                  <RegistrationLayoutRoute path="/register" component={RegisterView} />
                  <Redirect from="/" to="/assets" />
                </Switch>
              )}
            </div>
          </div>
        </HashRouter>
        <MetaMaskNotification />
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    provider: state.provider
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      provider: bindActionCreators(providerActionCreators, dispatch)
    }
  }
}

App.propTypes = {
  actions: PropTypes.shape({}).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
