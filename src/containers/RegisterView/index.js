import React, { Component }       from 'react'
import PropTypes                  from 'prop-types'
import { connect }                from 'react-redux'
import { bindActionCreators }     from 'redux'
import { withRouter }             from 'react-router-dom'
import * as accountActionCreators from 'core/actions/actions-account'
import Stepper                    from 'components/Stepper'
import Photo                      from './components/Photo'
import CredentialsPanel           from './panels/CredentialsPanel'
import GenerateHashPanel          from './panels/GenerateHashPanel'
import RegisterAssetPanel         from './panels/RegisterAssetPanel'
import SuccessPanel               from './panels/SuccessPanel'
import { styles }                 from './styles.scss'

class RegisterView extends Component {
  getPanel = () => {
    const { location } = this.props
    return parseInt(location.search.substr(1).split('=')[1], 10)
  }

  renderContent() {
    switch (this.getPanel()) {
      case 1:
        return <CredentialsPanel />
      case 2:
        return <GenerateHashPanel />
      case 3:
        return <RegisterAssetPanel />
      case 4:
        return <SuccessPanel />
      default:
        break
    }

    return null
  }


  render() {
    const { asset } = this.props
    const panel = this.getPanel()

    return (
      <div className={styles}>
        <div id="register-view">
          <Photo asset={asset} />
          <div id="registration-form-container">
            <Stepper
              activeStep={panel - 1}
              steps={[
                'Enter Credentials',
                'Generate Unique Hash',
                'Register'
              ]}
            />
            <div id="registration-form">{this.renderContent(panel)}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  asset: state.asset
})

const mapDispatchToProps = dispatch => ({
  actions: {
    account: bindActionCreators(accountActionCreators, dispatch)
  }
})

RegisterView.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  asset: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterView))
