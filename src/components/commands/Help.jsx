import React from "react";

const Help = () => {
  const commands = [
    { cmd: "help", desc: "check available commands.", tab: 14 },
    { cmd: "about", desc: "about Shlok Bharadwaj.", tab: 12 },
    { cmd: "clear", desc: "clear the terminal.", tab: 14 },
    { cmd: "echo", desc: "print out anything.", tab: 14 },
    { cmd: "education", desc: "my educational background.", tab: 6 },
    { cmd: "email", desc: "send me an email.", tab: 14 },
    { cmd: "gui", desc: "go to the GUI version of my portfolio.", tab: 17 },
    { cmd: "history", desc: "view list of previous commands.", tab: 12 },
    { cmd: "projects", desc: "view projects that I've done over the years.", tab: 10 },
    { cmd: "socials", desc: "check out my social accounts.", tab: 12 },
    { cmd: "welcome", desc: "display hero section.", tab: 8 },
    { cmd: "whoami", desc: "about current user.", tab: 10 },
  ];

  return (
    <div>
      {commands.map((command, index) => (
        <div key={index} className="flex items-start md:items-center">
          <span className="text-green-400">{command.cmd}</span>
          <span className="text-white ml-2 md:ml-4">
            {Array(command.tab + 1).join("\xA0")}
          </span>
          <span className="text-gray-400 md:inline md:ml-2">
            {command.desc}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Help;
