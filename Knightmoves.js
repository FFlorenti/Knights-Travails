function knightMoves(start, end) {
  // 8 levizjet e mundshme te kalit ne formen L
  const directions = [
    [1, 2], [2, 1], [2, -1], [1, -2],
    [-1, -2], [-2, -1], [-2, 1], [-1, 2]
  ];

  const isOnBoard = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;
  const key = ([x, y]) => `${x},${y}`;

  // Nese start dhe end jane i njejti katror
  if (key(start) === key(end)) {
    console.log(`E arrite ne 0 levizje! Rruga jote:`);
    console.log(`  ${JSON.stringify(start)}`);
    return [start];
  }

  //radha mban rruge te plota jo vetem katrore
  const queue = [[start]];
  const visited = new Set([key(start)]);

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    for (const [dx, dy] of directions) {
      const next = [current[0] + dx, current[1] + dy];

      if (!isOnBoard(next)) continue;
      if (visited.has(key(next))) continue;

      const newPath = [...path, next];

      // Nese ka gjetuur destinacionin kthe rrugen menjehere
      // rruga ma e shkurter
      if (key(next) === key(end)) {
        console.log(`E arrite ne ${newPath.length - 1} levizje! Rruga jote:`);
        newPath.forEach(p => console.log(`  ${JSON.stringify(p)}`));
        return newPath;
      }

      visited.add(key(next));
      queue.push(newPath);
    }
  }

  return null; // nuk ka rrug
}

// --- Shembull ---
knightMoves([0, 0], [1, 2]);
console.log('---');
knightMoves([3, 3], [4, 3]);
console.log('---');
knightMoves([0, 0], [7, 7]);

 module.exports = knightMoves;