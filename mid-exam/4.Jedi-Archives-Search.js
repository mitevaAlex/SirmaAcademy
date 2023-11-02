function findFirstAndLast(records, wanted) {
    let firstOccur = records.indexOf(wanted);
    let lastOccur = records.lastIndexOf(wanted);

    if(firstOccur < 0) {
        console.log("Record not found");
        return;
    }

    console.log(`First Occurrence: ${firstOccur}`);
    console.log(`Last Occurrence: ${lastOccur}`);
}

// findFirstAndLast(["Yoda", "Obi-Wan", "Luke", "Anakin", "Luke"], "Luke");