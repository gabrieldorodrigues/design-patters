// Interface dos brinquedos
interface Toy {
    play(): void;
}

// Implementações dos brinquedos

class PlasticCar implements Toy {
    play(): void {
        console.log("Brincando com um carrinho de plástico!");
    }
}

class WoodenCar implements Toy {
    play(): void {
        console.log("Brincando com um carrinho de madeira!");
    }
}

class PlasticDoll implements Toy {
    play(): void {
        console.log("Brincando com uma boneca de plástico!");
    }
}

class WoodenDoll implements Toy {
    play(): void {
        console.log("Brincando com uma boneca de madeira!");
    }
}

// Interface da fábrica de brinquedos
interface ToyFactory {
    createCar(): Toy;
    createDoll(): Toy;
}

// Fábricas concretas

class PlasticToyFactory implements ToyFactory {
    createCar(): Toy {
        return new PlasticCar();
    }
    createDoll(): Toy {
        return new PlasticDoll();
    }
}

class WoodenToyFactory implements ToyFactory {
    createCar(): Toy {
        return new WoodenCar();
    }
    createDoll(): Toy {
        return new WoodenDoll();
    }
}

// Código Cliente para testar as fábricas

function testToyFactory(factory: ToyFactory): void {
    const car: Toy = factory.createCar();
    const doll: Toy = factory.createDoll();
    
    car.play();
    doll.play();
}

console.log("Teste da Fábrica de Plástico:");
const plasticFactory: ToyFactory = new PlasticToyFactory();
testToyFactory(plasticFactory);

console.log("\nTeste da Fábrica de Madeira:");
const woodenFactory: ToyFactory = new WoodenToyFactory();
testToyFactory(woodenFactory);
