"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirReduc = void 0;
const opposite = (direction) => {
    switch (direction) {
        case "NORTH":
            return "SOUTH";
        case "SOUTH":
            return "NORTH";
        case "WEST":
            return "EAST";
        case "EAST":
            return "WEST";
        default:
            throw new Error("Invalid directions found");
    }
};
function dirReduc(arr) {
    let index = 0;
    // iter = 0;
    while (index < arr.length - 1 && arr.length > 1) {
        index++;
        // iter = 0;
        while (arr[index] === opposite(arr[index - 1])) {
            // iter++;
            arr.splice(index - 1, 2);
            if (arr.length < 2)
                return arr;
            if (index > 1)
                index--;
        }
        // if (iter > 1 && index > 1) index -= iter - 1;
    }
    return arr;
}
exports.dirReduc = dirReduc;
// console.log(
//     dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
// );
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]));
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
// console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]));
// console.log(dirReduc([]));
// console.log(dirReduc(["NORTH"]));
console.log(dirReduc([
    "NORTH",
    "WEST",
    "EAST",
    "SOUTH",
    "SOUTH",
    "WEST",
    "SOUTH",
    "NORTH",
    "WEST",
    "NORTH",
    "NORTH",
    "WEST",
    "EAST",
    "SOUTH",
    "SOUTH",
    "EAST",
    "WEST",
    "EAST",
]));
//# sourceMappingURL=index.js.map