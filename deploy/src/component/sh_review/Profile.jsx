import React from 'react';
import Avatar from './Avatar';

export default function Profile({ img, name, title, tag }) {
  return (
    <div className="profile">
      <Avatar img={img} tag={tag} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
