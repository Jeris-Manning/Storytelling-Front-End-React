// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const StoryList = props => {
//   const [stories, setStories] = useState([])
//   useEffect(() => {
//     const getStories = () => {
//       axios
//         .get('https://storytelling-back-end.herokuapp.com/api/stories')
//         .then(response => {
//           setStories(response.data);
//         })
//         .catch(error => {
//           console.error('Server Error', error);
//         });
//         console.log(stories)
//     }
    
//     getStories();
    
//   }, []);
// }
//   return (
//     <div className="story-list">
//       {stories.map(story => (
//         <StoryDetails key={story.id} story={story} />
//       ))}
//     </div>
//   );
// }


// export default StoryList 