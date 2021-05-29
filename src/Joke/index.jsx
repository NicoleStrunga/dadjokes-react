import React from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className={userName}>Neroxx</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likes}
          </span>

          <button id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};