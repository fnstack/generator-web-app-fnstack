import * as React from 'react';
import { UserManager } from 'oidc-client';

export interface IRedirectToAuthProps {
  userManager: UserManager;
}
class RedirectToAuth extends React.Component<IRedirectToAuthProps> {
  public componentDidMount() {
    this.props.userManager.signinRedirect();
  }
  public render() {
    return null;
  }
}

export { RedirectToAuth };
