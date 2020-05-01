const { succeed, repair, fail } = require("./enhancer.js");

describe("enhancer.js", () => {
  describe(".succeed()", () => {
    it("should increase level by 1", () => {
      const item = {
        name: "Excalibur",
        durability: 21,
        enhancement: 19
      };
      const expected = {
        name: "Excalibur",
        durability: 100,
        enhancement: 20
      };

      const enhancedItem = succeed(item);
      expect(enhancedItem).toEqual(expected);
    });
  });

  describe(".repair()", () => {
    it("repairs an item back to 100 durabilty", () => {
      const item = {
        name: "Excalibur",
        durability: 22,
        enhancement: 15
      };

      const expected = {
        name: "Excalibur",
        durability: 100,
        enhancement: 15
      };

      const repaired = repair(item);

      expect(repaired).toEqual(expected);
    });
  });

  describe(".fail", () => {
    it("decreases durability by 5 if enhancement is below level 15", () => {
      const common = {
        name: "Excalibur",
        durability: 33,
        enhancement: 14
      };

      const expectedCommon = {
        name: "Excalibur",
        durability: 28,
        enhancement: 14
      };

      const failLowLevel= fail(common);

      expect(failLowLevel).toEqual(expectedCommon);
    });

    it("decreases durability by 10 above level 15 enhancement", () => {
        const rare = {
            name: "Excalibur",
            durability: 33,
            enhancement: 15
        };

        const expectedRare = {
            name: "Excalibur",
            durability: 23,
            enhancement: 15
        };

        const rareItemEnhanceFail = fail(rare);

        expect(rareItemEnhanceFail).toEqual(expectedRare);
    });

    it("decreases the durability by 10 and enhancement by 1 for items with enhancement above level 15", () => {
        const legendary = {
            name: "Excalibur",
            durability: 23,
            enhancement: 29
        };

        const expectedLegendary = {
            name: "Excalibur",
            durability: 13,
            enhancement: 28
        };

        const legendaryEnhanceFail = fail(legendary)
        expect(legendaryEnhanceFail).toEqual(expectedLegendary)
    })
  });
});
// test away!
