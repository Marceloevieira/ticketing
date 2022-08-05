import { Publisher, Subjects, TicketUpdatedEvent } from '@mevtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
