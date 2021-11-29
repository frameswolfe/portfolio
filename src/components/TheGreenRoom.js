import React from "react";

  class TheGreenRoom extends React.Component {
    componentDidMount() {
      window.open("www.enterthegreenroom.co.uk", "_blank");
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
