// src/data/subscribers.ts
export type Subscriber = { email: string };

export const subscribers: Subscriber[] = [];

export function addSubscriber(sub: Subscriber) {
  subscribers.push(sub);
  console.log('New subscriber:', sub);
}
