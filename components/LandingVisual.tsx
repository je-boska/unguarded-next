'use client';

import { useEffect } from 'react';
import { runLandingVisual } from '../utils/LandingVisual';

export const LandingVisual = () => {
  useEffect(() => {
    runLandingVisual();
  }, []);
  return <></>;
};
