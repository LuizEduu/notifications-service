import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  let sut: SendNotification;
  let notificationsRepository: NotificationsRepository;

  beforeEach(() => {
    notificationsRepository = new InMemoryNotificationsRepository();
    sut = new SendNotification(notificationsRepository);
  });

  it('should be able to send a notification', async () => {
    const { notification } = await sut.execute({
      category: 'any_category',
      content: 'any_content',
      recipientId: 'any_recipientId',
    });

    expect(notification).toBeTruthy();
    expect(notification).toHaveProperty('createdAt');
  });
});
