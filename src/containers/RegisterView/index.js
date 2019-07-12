import React, { Component }       from 'react'
import PropTypes                  from 'prop-types'
import { connect }                from 'react-redux'
import { bindActionCreators }     from 'redux'
import * as accountActionCreators from 'core/actions/actions-account'
import Stepper                    from 'components/Stepper'
import Photo                      from './components/Photo'
import CredentialsPanel           from './panels/CredentialsPanel'
import GenerateHashPanel          from './panels/GenerateHashPanel'
import RegisterAssetPanel         from './panels/RegisterAssetPanel'
import SuccessPanel               from './SuccessPanel'
import { styles }                 from './styles.scss'

class RegisterView extends Component {

  render() {
    return (
      <div className={styles}>
         This is the RegistesrView!
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    account: bindActionCreators(accountActionCreators, dispatch)
  }
})

RegisterView.propTypes = {
  actions: PropTypes.shape({}).isRequired
}

export default connect(null, mapDispatchToProps)(RegisterView)
