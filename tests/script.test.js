const { expect } = require('@jest/globals');
const { getTwoByConsole, getTwoByGenre, getGameByConsoleAndGenre, getGameByName, getGamesByGenre } = require('../src/script');

describe('Script tests', () => {
  describe('getTwoByConsole', () => {
    it('Should return two games by PS2 console', () => {
      const games = getTwoByConsole('PS2');
      expect(games).toHaveLength(2);
      expect(games[0].video_console).toEqual('PS2');
      expect(games[1].video_console).toEqual('PS2');
    });

    it('Should throw and error when the console doesnt exists', () => {
      try {
        getTwoByConsole('CONSOLE');
        throw new Error('other-error');
      } catch (error) {
        expect(error.message).not.toEqual('other-error');
      }
    });
  });

  describe('getTwoByGenre', () => {
    it('Should return two games by Survival Horror genre', () => {
      // Acá modifiqué el código porque retornaba 3 juegos en vez de 2.
      const games = getTwoByGenre('Survival Horror');
      expect(games).toHaveLength(2);
      expect(games[0].genres).toContain('Survival Horror');
      expect(games[1].genres).toContain('Survival Horror');
    });
    it('Should throw and error when the genre doesnt exists', () => {
      try {
        // Aca también modifiqué el método, porque no lanzaba un error y quedaba con un loop infinito
        getTwoByGenre('CONSOLE');
        throw new Error('other-error');
      } catch (error) {
        expect(error.message).not.toEqual('other-error');
      }
    });
  });

  describe('getGameByConsoleAndGenre', () => {
    it('Should return a game for GBA and Sport genre', () => {
      const game = getGameByConsoleAndGenre('GBA', 'Sports');
      expect(game.video_console).toEqual('GBA');
      expect(game.genres).toContain('Sports');
    });

    // Cambiado throw por undefined
    it('Should be undefined when the console doesnt exists', () => {
      const games = getGameByConsoleAndGenre('CONSOLE', 'Sport')
      expect(games).toBeUndefined();
    });

    // Cambiado throw por undefined
    it('Should be undefined when the genre doesnt exists', () => {
      const games = getGameByConsoleAndGenre('GBA', 'GENRE')
      expect(games).toBeUndefined();
    });
  });

  describe('getGameByName', () => {
    it('Should return the Resident evil 2 game', () => {
      const game = getGameByName('Resident Evil 2');
      expect(game.name).toEqual('Resident Evil 2');
      expect(game.video_console).toEqual('N64');
      expect(game.genres).toContain('Survival Horror');
    });

    it('Should return undefined when not found', () => {
      expect(getGameByName('GAME')).toBeUndefined();
    });
  });

  describe('getGamesByGenre', () => {
    it('Should return a list of games by Action genre', () => {
      const games = getGamesByGenre('Action');
      expect(games).toBeInstanceOf(Array);
      expect(games.every(game => game.genres.includes('Action'))).toBe(true);
    });
    it('Should return a empty list when the genre doesnt exists', () => {
      const games = getGamesByGenre('GENRE');
      expect(games).toHaveLength(0);
      expect(games).toBeInstanceOf(Array);
    });
  });
});
