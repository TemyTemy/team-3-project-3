import { iterateObserversSafely } from "@apollo/client/utilities";
import React from "react";
import Async from 'react-async';

// We'll request podcasts episodes from this API
const id = "4d3fe717742d4963a85562e9f84d8c79";
const URL = "https://listen-api.listennotes.com/api/v2/podcasts/" + id;
const loadEpisodes = () =>
  fetch(URL, {
    method: "GET",
    headers: {
               "Content-type": "application/json;charset=UTF-8",
               "X-ListenAPI-Key": "ffd40c4878f547648e7bf10c4351a68f"
             },
  }).then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function EpisodesList({ displayAll }) {
  return (
      <Async promiseFn={loadEpisodes}>
       {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`
          if (data)
            return displayAll ? (          
              data.episodes.map(item => (<a href="/podcast/"><div className="box-section" style={{ 
                backgroundImage: `url(${item.image})` 
              }}>{item.title}</div></a>))                                       
            ) : data.episodes.slice(0, 10).map(item => (<div className="box">{item.title}</div>))
        }}         
      </Async>                            
  );
}

export default EpisodesList;