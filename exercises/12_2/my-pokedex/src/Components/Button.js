import React from 'react';

class Button extends React.Component {
  render() {
    const { className, disabled, handleClick, label } = this.props;
    return (
      <button
      className={`${className}-button`}
      type="button"
      onClick={handleClick}
      disabled={disabled}
      >
        {label}
      </button>
    );
  } 
}

export default Button;
