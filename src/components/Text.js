import React from 'react';
import './Text.css';

const Text = ({ text, styleClass = "default-text" }) => {
  return <p className={styleClass}>{text}</p>;
};

export default Text;

{/* implementation example
    <div>
        <Text text="This is default text." />
        <Text text="This is bolded text." styleClass="bold-text" />
        <Text text="This is heading text." styleClass="heading-text" />
        <Text text="This is color text." styleClass="color-text" />
    </div>
*/}