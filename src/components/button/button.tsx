import React, { useEffect, useState } from 'react';
import { counter } from '../../data/data';

export function Button() {
  const handleClickButton = () => {
    return '';
  };

  return (
    <section className="controls">
      <p className="info">0 gentlemen pointing at you</p>
      <button onClick={handleClickButton} className="button button--select">
        Select all
      </button>
    </section>
  );
}
