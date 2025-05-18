class Car {
    private readonly optionalFeatures: number;

    constructor(
        public readonly model: string,
        public readonly engineType: string,
        public readonly color?: string,
        public readonly transmission?: string,
        public readonly hasSunroof: boolean = false,
        public readonly hasPremiumSound: boolean = false,
        public readonly hasLeatherSeats: boolean = false
    ) {
        this.optionalFeatures = [
            color,
            transmission,
            hasSunroof,
            hasPremiumSound,
            hasLeatherSeats
        ].filter(Boolean).length;
        
        if (this.optionalFeatures < 2) {
            throw new Error("At least two optional features required");
        }
    }
}

class CarBuilder {
    private model?: string;
    private engineType?: string;
    private color?: string;
    private transmission?: string;
    private hasSunroof = false;
    private hasPremiumSound = false;
    private hasLeatherSeats = false;

    constructor(model: string, engineType: string) {
        this.model = model;
        this.engineType = engineType;
    }

    setColor(color: string): this {
        this.color = color;
        return this;
    }

    setTransmission(transmission: string): this {
        this.transmission = transmission;
        return this;
    }

    addSunroof(): this {
        this.hasSunroof = true;
        return this;
    }

    addPremiumSound(): this {
        this.hasPremiumSound = true;
        return this;
    }

    addLeatherSeats(): this {
        this.hasLeatherSeats = true;
        return this;
    }

    build(): Car {
        if (!this.model || !this.engineType) {
            throw new Error("Model and engine type are required");
        }
        return new Car(
            this.model,
            this.engineType,
            this.color,
            this.transmission,
            this.hasSunroof,
            this.hasPremiumSound,
            this.hasLeatherSeats
        );
    }
}

class CarDirector {
    static createAutomaticSedan(): Car {
        return new CarBuilder("Sedan", "Gasolina")
            .setTransmission("Automático")
            .setColor("Preto")
            .addSunroof()
            .build();
    }

    static createManualSportsCar(): Car {
        return new CarBuilder("Esportivo", "Híbrido")
            .setTransmission("Manual")
            .setColor("Vermelho")
            .addLeatherSeats()
            .addPremiumSound()
            .build();
    }

    static createElectricLuxury(): Car {
        return new CarBuilder("Luxo", "Elétrico")
            .setColor("Branco")
            .addSunroof()
            .addPremiumSound()
            .addLeatherSeats()
            .build();
    }
}