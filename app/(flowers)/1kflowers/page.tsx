'use client';

import { useEffect } from 'react';
import { run1kflowers } from '../../../utils/1kflowers';

export default function Flowers() {
  useEffect(() => {
    run1kflowers();
  }, []);

  return (
    <div className='flowers'>
      <audio id='audio' preload='auto'>
        <source src='audio/0 Balance.mp3' type='audio/mp3' />
        <source src='audio/11,11.mp3' type='audio/mp3' />
        <source src='audio/All.mp3' type='audio/mp3' />
        <source src='audio/Shield Siren.mp3' type='audio/mp3' />
        <source src='audio/Word on Fire.mp3' type='audio/mp3' />
      </audio>
    </div>
  );
}
