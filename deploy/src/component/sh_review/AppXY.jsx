import React, { useState } from 'react';

export default function AppXY({ x, y }) {
  return (
    <div
      className="pointer"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    ></div>
  );
}
