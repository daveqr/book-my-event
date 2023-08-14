import React, { Component, createContext, useContext } from 'react';

const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    user: null,
  };

  setUser = (userData) => {
    this.setState({
      user: userData,
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          setUser: this.setUser,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, AuthContextProvider };

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
}
