// PaymentAdapter.ts
// Adapter class that allows the new payment gateway to be used where the old system is expected.

import { OldPaymentSystem } from "./OldPaymentSystem";
import { NewPaymentGateway } from "./NewPaymentGateway";

export class PaymentAdapter extends OldPaymentSystem {
    private newPaymentGateway: NewPaymentGateway;

    constructor() {
        super();
        this.newPaymentGateway = new NewPaymentGateway();
    }

    // Override the old method to use the new payment gateway
    public makePayment(amount: number): void {
        this.newPaymentGateway.processPayment(amount);
    }
}
