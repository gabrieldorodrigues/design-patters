enum FinancialNotificationType {
    PRICE_CHANGE = "PRICE_CHANGE",
    VOLUME_ANOMALY = "VOLUME_ANOMALY",
    IMPORTANT_EVENT = "IMPORTANT_EVENT"
  }
  
  enum Priority {
    HIGH = 3,
    MEDIUM = 2,
    LOW = 1
  }
  
  interface Filter {
    meetsCriteria(stock: Stock): boolean;
    readonly type: FinancialNotificationType;
    readonly priority: Priority;
  }
  
  class Notification {
    constructor(
      public readonly type: FinancialNotificationType,
      public readonly priority: Priority,
      public readonly stock: Stock,
      public readonly timestamp: Date = new Date()
    ) {}
  }
  
  interface FinancialObserver {
    update(notification: Notification): void;
  }
  
  class Stock {
    private observers: Map<FinancialObserver, Filter[]> = new Map();
    protected priceHistory: number[] = [];
    protected volumeHistory: number[] = [];
  
    constructor(public readonly symbol: string) {}
  
    updatePrice(newPrice: number) {
      this.priceHistory.push(newPrice);
      this.checkConditions();
    }
  
    updateVolume(newVolume: number) {
      this.volumeHistory.push(newVolume);
      this.checkConditions();
    }
  
    private checkConditions() {
      this.observers.forEach((filters, observer) => {
        filters.forEach(filter => {
          if (filter.meetsCriteria(this)) {
            observer.update(new Notification(
              filter.type,
              filter.priority,
              this
            ));
          }
        });
      });
    }
  
    get currentPrice(): number {
      return this.priceHistory[this.priceHistory.length - 1] || 0;
    }
  
    get previousPrice(): number {
      return this.priceHistory[this.priceHistory.length - 2] || 0;
    }
  
    get currentVolume(): number {
      return this.volumeHistory[this.volumeHistory.length - 1] || 0;
    }
  
    attach(observer: FinancialObserver, filter: Filter) {
      const filters = this.observers.get(observer) || [];
      filters.push(filter);
      this.observers.set(observer, filters);
    }
  
    detach(observer: FinancialObserver) {
      this.observers.delete(observer);
    }
  }
  
  class PriceChangeFilter implements Filter {
    readonly type = FinancialNotificationType.PRICE_CHANGE;
    readonly priority = Priority.HIGH;
  
    constructor(private thresholdPercent: number) {}
  
    meetsCriteria(stock: Stock): boolean {
      if (stock.priceHistory.length < 2) return false;
      const change = (stock.currentPrice - stock.previousPrice) / stock.previousPrice;
      return Math.abs(change) >= this.thresholdPercent / 100;
    }
  }
  
  class VolumeFilter implements Filter {
    readonly type = FinancialNotificationType.VOLUME_ANOMALY;
    readonly priority = Priority.MEDIUM;
  
    constructor(private threshold: number) {}
  
    meetsCriteria(stock: Stock): boolean {
      return stock.currentVolume > this.threshold;
    }
  }
  
  class Investor implements FinancialObserver {
    private notifications: Notification[] = [];
  
    update(notification: Notification) {
      this.notifications.push(notification);
      console.log(`[Investidor] ${notification.stock.symbol} - ${notification.type} (${notification.priority})`);
    }
  
    getNotifications() {
      return this.notifications;
    }
  }