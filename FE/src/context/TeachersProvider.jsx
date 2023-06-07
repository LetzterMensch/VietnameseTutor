/* eslint-disable react/prop-types */
import * as React from "react";

const DefaultState = {
  propertyListings: [],
};

const TeachersContext = React.createContext(DefaultState);

export const TeachersConsumer = TeachersContext.Consumer

export class TeachersProvider extends React.Component {
  state = DefaultState;

  componentDidMount() {
    fetch("/server/teacher.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ propertyListings: res });
      });
  }

  render() {
    const { children } = this.props;
    const { propertyListings } = this.state;
    console.log(propertyListings)
    return (
      <TeachersContext.Provider
        value={{
          propertyListings,
        }}
      >
        {children}
      </TeachersContext.Provider>
    );
  }
}

