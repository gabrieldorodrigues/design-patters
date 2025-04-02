// Interface do veículo
interface Vehicle {
    propulsion: string;
    control: string;
    operate(): void;
  }
  
  // Implementações para o ambiente Terra
  
  // Carro Voador
  class FlyingCar implements Vehicle {
    propulsion: string;
    control: string;
  
    constructor() {
      this.propulsion = "Motor a Jato";
      this.control = "Inteligência Artificial";
    }
  
    operate(): void {
      console.log(`Carro Voador operando com ${this.propulsion} e ${this.control}.`);
    }
  }
  
  // Moto Autônoma
  class AutonomousMotorcycle implements Vehicle {
    propulsion: string;
    control: string;
  
    constructor() {
      this.propulsion = "Motor Elétrico";
      this.control = "Controle Autônomo";
    }
  
    operate(): void {
      console.log(`Moto Autônoma operando com ${this.propulsion} e ${this.control}.`);
    }
  }
  
  // Implementações para o ambiente Espaço
  
  // Nave
  class Spaceship implements Vehicle {
    propulsion: string;
    control: string;
  
    constructor() {
      this.propulsion = "Propulsor de Plasma";
      this.control = "IA Avançada";
    }
  
    operate(): void {
      console.log(`Nave operando com ${this.propulsion} e ${this.control}.`);
    }
  }
  
  // Explorador Robótico
  class RoboticExplorer implements Vehicle {
    propulsion: string;
    control: string;
  
    constructor() {
      this.propulsion = "Motor de Íons";
      this.control = "Controle Manual Robótico";
    }
  
    operate(): void {
      console.log(`Explorador Robótico operando com ${this.propulsion} e ${this.control}.`);
    }
  }
  
  // Interface da Abstract Factory para criação de veículos
  interface VehicleFactory {
    createVehicle1(): Vehicle;
    createVehicle2(): Vehicle;
  }
  
  // Fábrica concreta para o ambiente Terra
  class TerraVehicleFactory implements VehicleFactory {
    createVehicle1(): Vehicle {
      return new FlyingCar();
    }
  
    createVehicle2(): Vehicle {
      return new AutonomousMotorcycle();
    }
  }
  
  // Fábrica concreta para o ambiente Espaço
  class SpaceVehicleFactory implements VehicleFactory {
    createVehicle1(): Vehicle {
      return new Spaceship();
    }
  
    createVehicle2(): Vehicle {
      return new RoboticExplorer();
    }
  }
  
  // Código Cliente para testar as fábricas
  function testVehicleFactory(factory: VehicleFactory): void {
    const vehicle1 = factory.createVehicle1();
    const vehicle2 = factory.createVehicle2();
  
    vehicle1.operate();
    vehicle2.operate();
  }
  
  console.log("Teste: Veículos para Terra");
  const terraFactory: VehicleFactory = new TerraVehicleFactory();
  testVehicleFactory(terraFactory);
  
  console.log("\nTeste: Veículos para Espaço");
  const spaceFactory: VehicleFactory = new SpaceVehicleFactory();
  testVehicleFactory(spaceFactory);
  