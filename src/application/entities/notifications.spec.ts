import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('shoud be able to create a notification', () => {
    const notification = new Notification({
      category: 'any_category',
      content: new Content('any_content'),
      recipientId: 'any_recipientId',
    });

    expect(notification).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('AB')).toThrow();
  });

  it('should not be able to create a notification content with  than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
