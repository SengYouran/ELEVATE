import React, { useEffect, useState } from "react";

const Snow = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const colors = ["#fff", "#4285ea", "#fff", "#d9f0ff", "#fff", "#fffcad"]; // ឧទាហរណ៍ពណ៌
    const flakes = [];
    for (let i = 0; i < 50; i++) {
      flakes.push({
        id: i,
        left: Math.random() * window.innerWidth,
        delay: Math.random() * 5,
        size: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 5 + 5, // random fall speed
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            backgroundColor: flake.color,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Snow;
