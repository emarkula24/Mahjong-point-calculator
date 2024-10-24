import { describe, it, expect } from "vitest";
import isChun from "./Chun";

describe("isChun", () => {

    it("should return true if there are exactly 3 red dragon tiles in the hand list of objects", () => {
        const hand = [
            { value: 'red' },
            { value: 'red' },
            { value: 'red' },
            { value: 'green' }
        ];
        expect(isChun(hand)).toBe(true);
    });

    it('should return true when there are more than 3 red dragon tiles', () => {
        const hand = [
            { value: 'red' },
            { value: 'red' },
            { value: 'red' },
            { value: 'red' }
        ];
        expect(isChun(hand)).toBe(true);
    });

    it('should return false when there are no red dragon tiles', () => {
        const hand = [
            { value: 'green' },
            { value: 'green' },
            { value: 'green' }
        ];
        expect(isChun(hand)).toBe(false);
    });

    it('should return false when the hand is empty', () => {
        const hand = [];
        expect(isChun(hand)).toBe(false);
    });

});