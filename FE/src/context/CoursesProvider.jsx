/* eslint-disable react/prop-types */
import * as React from "react";

const DefaultState = {
  propertyListings: [],
};

const CoursesContext = React.createContext(DefaultState);

export const CoursesConsumer = CoursesContext.Consumer

export class CoursesProvider extends React.Component {
  state = DefaultState;

  componentDidMount() {
    fetch("/server/courses.json")
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
      <CoursesContext.Provider
        value={{
          propertyListings,
        }}
      >
        {children}
      </CoursesContext.Provider>
    );
  }
}

