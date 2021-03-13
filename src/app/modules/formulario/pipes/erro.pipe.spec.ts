import { ErroPipe } from './erro.pipe';

describe('ErroPipe', () => {
  it('create an instance', () => {
    const pipe = new ErroPipe();
    expect(pipe).toBeTruthy();
  });
});
