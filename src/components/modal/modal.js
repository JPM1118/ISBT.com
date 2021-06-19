import React from "react";
import { Link } from "gatsby";

import modalStyles from "./modal.module.scss";

export default class Modal extends Component {
  state = { display: true };

  handleClick = () => {
    this.setState({ display: false });
  };
  render() {
    const { display } = this.state;
    return (
      <div
        className={modalStyles.wrapper}
        style={!display ? { display: "none" } : null}
      >
        <div className={modalStyles.content}>
          <div className={modalStyles.text}>
            <p>
              For memo requests and quotes, please use the{" "}
              <Link to="/contact/">Contact Page</Link> or email:{" "}
              <span style={{ fontStyle: "italic" }}>
                Barbara@interiorsourcesbtodd.com
              </span>
            </p>
          </div>
          <div className={modalStyles.close} onClick={this.handleClick}>
            X
          </div>
        </div>
      </div>
    );
  }
}
