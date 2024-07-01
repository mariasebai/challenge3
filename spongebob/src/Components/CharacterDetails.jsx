import React, { useState } from 'react';

const CharacterDetails = ({ character, onSaveChanges, onDelete }) => {
  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);
  const [imageUrl, setImageUrl] = useState(character.imageUrl);

  const handleSave = () => {
    onSaveChanges(character.id, name, description, imageUrl);
  };

  return (
    <div className="character-details">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <button onClick={handleSave}>Save Changes</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default CharacterDetails;
