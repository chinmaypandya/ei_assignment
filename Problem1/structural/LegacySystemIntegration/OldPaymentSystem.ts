// OldPaymentSystem.ts
// This is the legacy payment system that we want to integrate with.

export class OldPaymentSystem {
    // Process payment using the old method
    public makePayment(amount: number): void {
        console.log(`Payment of $${amount} made using the old payment system.`);
    }
}
