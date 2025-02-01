export type StateCallback<T> = (updated: T) => void | Function;
export type StateSubscriber<T> = (callback: StateCallback<T>) => void;

export class StateObject<T> {
  private _subscribers: StateCallback<T>[] = [];

  constructor(private _value: T) {}

  get value() {
    return this._value;
  }

  set value(updated: T) {
    this._value = updated;
    this.notify();
  }

  private notify() {
    const cleanup = this._subscribers.map((subscriber) => subscriber(this._value));
    cleanup.map((fun) => fun?.());
  }

  public sub(callback: StateCallback<T>) {
    this._subscribers.push(callback);
  }

  public unsub(callback: StateCallback<T>) {
    this._subscribers = this._subscribers.filter((subscriber) => subscriber !== callback);
  }
}
