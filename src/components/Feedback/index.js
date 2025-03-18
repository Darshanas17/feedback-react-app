import { Component } from "react";
import "./index.css";

class Feedback extends Component {
  state = { isFeedbackGiven: false };

  feedbackSubmitted = () => {
    this.setState({ isFeedbackGiven: true });
  };

  render() {
    const { resources } = this.props;
    const { isFeedbackGiven } = this.state;

    return (
      <div className="bg-cont">
        <div className="cont">
          {!isFeedbackGiven ? (
            <div className="feedback-cont">
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="feedback-emoji-cont">
                {resources.emojis.map((each) => (
                  <li key={each.id} className="emoji-item">
                    <img
                      src={each.imageUrl}
                      alt={each.name}
                      className="img"
                      onClick={this.feedbackSubmitted}
                    />
                    <p className="emoji-name">{each.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="thank-you">
              <img
                src={resources.loveEmojiUrl}
                alt="love emoji"
                className="love-img"
              />
              <h1>Thank you!</h1>
              <p className="desc">We will use your Feedback</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feedback;
