export class Effect {

    constructor() {    }

    withValues(values) {
        return { ...this, ...values };
    }

    apply(day) {
        //if trigger(day) && Math.random() > chance return true
    }

    isOverride() {
        //returns true if it should override the current day's naming schema with its own name value
    }

}