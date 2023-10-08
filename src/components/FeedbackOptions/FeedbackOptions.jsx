import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => (
          <button
            key={option}
            className={css.btnoption}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}
