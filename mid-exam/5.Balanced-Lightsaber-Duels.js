function isLegendary(attacks) {
    const NEGATIVE = "Not Legendary";
    const POSITIVE = "Legendary";
    let result = POSITIVE;

    if (attacks.length % 2 !== 0) {
        result = NEGATIVE;
    } else {
        let strike;
        let stack = [];
        let judge = {
            ")"() {
                strike = stack.pop();
                if (strike !== '(') {
                    result = NEGATIVE;
                }
            },
            "}"() {
                strike = stack.pop();
                if (strike !== '{') {
                    result = NEGATIVE;
                }
            },
            "!"() {
                strike = stack.pop();
                if (strike !== '!') {
                    result = NEGATIVE;
                }
            }
        }

        for (let i = 0; i < attacks.length; i++) {
            let attack = attacks[i];
            if (attack === '(' || attack === '{') {
                stack.push(attack);
                continue;
            }

            if (attack === '!' && stack[stack.length - 1] !== '!') {
                stack.push(attack);
                continue;
            }

            judge[attack]();
            if (result === NEGATIVE)
                break;
        }
    }

    console.log(result);
}

// isLegendary("((!!{)}(({!!})))");