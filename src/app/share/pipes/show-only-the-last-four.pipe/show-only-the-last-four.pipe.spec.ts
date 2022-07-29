import { ShowOnlyTheLastFourPipe } from './show-only-the-last-four.pipe';

describe('ShowOnlyTheLastFourPipe', () => {
  it('create an instance', () => {
    const pipe = new ShowOnlyTheLastFourPipe();
    expect(pipe).toBeTruthy();
  });
});
