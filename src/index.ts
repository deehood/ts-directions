const opposite = (direction: string): string => {
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

export function dirReduc(arr: string[]): string[] {
    let index = 0;

    while (index < arr.length - 1 && arr.length > 1) {
        index++;

        while (arr[index] === opposite(arr[index - 1])) {
            arr.splice(index - 1, 2);
            if (arr.length < 2) return arr;
            if (index > 1) index--;
        }
    }
    return arr;
}
console.log(
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]));

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]));
console.log(dirReduc([]));
console.log(dirReduc(["NORTH"]));
console.log(
    dirReduc([
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
    ])
);
