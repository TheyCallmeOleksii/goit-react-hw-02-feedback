import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    this.setState({ total }, this.countPositiveFeedbackPercentage);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.total !== 0) {
      const positivePercentage = (
        (this.state.good * 100) /
        this.state.total
      ).toFixed();
      this.setState({ positivePercentage });
    }
  };

  handleLeaveFeedback = option => {
    const mood = option.toLowerCase();
    this.setState(
      prevState => ({
        [mood]: prevState[mood] + 1,
      }),
      this.countTotalFeedback
    );
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    const options = ['Good', 'Neutral', 'Bad'];
    const hasFeedback = total > 0;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        {hasFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Section title="Statistics">
            <Notification message="There is no feedback" />
          </Section>
        )}
      </div>
    );
  }
}
