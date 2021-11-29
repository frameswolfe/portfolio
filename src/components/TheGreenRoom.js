import React from "react";

  class TheGreenRoom extends React.Component {
    componentDidMount() {
      window.location.href = "www.enterthegreenroom.co.uk";
    }

    render() {
      return (
        <div>
          <h2>theGreenRoom</h2>
        </div>
      )
    }
  }

export default TheGreenRoom;
