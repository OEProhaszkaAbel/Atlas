import { AppOnlyInteger } from './app-only-integer';

describe('AppOnlyInteger', () => {
  it('should create an instance', () => {
    const directive = new AppOnlyInteger();
    expect(directive).toBeTruthy();
  });
});
