class HotelReservation {
    constructor(
        public readonly roomType: string,
        public readonly nights: number,
        public readonly hasBreakfast: boolean = false,
        public readonly hasSeaView: boolean = false,
        public readonly hasPremiumWifi: boolean = false,
        public readonly hasLateCheckout: boolean = false
    ) {}
}

class HotelReservationBuilder {
    private roomType?: string;
    private nights?: number;
    private hasBreakfast = false;
    private hasSeaView = false;
    private hasPremiumWifi = false;
    private hasLateCheckout = false;

    setRoomType(roomType: string): this {
        this.roomType = roomType;
        return this;
    }

    setNights(nights: number): this {
        this.nights = nights;
        return this;
    }

    addBreakfast(): this {
        this.hasBreakfast = true;
        return this;
    }

    addSeaView(): this {
        this.hasSeaView = true;
        return this;
    }

    addPremiumWifi(): this {
        this.hasPremiumWifi = true;
        return this;
    }

    addLateCheckout(): this {
        this.hasLateCheckout = true;
        return this;
    }

    build(): HotelReservation {
        if (!this.roomType || !this.nights) {
            throw new Error("Room type and nights are required");
        }
        return new HotelReservation(
            this.roomType,
            this.nights,
            this.hasBreakfast,
            this.hasSeaView,
            this.hasPremiumWifi,
            this.hasLateCheckout
        );
    }
}

class HotelReservationDirector {
    static createStandardWithoutBreakfast(nights: number): HotelReservation {
        return new HotelReservationBuilder()
            .setRoomType("Standard")
            .setNights(nights)
            .addSeaView()
            .build();
    }

    static createLuxuryPackage(nights: number): HotelReservation {
        return new HotelReservationBuilder()
            .setRoomType("Luxo")
            .setNights(nights)
            .addBreakfast()
            .addSeaView()
            .addPremiumWifi()
            .addLateCheckout()
            .build();
    }

    static createPresidentialStay(nights: number): HotelReservation {
        return new HotelReservationBuilder()
            .setRoomType("Presidencial")
            .setNights(nights)
            .addPremiumWifi()
            .addLateCheckout()
            .build();
    }
}