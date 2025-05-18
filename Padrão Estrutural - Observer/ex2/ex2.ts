enum NotificationType {
    LOW_STOCK = "LOW_STOCK",
    RESTOCKED = "RESTOCKED",
    OUT_OF_STOCK = "OUT_OF_STOCK"
  }
  
  interface StockObserver {
    update(product: Product, notificationType: NotificationType): void;
  }
  
  class Product {
    private observers: Map<NotificationType, Set<StockObserver>> = new Map();
    private currentStock: number;
  
    constructor(
      public readonly name: string,
      private minStock: number,
      initialStock: number
    ) {
      this.currentStock = initialStock;
    }
  
    setStock(newStock: number): void {
      const oldStock = this.currentStock;
      this.currentStock = newStock;
      const notifications: NotificationType[] = [];
  
      if (newStock === 0) {
        notifications.push(NotificationType.OUT_OF_STOCK);
      } else {
        if (oldStock >= this.minStock && newStock < this.minStock) {
          notifications.push(NotificationType.LOW_STOCK);
        } else if (oldStock < this.minStock && newStock >= this.minStock) {
          notifications.push(NotificationType.RESTOCKED);
        }
      }
  
      notifications.forEach(notification => this.notify(notification));
    }
  
    attach(observer: StockObserver, notificationTypes: NotificationType[]): void {
      notificationTypes.forEach(type => {
        if (!this.observers.has(type)) {
          this.observers.set(type, new Set());
        }
        this.observers.get(type)?.add(observer);
      });
    }
  
    private notify(notificationType: NotificationType): void {
      const observers = this.observers.get(notificationType) || new Set();
      observers.forEach(observer => observer.update(this, notificationType));
    }
  }
  
  class SalesDepartment implements StockObserver {
    update(product: Product, type: NotificationType) {
      if (type === NotificationType.RESTOCKED) {
        console.log(`[Vendas] ${product.name} reabastecido. Atualizar promoções.`);
      }
    }
  }
  
  class PurchasingDepartment implements StockObserver {
    update(product: Product, type: NotificationType) {
      if (type === NotificationType.LOW_STOCK) {
        console.log(`[Compras] ${product.name} com estoque baixo. Reabastecer.`);
      }
    }
  }
  
  class ManagementDepartment implements StockObserver {
    update(product: Product, type: NotificationType) {
      console.log(`[Gerência] ${product.name} - Notificação: ${type}`);
    }
  }
  
  // Uso
  const produto = new Product("Celular", 10, 15);
  const vendas = new SalesDepartment();
  const compras = new PurchasingDepartment();
  const gerencia = new ManagementDepartment();
  
  produto.attach(vendas, [NotificationType.RESTOCKED]);
  produto.attach(compras, [NotificationType.LOW_STOCK]);
  produto.attach(gerencia, Object.values(NotificationType));
  
  produto.setStock(8);  // Notifica LOW_STOCK
  produto.setStock(15); // Notifica RESTOCKED
  produto.setStock(0);  // Notifica OUT_OF_STOCK