import React from 'react';

const Welcome = () => {
  return (
    <div className='HeroContainer flex flex-wrap-reverse max-w-[932px]: mb-6 min-w-[1024px]: basis-1/2'>
      <div className="info-section">
        <div className='PreName mt-2 mb-6'>
          {`        
    __             
    / _||| ||_ ||  | o )||  _   _  _  ||    _ ()
    \_ \| \|/o\|/7 | o \| \/o\ /_|/o\/o\VV7/o\||
    |__/Ln|L\_/L|\ |___/Ln|\_,]L| \_,]_|VV \_,]|
                                              //    
          `}
        </div>
        <div className='PreWrapper'>
          <div className='PreNameMobile'>
            {`
  __           
  / _||| ||_ || 
  \_ \| \|/o\|/7
  |__/Ln|L\_/L|\           
  ___                         
| o )||  _   _  _  ||    _ ()
| o \| \/o\ /_|/o\/o\VV7/o\||
|___/Ln|\_,]L| \_,]_|VV \_,]|
                           //
          `}
          </div>
        </div>
        <div className="text-white">
          Welcome to my terminal portfolio. (Version 1.3.1)
        </div>
        <div className='Seperator'>----</div>
        <div className="text-white">
          This project's source code can be found in this project's{' '}
          <div className='Link' href="https://github.com/ShlokBharadwaj/portfolio">
            GitHub repo
          </div>
          .
        </div>
        <div className='Seperator'>----</div>
        <div className="text-white">
          For a list of available commands, type{' '}
          <span className="text-green-500">help</span>.
        </div>
      </div>
      <div className="illu-section">
        {/* <div className='PreImg'>
          {`
                       ^^^^::::::::::.................    ..       ..........................
                       ^^^::::::::::..............  ..^!?JJJJ?7~~~^. ........................
                       ::::::::::::............. .~J5PGGGBBBGGBGPPP5!........................
                       ::::::::::...............!5GBBBGGGGBBBGGGGPPG5:::.....................
                       ::::::::::..............?GGGGGGGPGGGGGGGBBGG57^:......................
                       ::::::::...............~PGG5YJ???7777??JJYGGP!........................
                       :::::::::..............~GG5???777777777777YPPY:.......................
                       ::::::::::::...........:JG5????7!!!!!77777JPGY:.......................
                       :::::::::::...........:::5YJYY55Y7!?Y55YJ?75P~::......................
                       ::::::::::...........:::.?J?YJ55Y?!7JY5J?7!YJ::::.....................
                       :::::::::............::::!J777???7!!!!7!!~~?7:::......................
                       :::::::::............::::~J77!!7?!!!!!~~~!!?!:::......................
                       :::::::::..........:::::::~7?77?JJ?J?7!!!!7~^:::......................
                       ::::::::::.......::::::::::^??JYYJJJJJ?7!7!^::::......................
                       ::::::::::::::::::::::::::::~JJJJJ??7777?7^^^:::......................
                       :::::::::::::::::::::::::::::?YJ??7777?JJ!~:^:::......................
                       ::::::..:::::::::::::::::^^!!!JY55YYYYJJ?~J?~^::......................
                       ::::::::::::::.:::::^~!?YPGG!^~?YYYYJJJ7^:?BPP5J7!^::.................
                       :::::::::::::::~!?Y5GBBB#BBBY^~^~7JJ?7~^^^5BGGBBBBGP5Y?!~:.........:::
                       ::::::::::::!YPGBBBBBBBBBBB#B!^^~7JY7^:^:7BBGGGGGGGGGGGGGP5~..::::::::
                       ^^^^^^^^^^:~BBBBBBBBBBBBBBB##Y!?YP5555?~^PBBBGGGGBBGGGGGGGBP^:::::::::
                       ^^^^^^^^^^:J#BBBBBBBBBB#BB###G?7~?P5Y7!~?BBBBBBBBBBGGGGGGGGGY:::::::::
                       ^^^^^^^^^^~G#BBBBBBBBBB#####B#57!5P5?~~~5BBBBBBBBBBGGGGGGGBBP^:::^^^^^
                       ~~^^^^^^^^?###BBBBBBB######BB#B?YP55Y~~7BBBBBBBBBBBBBBBBBBBBBJ:^^^^^^^
                       ~~~~~~~~~^5#####BBBB######BBBBBPPP5557~Y#BBBBBBBBBBBBBBBBBBBBG^^^^^^^^
                       ~~~~~~~~~~G###&################BPP555?!G#BBBBB######BBBB##BBBB7^^^^^^~
                       ~~~~~~~~~!B##&&#################GP555YJ#######BBPGGB#B####BBB#?^^~~~~~
                       !!!~~~!!~7###&&&################BPP555P######5??7?7?5G#####BB#?~~~~~~~
                       !!!!!!!!~J##&&@&&&###############GPPPG######G7J5?J5Y!YB&&####B?~~~~~~~
                       !!!!!!!!!Y&&&@@&&&&####&&&&######BGPP######B?JGGY?GB?7G&&&&###J~~~!!!!
                       777777!7!5&&&@@@@&&&&&&&&&&&######BPG#####&#J7PBYPG57J#&&&&&##P!!!!!!!
                       777777777G&&&@@@@@&&&&&&&&&&&&&&&&#GB&&&&&&&PY?JYYJ?YB#&&&&&###?!!!!!7
                       ?????777J&&&@@@@@@&&&&&&&&&&&&&&&&&B#&&&&&&&&&GPGYGB#&&@&&&&&#&P777777
                       ???????7P&&&@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@@&&&&&#?77777
         `}
        </div> */}
      </div>
    </div>
  );
};

export default Welcome;
