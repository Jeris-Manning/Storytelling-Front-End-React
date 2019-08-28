import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StoryCard from './StoryCard';

export default function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const grabStories = () => {
      axios
        .get('https://storytelling-back-end.herokuapp.com/api/stories')
        .then((res) => setStories(res.data));
    };
    grabStories();
  }, []);

  return (
    <div>
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}
