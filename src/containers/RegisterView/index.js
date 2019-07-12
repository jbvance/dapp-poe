import React, { Component }       from 'react'
import PropTypes                  from 'prop-types'
import { connect }                from 'react-redux'
import { bindActionCreators }     from 'redux'
import * as accountActionCreators from 'core/actions/actions-account'
import { requestAccountAccess }   from 'core/libs/lib-metamask-helper'
import { styles }                 from './styles.scss'

class RegisterView extends Component {

  componentDidMount() {
    const { actions } = this.props
    requestAccountAccess((defaultAccount) => {
      actions.account.setDefaultAccount(defaultAccount)
    })
  }

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
