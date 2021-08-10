import React from "react";
import { useHistory } from "react-router-dom";
import PodcastItem from "../components/PodcastItem";

export default function Podcast() {
  const history = useHistory();
  return (
    <div>
      <section>
        <div className="title">
          <h1>Podcast</h1>
          <a><div
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    <h2>← Go Back</h2>
                  </div></a>
        </div>
        <PodcastItem displayAll = {true} />
      </section>
    </div>
  );
}