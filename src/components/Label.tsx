import * as React from 'react';

interface LabelProps {
  text: string;
}

export const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <label className="text-brightPink font-rubik tracking-widest font-bold text-sm">
      {text}
    </label>
  );
};
