import React from "react";

import { LoadingIndicator } from "components";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    return (
      <React.Suspense fallback={LoadingIndicator}>
        {this.state.hasError ? (
          <div>Coś poszło nie tak!</div>
        ) : (
          <React.Fragment>{this.props.children}</React.Fragment>
        )}
      </React.Suspense>
    );
  }
}

export default ErrorBoundary;
