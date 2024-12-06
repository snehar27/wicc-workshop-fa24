import React from 'react';
import './Text.css';

const Text = ({ text, styleClass = "default-text" }) => {
  return <p className={styleClass}>{text}</p>;
};

export default Text;

{/* implementation example
    <div>
      <Text text="This is default text." />
      <Text text="This is highlighted text." styleClass="highlighted-text" />
      <Text text="This is error text." styleClass="error-text" />
      <Text text="This is success text." styleClass="success-text" />
    </div>
*/}