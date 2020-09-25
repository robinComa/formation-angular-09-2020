import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should manage null', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform(null)).toBe(null);
  });

  it('should manage empty string', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('')).toBe('');
  });

  it('should manage short text text', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('e')).toBe('e');
  });

  it('should manage long text text', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('lorem ipsim, lorem ipsim, lorem ipsim')).toBe(
      'lorem ipsim, lore...'
    );
  });

  it('should manage number of caracters', () => {
    const pipe = new TruncatePipe();
    const nb = 5;
    const text = pipe.transform('lorem ipsim', nb);
    expect(text.length).toBe(nb);
  });

  it('should manage suffix', () => {
    const pipe = new TruncatePipe();
    const suffix = '$$$';
    expect(pipe.transform('lorem ipsim', 5, suffix)).toBe(`lo${suffix}`);
  });
});
