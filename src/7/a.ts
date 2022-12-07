import { readFileSync } from 'fs';

interface Directory {
  name: string;
  body: (Directory | File)[];
  parentDir: Directory | null;
}

interface File {
  name: string;
  size: number;
}

enum terminalActions {
  CD = 'cd',
  LS = 'ls',
}

const root: Directory = {
  name: '/',
  body: [],
  parentDir: null,
};

// const input = readFileSync('src/7/input.example.txt', 'utf-8');
const input = readFileSync('src/7/input.prod.txt', 'utf-8');

const terminalLines = input.split('\n');

// remove first line
terminalLines.splice(0, 1);

let currentDir = root;
let ls = false;

const dirSizes: number[] = [];

const checkCommand = (line: string) => {
  const cmd = line.split(' ')[1];

  if (cmd === terminalActions.LS) {
    ls = true;
    return;
  }

  if (cmd === terminalActions.CD) {
    ls = false;
    const dirName = line.split(' ')[2];
    if (dirName === '..') {
      currentDir = currentDir.parentDir;
    } else {
      currentDir = currentDir.body.find(
        (value) => value.name === dirName
      ) as Directory;
    }
    return;
  }
};

const computeFileSize = (directory: Directory): number => {
  let size = 0;

  const directories = directory.body.filter(
    (dir): dir is Directory => (dir as Directory).body !== undefined
  );

  const files = directory.body.filter(
    (dir): dir is File => (dir as File).size !== undefined
  );

  for (const file of files) {
    size += file.size;
  }

  for (const directory of directories) {
    const dirSize = computeFileSize(directory);
    size += dirSize;
    dirSizes.push(dirSize);
  }

  return size;
};

for (const line of terminalLines) {
  if (line.startsWith('$')) {
    checkCommand(line);
  } else if (ls) {
    if (line.startsWith('dir')) {
      const newDir: Directory = {
        name: line.split(' ')[1],
        body: [],
        parentDir: currentDir,
      };
      currentDir.body.push(newDir);
    } else {
      const newFile: File = {
        name: line.split(' ')[1],
        size: +line.split(' ')[0],
      };
      currentDir.body.push(newFile);
    }
  }
}

computeFileSize(root);

console.log(dirSizes);

const sumOfSub100k = dirSizes
  .filter((x) => x <= 100000)
  .reduce((a, b) => a + b);

console.log(sumOfSub100k);
