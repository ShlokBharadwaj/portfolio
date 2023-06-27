import React, { useEffect } from "react";

const Rmrf = () => {
  useEffect(() => {
    window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
  }, []);

  return (
    <div>
      <h1>This is the rm -rf page.</h1>
    </div>
  );
};

export default Rmrf;
