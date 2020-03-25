const { succeed, repair, fail } = require("./enhancer.js");

describe("enhancer.js", () => {
  describe(".succeed()", () => {
    it("should level up enhancement by 1", () => {
      const item = {
        name: "Saradomin Sword",
        durability: 21,
        enhancement: 19
      };
      const expected = {
        name: "Saradomin Sword",
        durability: 100,
        enhancement: 20
      };

      const enhancedItem = succeed(item);
      expect(enhancedItem).toEqual(expected);
    });
  });

  describe(".repair()", () => {
    it("takes in an item and changes durability to 100", () => {
      const item = {
        name: "Saradomin Sword",
        durability: 10,
        enhancement: 15
      };

      const expected = {
        name: "Saradomin Sword",
        durability: 100,
        enhancement: 15
      };

      const repairedItem = repair(item);

      expect(repairedItem).toEqual(expected);
    });
  });

  describe(".fail", () => {
    it("decreases durability by 5 below level 15 enhancement", () => {
      const lowLevelItem = {
        name: "Saradomin Sword",
        durability: 50,
        enhancement: 14
      };

      const lowLevelExpected = {
        name: "Saradomin Sword",
        durability: 45,
        enhancement: 14
      };

      const failLowLevel= fail(lowLevelItem);

      expect(failLowLevel).toEqual(lowLevelExpected);
    });

    it("decreases durability by 10 above level 15 enhancement", () => {
        const midLevelItem = {
            name: "Saradomin Sword",
            durability: 33,
            enhancement: 15
        };

        const midLevelExpected = {
            name: "Saradomin Sword",
            durability: 23,
            enhancement: 15
        };

        const failMidLevel = fail(midLevelItem);

        expect(failMidLevel).toEqual(midLevelExpected);
    });

    it("decreases the durability by 10 and enhancement by 1 for items with enhancement above level 15", () => {
        const highLevelItem = {
            name: "Saradomin Sword",
            durability: 23,
            enhancement: 29
        };

        const highLevelExpected = {
            name: "Saradomin Sword",
            durability: 13,
            enhancement: 28
        };

        const failHighLevel = fail(highLevelItem)
        expect(failHighLevel).toEqual(highLevelExpected)
    })
  });
});
// test away!
