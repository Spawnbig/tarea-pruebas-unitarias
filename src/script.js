const videoGames = require('./load-games.js');
const {
  getListOfUniqueRandomNumbers,
  getRandomNumber,
} = require('./utils/get-random.js');

const allGames = [...videoGames.GBA, ...videoGames.N64, ...videoGames.PS2];

// Get two games by console
function getTwoByConsole(videoGamesConsole) {
  const gamesByConsole = videoGames[videoGamesConsole];
  const randoms = getListOfUniqueRandomNumbers({
    min: 0,
    max: gamesByConsole.length,
    qty: 2,
  });
  const games = randoms.map((random) => {
    return gamesByConsole[random];
  });

  return games;
}

// Get three games by genre
function getTwoByGenre(genre) {
  const allGamesWithGenre = allGames.filter((game) =>
    game.genres.includes(genre)
  );

  const randoms = getListOfUniqueRandomNumbers({
    min: 0,
    max: allGamesWithGenre.length,
    qty: 2,
  });

  const games = randoms.map((random) => {
    return allGamesWithGenre[random];
  });

  return games;
}

// Get one game by console and genre
function getGameByConsoleAndGenre(console, genre) {
  const allGamesByConsoleAndGenre = allGames.filter(
    (game) => game.genres.includes(genre) && game.video_console === console
  );

  const random = getRandomNumber(0, allGamesByConsoleAndGenre.length);

  return allGamesByConsoleAndGenre[random];
}

// Get game by name
function getGameByName(name) {
  const gameByName = allGames.find(
    (game) => game.name.toLowerCase() === name.toLowerCase()
  );

  return gameByName;
}

// Get games by genre
function getGamesByGenre(genre) {
  const gamesByGenre = allGames.filter((game) => game.genres.includes(genre));

  return gamesByGenre;
}

module.exports = {
  getTwoByConsole,
  getTwoByGenre,
  getGameByConsoleAndGenre,
  getGameByName,
  getGamesByGenre,
};
