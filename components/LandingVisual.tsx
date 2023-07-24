'use client';

import { useEffect } from 'react';
import { runLandingVisual } from '../utils/LandingVisual.js';

export default function LandingVisual() {
  useEffect(() => {
    runLandingVisual();
  }, []);
  return <></>;
}
