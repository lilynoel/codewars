// UNIX COMMAND LINE 'LS -L' EXTRACT THE FILE TYPE
// On Unix system type files can be identified with the ls -l command which displays the type of the file in the first alphabetic letter of the file system permissions field. 
// You can find more information about file type on Unix system on the wikipedia page.

// '-' A regular file ==> file.
// 'd' A directory ==> directory.
// 'l' A symbolic link ==> symlink.
// 'c' A character special file. It refers to a device that handles data as a stream of bytes (e.g: a terminal/modem) ==> character_file.
// 'b' A block special file. It refers to a device that handles data in blocks (e.g: such as a hard drive or CD-ROM drive) ==> block_file.
// 'p' a named pipe ==> pipe.
// 's' a socket ==> socket.
// 'D' a door ==> door.
// In this kata you should complete a function that return the filetype as a string regarding the file_attribute given by the ls -l command.

// For example if the function receive -rwxr-xr-x it should return file.

// Link to challenge: https://www.codewars.com/kata/5822b65bb81f702016000026

// My Solution
function linuxType(fileAttribute) {
  // input is a string
  // check first char of input fileAttribute
  // check if first char matches symbol key to determine file type

  const firstChar = fileAttribute.charAt(0);

  // lookup object
  const fileTypes = {
    "-": "file",
    d: "directory",
    l: "symlink",
    c: "character_file",
    b: "block_file",
    p: "pipe",
    s: "socket",
    D: "door",
  };

  // output is a string
  return fileTypes[firstChar];
}
