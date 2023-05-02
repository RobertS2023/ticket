import React, { useState } from "react";
import Kelly1 from "../images/Kelly1.jpg";

function Her() {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <section className="her-section">
      <div className="her-center">
        <div className="her-header">
          <h3>to The Love of My Life</h3>
        </div>
        <div className="her-info">
          <div className="her-image">
            <img src={Kelly1} className="img" />
            <h4>Kelly Martinez</h4>
          </div>
          <div className="her-text">
            <h4>How Much I love You</h4>
            <p>
              Simply put, words will never do justice to show how much I love
              you.
            </p>
            <p>
              However, I can attempt to do it justice by explaining it here.
            </p>
            <p>
              My love, we met in the most random way possible, yet was it random
              if destiny seemingly wanted us to be together? Meeting someone who
              makes your heart pound with excitement at just the thought of them
              is something that is hard to come by. It's not something one can
              just find as that type of love is a once in a lifetime find. The
              love we have for each other is truly something unique and special.
              The love I feel for you often makes me smile uncontrollably
              whenever you cross my mind, which is very often as I tend to play
              scenarios in my head of you being by my side throughout the day.
              My Love for you is stronger than nuclear pasta (a material that is
              10 billion times harder to break than steel...) my love for you
              expands beyond the known universe which is always expanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Her;
