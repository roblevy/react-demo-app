import React from 'react';

const CommentForm = ({ handleChange, handleSubmit, comment }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="text">Comment</label>
        <textarea className="textarea" id="text" name="text" placeholder="Comment" onChange={handleChange} value={comment.text || ''}/>
      </div>
      <div className="field">
        <label htmlFor="rating">Rating</label>
        <div className="control">
          <div className="select">
            <select id="rating" name="rating" onChange={handleChange} value={comment.rating || ''}>
              <option value="">Please choose</option>
              <option value="1">🍔</option>
              <option value="2">🍔🍔</option>
              <option value="3">🍔🍔🍔</option>
              <option value="4">🍔🍔🍔🍔</option>
              <option value="5">🍔🍔🍔🍔🍔</option>
            </select>
          </div>
        </div>
      </div>
      <button className="button is-primary">Submit</button>
    </form>
  );
};

export default CommentForm;
