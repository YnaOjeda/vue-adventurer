import { expect, it, describe } from 'vitest';
import { isValidColor } from '../../utils';

describe('isValidColor', () => {
  it('should return true for valid color names', () => {
    expect(isValidColor('red')).toBe(true);
    expect(isValidColor('green')).toBe(true);
  });

  it('should return true for valid hex color codes', () => {
    expect(isValidColor('#ff0000')).toBe(true);
    expect(isValidColor('#00ff00')).toBe(true);
    expect(isValidColor('#123')).toBe(true);
  });

  it('should return true for valid RGB values', () => {
    expect(isValidColor('rgb(255, 0, 0)')).toBe(true);
    expect(isValidColor('rgb(0, 255, 0)')).toBe(true);
  });

  it('should return true for valid RGBA values', () => {
    expect(isValidColor('rgba(255, 0, 0, 1)')).toBe(true);
    expect(isValidColor('rgba(0, 255, 0, 0.5)')).toBe(true);
  });

  it('should return true for valid HSLA values', () => {
    expect(isValidColor('hsla(0, 100%, 50%, 1)')).toBe(true); // solid red
    expect(isValidColor('hsla(120, 100%, 50%, 0.5)')).toBe(true); // semi-transparent green
  });

  it('should return false for invalid color names', () => {
    expect(isValidColor('<notacolor />')).toBe(false);
  });

  it('should return false for invalid hex color codes', () => {
    expect(isValidColor('#xyz')).toBe(false);
    expect(isValidColor('#12345g')).toBe(false);
  });

  it('should return false for invalid RGB syntax', () => {
    expect(isValidColor('rgb(256, 0)')).toBe(false);
    expect(isValidColor('rgb(0, 0, 0, 0)')).toBe(false);
  });

  it('should return false for invalid RGBA syntax', () => {
    expect(isValidColor('rgba(255, 255, 255, 0, 0)')).toBe(false);
    expect(isValidColor('rgba(255, 0)')).toBe(false);
  });

  it('should return false for invalid HSLA values', () => {
    expect(isValidColor('hsla(360,1.5)')).toBe(false);
    expect(isValidColor('hsla(360, 100%, 100%, 1.5, 0)')).toBe(false);
  });

  it('should return false for empty strings', () => {
    expect(isValidColor('')).toBe(false);
  });
});
