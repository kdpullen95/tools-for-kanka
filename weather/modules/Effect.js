export class Effect {

    name;
    override = false;
    chance = 0.4;
    trigger = () => { return true };

    constructor() {    }

    withValues(values) {
        return { ...this, ...values };
    }

    apply(day) {
        return this.trigger(day) && Math.random() > this.chance;
    }

    isOverride() {
        return this.override;
    }

}