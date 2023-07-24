'use client';

import { useEffect } from 'react';
import { runLandingVisual } from '../utils/landingVisual';

export default function LandingVisual() {
  useEffect(() => {
    runLandingVisual();
  }, []);
  return <></>;
}
