import { Content } from './content';

describe('Notification content', () => {
  it('shoud be able to create a notification content', () => {
    const content = new Content('Está é uma notificação válida');

    expect(content).toBeTruthy();
    expect(content.value).toHaveLength(content.value.length);
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('AB')).toThrow();
  });

  it('should not be able to create a notification content with  than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
