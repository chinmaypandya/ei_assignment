// NewPaymentGateway.ts
// This is the new payment gateway that we want to integrate into the old system.

export class NewPaymentGateway {
    // Process payment using the new system
    public processPayment(amount: number): void {
        console.log(`Payment of $${amount} processed through the new payment gateway.`);
    }
}
