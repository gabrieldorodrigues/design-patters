class BurgerOrder {
    constructor(
        public readonly breadType: string,
        public readonly protein: string,
        public readonly hasCheese: boolean = false,
        public readonly hasLettuce: boolean = false,
        public readonly hasTomato: boolean = false,
        public readonly hasOnion: boolean = false,
        public readonly hasSpecialSauce: boolean = false,
        public readonly drink?: string
    ) {}
}

class BurgerOrderBuilder {
    private breadType?: string;
    private protein?: string;
    private hasCheese = false;
    private hasLettuce = false;
    private hasTomato = false;
    private hasOnion = false;
    private hasSpecialSauce = false;
    private drink?: string;

    setBreadType(breadType: string): this {
        this.breadType = breadType;
        return this;
    }

    setProtein(protein: string): this {
        this.protein = protein;
        return this;
    }

    addCheese(): this {
        this.hasCheese = true;
        return this;
    }

    addLettuce(): this {
        this.hasLettuce = true;
        return this;
    }

    addTomato(): this {
        this.hasTomato = true;
        return this;
    }

    addOnion(): this {
        this.hasOnion = true;
        return this;
    }

    addSpecialSauce(): this {
        this.hasSpecialSauce = true;
        return this;
    }

    setDrink(drink: string): this {
        this.drink = drink;
        return this;
    }

    build(): BurgerOrder {
        if (!this.breadType || !this.protein) {
            throw new Error("Bread type and protein are required");
        }
        return new BurgerOrder(
            this.breadType,
            this.protein,
            this.hasCheese,
            this.hasLettuce,
            this.hasTomato,
            this.hasOnion,
            this.hasSpecialSauce,
            this.drink
        );
    }
}

class BurgerDirector {
    static createCheeseburgerWithoutTomato(): BurgerOrder {
        return new BurgerOrderBuilder()
            .setBreadType("Brioche")
            .setProtein("Beef")
            .addCheese()
            .addLettuce()
            .addOnion()
            .addSpecialSauce()
            .build();
    }

    static createVegetarianDeluxe(): BurgerOrder {
        return new BurgerOrderBuilder()
            .setBreadType("Whole Grain")
            .setProtein("Vegetarian")
            .addCheese()
            .addLettuce()
            .addTomato()
            .addOnion()
            .setDrink("Soda")
            .build();
    }

    static createBasicBurger(): BurgerOrder {
        return new BurgerOrderBuilder()
            .setBreadType("Classic")
            .setProtein("Chicken")
            .addLettuce()
            .addTomato()
            .build();
    }
}