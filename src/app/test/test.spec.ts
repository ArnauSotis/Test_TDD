import { test1 } from "./test";

describe('test43', () => { 
    it('Debe ser 0', () => {
        const result = test1(-1);
        expect(result).toBe(0);
    })
})

import { suma } from "./test";

describe('test43', () => { 
    it('Debe ser 5', () => {
        const result = suma(2,3);
        expect(result).toBe(5);
    })
    it('Debe ser 6', () => {
        const result = suma(3,3);
        expect(result).toBe(6);
    })
    it('Debe ser 0', () => {
        const result = suma(0,0);
        expect(result).toBe(0);
    })
})

import { multi } from "./test";

describe('test43344334', () => { 
    it('should return 0 if input is negative', () => {
        const result = multi(2,3);
        expect(result).toBe(6);
    })
})