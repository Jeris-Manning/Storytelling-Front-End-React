import React from 'react';

export default function StoryCard({story}){
    // console.log(props.tale)
    return (
        <div>
        <h1>{ story.story }</h1>
            <button>Donate</button>
        </div>
    )
    }