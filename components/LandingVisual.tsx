'use client';

import { useEffect } from 'react';
import { runLandingVisual } from '../utils/LandingVisual';

export default function LandingVisual() {
  useEffect(() => {
    runLandingVisual();
  }, []);
  return <></>;
}
