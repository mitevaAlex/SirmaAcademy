function countWompRats(initialCount, increase, hours) {
    let totalRats = 0;
    let currRats = initialCount;
    for (let hour = 0; hour < hours; hour++) {
        totalRats += currRats;
        currRats += increase;
    }

    console.log(totalRats);
}

// countWompRats(8, -2, 3);