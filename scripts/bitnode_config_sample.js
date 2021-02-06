let bitnode_levels = {
  one: "0",
  two: "0",
  three: "0",
  four: "0",
  five: "0",
  six: "0",
  seven: "0",
  eight: "0",
  nine: "0",
  ten: "0",
  eleven: "0",
  twelve: "0",
};

let current_bitnode = 1;

export function node_one_level() {
  return bitnode_levels.one;
}
export function node_two_level() {
  if (current_bitnode == 2) {
    return 3;
  } else {
    return bitnode_levels.two;
  }
}
export function node_three_level() {
  if (current_bitnode == 3) {
    return 3;
  } else {
    return bitnode_levels.three;
  }
}
export function node_four_level() {
  if (current_bitnode == 4) { 
    return 3 
  } else {
    return bitnode_levels.four;
  }
}
// Bitnode 5 is special, it unlocks
// getBitNodeMultipliers only AFTER
// you get level one of the source
// file
export function node_five_level() {
  return bitnode_levels.five;
}
// Bitnode 6 lets you access bladeburners
// but NOT the bladeburner API
export function node_six_level() {
  return bitnode_levels.six;
}
export function node_seven_level() {
  if (current_node == 7) {
    return 3;
  } else {
    return bitnode_levels.seven;
  }
}
export function node_eight_level() {
  if (current_node == 8) {
    return 3;
  } else {
    return bitnode_levels.eight;
  }
}
export function node_nine_level() {
  if (current_node == 9) {
    return 3;
  } else {
    return bitnode_levels.nine;
  }
}
export function node_ten_level() {
  if (current_node == 10) {
    return 3;
  } else {
    return bitnode_levels.ten;
  }
}
export function node_eleven_level() {
  return bitnode_levels.eleven;
}
export function node_twelve_level() {
  return bitnode_levels.twelve;
}
