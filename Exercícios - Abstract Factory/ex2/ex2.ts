// Interface para as criaturas mágicas
interface Creature {
    attack(): void;
  }
  
  // Criaturas do Reino do Fogo
  
  // Dragões são criaturas fortes
  class Dragon implements Creature {
    attack(): void {
      console.log("O Dragão cospe fogo e ataca com força!");
    }
  }
  
  // Salamandras são criaturas velozes
  class Salamander implements Creature {
    attack(): void {
      console.log("A Salamandra se move rapidamente, atacando com agilidade!");
    }
  }
  
  // Criaturas do Reino da Água
  
  // Serpentes Marinhas são criaturas fortes
  class SeaSerpent implements Creature {
    attack(): void {
      console.log("A Serpente Marinha investe com poder, esmagando seus inimigos!");
    }
  }
  
  // Tritões são criaturas velozes
  class Triton implements Creature {
    attack(): void {
      console.log("O Tritão ataca com velocidade surpreendente, dominando as águas!");
    }
  }
  
  // Interface da Abstract Factory para criação de criaturas mágicas
  interface CreatureFactory {
    createStrongCreature(): Creature;
    createAgileCreature(): Creature;
  }
  
  // Fábrica concreta para o Reino do Fogo
  class FireRealmCreatureFactory implements CreatureFactory {
    createStrongCreature(): Creature {
      return new Dragon();
    }
    createAgileCreature(): Creature {
      return new Salamander();
    }
  }
  
  // Fábrica concreta para o Reino da Água
  class WaterRealmCreatureFactory implements CreatureFactory {
    createStrongCreature(): Creature {
      return new SeaSerpent();
    }
    createAgileCreature(): Creature {
      return new Triton();
    }
  }
  
  // Código Cliente
  function testCreatureFactory(factory: CreatureFactory): void {
    const strongCreature: Creature = factory.createStrongCreature();
    const agileCreature: Creature = factory.createAgileCreature();
    
    strongCreature.attack();
    agileCreature.attack();
  }
  
  console.log("Teste: Reino do Fogo");
  const fireFactory: CreatureFactory = new FireRealmCreatureFactory();
  testCreatureFactory(fireFactory);
  
  console.log("\nTeste: Reino da Água");
  const waterFactory: CreatureFactory = new WaterRealmCreatureFactory();
  testCreatureFactory(waterFactory);
  