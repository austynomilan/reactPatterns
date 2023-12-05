import React from 'react';

export default function tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
