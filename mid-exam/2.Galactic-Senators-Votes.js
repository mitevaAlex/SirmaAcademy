function determineMajority(votes) {
    votes = votes.map(x => x.toLowerCase());
    let votesCounts = {
        yes: 0,
        no: 0,
        abstain: 0
    };
    for (let i = 0; i < votes.length; i++) {
        votesCounts[votes[i]]++;
    }

    let result;
    if (votesCounts.yes === votesCounts.no && votesCounts.yes !== 0) {
            result = "Tie";
    } else {
        if(votesCounts.yes > votesCounts.no) {
            result = "Yes";
        } else if (votesCounts.yes < votesCounts.no) {
            result = "No";
        } else {
            result = "Abstain";
        }
    }

    console.log(result);
}

// determineMajority(["abstain", "abstain", "yes", "no"]);