import React from "react";

const Help = () => {
  const commands = [
    { cmd: "help", desc: "check available commands.", tab: 9 },
    { cmd: "about", desc: "about Shlok Bharadwaj.", tab: 8 },
    { cmd: "clear", desc: "clear the terminal.", tab: 8 },
    { cmd: "echo", desc: "print out anything.", tab: 9 },
    { cmd: "education", desc: "my educational background.", tab: 4 },
    { cmd: "email", desc: "send me an email.", tab: 8 },
    { cmd: "gui", desc: "go to the GUI version of my portfolio.", tab: 10 },
    { cmd: "history", desc: "view list of previous commands.", tab: 6 },
    { cmd: "projects", desc: "view projects that I've done over the years.", tab: 5 },
    { cmd: "socials", desc: "check out my social accounts.", tab: 6 },
    { cmd: "welcome", desc: "display hero section.", tab: 6 },
    { cmd: "whoami", desc: "about current user.", tab: 7 },
  ];

  return (
    <div>
      {commands.map((command, index) => (
        <div
          key={index}
          className="flex items-center justify-between"
        >
          <span className="text-green-400">{command.cmd}</span>
          <span className="text-white">{Array(command.tab).fill("\u00A0").join("")}</span>
          <span className="text-gray-400 whitespace-nowrap">{command.desc}</span>
        </div>
      ))}
    </div>
  );
};

export default Help;
