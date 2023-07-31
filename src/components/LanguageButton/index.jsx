import React from 'react';

function LanguageButton({ image, alt, onClick, className }) {
  return (
    <button onClick={onClick}>
      <img className={className} src={image} alt={alt} />
    </button>
  );
}

export default LanguageButton;
