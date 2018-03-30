import { SudokuAngPage } from './app.po';

describe('sudoku-ang App', () => {
  let page: SudokuAngPage;

  beforeEach(() => {
    page = new SudokuAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
