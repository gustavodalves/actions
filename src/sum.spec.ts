import sum from "./sum"

describe("sum", () => {
    it("shoud be able do sum", () => {
        const result = sum(1,2,3)

        expect(result).toBe(6)
    })
})