function battle(squadron, commands) {
    let executor = {
        destroy(index) {
            if (!this.isIndexValid(index)) {
                return;
            }

            squadron.splice(index, 1);
            console.log(squadron);
        },
        swap(index1, index2) {
            if (!this.isIndexValid(index1) || !this.isIndexValid(index2)) {
                return;
            }

            let temp = squadron[index1];
            squadron[index1] = squadron[index2];
            squadron[index2] = temp;
            console.log(squadron);
        },
        add(soldier) {
            squadron.push(soldier);
            console.log(squadron);
        },
        insert(soldier, index) {
            if (!this.isIndexValid(index)) {
                return;
            }

            squadron.splice(index, 0, soldier);
            console.log(squadron);
        },
        center() {
            if (squadron.length % 2 === 0) {
                let index = (squadron.length / 2) - 1;
                console.log(squadron.slice(index, index + 2));
            } else {
                let index = Math.floor(squadron.length / 2);
                console.log(squadron[index])
            }
        },
        isIndexValid(index) {
            if (index < 0 || index >= squadron.length) {
                return false;
            }

            return true;
        }
    };

    for (let i = 0; i < commands.length; i++) {
        let [command, value1, value2] = commands[i].split(' ');
        command = command.toLowerCase();
        value1 = Number(value1);
        value2 = Number(value2)
        executor[command](value1, value2);
    }
}

// battle(
//     [1, 2, 3, 4, 5],
//     [
//         "destroy 5",
//         "swap -1 1",
//         "center",
//         "add 6",
//         "insert 4 7",
//         "insert 7 4",
//         "insert 8 2",
//         "center"
//     ]
// );