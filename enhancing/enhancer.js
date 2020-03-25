module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement < 20) {
    const newItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement + 1
    };
    return newItem;
  } else {
    return item;
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    const lowLevel = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement
    };

    return lowLevel;

  } else if (item.enhancement === 15) {
    const midLevel = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement
    };

    return midLevel;

} else if (item.enhancement > 15) {
    const highLevel = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1
    };

    return highLevel;
  }
}

function repair(item) {
  const newItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return newItem;
}

function get(item) {
  return { ...item };
}
