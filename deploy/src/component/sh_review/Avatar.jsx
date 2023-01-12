import React from 'react';

export default function Avatar({ img, tag }) {
  return (
    <div className="img__wrap">
      <img src={img} alt="avatar" className="photo" />
      {tag && <span className="tag">new</span>}
    </div>
  );
}
