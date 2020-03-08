import React, { Component } from 'react'
import { withRouter } from 'react-router'

import PageContent from './pageContent'

class Drawer extends Component {

  render() {
    return (
      <PageContent>
        {this.props.children}
      </PageContent>
    );
  }
}

export default withRouter(Drawer)