import { FixedlengthPipe } from './fixedlength.pipe';

describe('FixedlengthPipe', () => {
  it('create an instance', () => {
    const pipe = new FixedlengthPipe();
    expect(pipe).toBeTruthy();
  });
});
