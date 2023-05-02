import React from "react";

function Moments() {
  const memories = [
    {
      title: "Our First Mall hangout",
      image: "https://example.com/first-day-of-school.jpg",
      description:
        "I remember being so nervous and excited to start school. My mom took a picture of me in my new outfit before I left.",
    },
    {
      title: "Our First Beach Hangout",
      image: "https://example.com/hawaii-vacation.jpg",
      description:
        "We had so much fun exploring the beaches and trying new foods. I still have the shell necklace I bought there.",
    },
    {
      title: "Our Face Mask Date",
      image: "https://example.com/graduation-day.jpg",
      description:
        "I was so proud to walk across the stage and receive my diploma. My family was there to cheer me on.",
    },
    {
      title: "Becoming Official",
      image: "https://example.com/graduation-day.jpg",
      description:
        "I was so proud to walk across the stage and receive my diploma. My family was there to cheer me on.",
    },
  ];

  return (
    <div className="memories-container">
      {memories.map((memory) => (
        <div key={memory.title} className="memory">
          <h2 className="memory-title">{memory.title}</h2>
          <img src={memory.image} alt={memory.title} className="memory-image" />
          <p className="memory-description">{memory.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Moments;
