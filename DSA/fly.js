function minFlights(fuels) {
    let path = [];
    let airport = 0; // Start from the first airport

    for (let i = 0; i < fuels.length; i++) {
        path.push(fuels[airport]); // Store the fuel of the current airport

        if (airport + fuels[airport] >= fuels.length - 1) {
            path.push(fuels[fuels.length - 1]); // Add last airport's fuel if reachable
            break;
        }

        let bestAirport = airport;
        let maxReach = 0;

        for (let next = 1; next <= fuels[airport]; next++) {
            let possibleAirport = airport + next;
            if (possibleAirport < fuels.length && possibleAirport + fuels[possibleAirport] > maxReach) {
                maxReach = possibleAirport + fuels[possibleAirport];
                bestAirport = possibleAirport;
            }
        }

        if (bestAirport === airport) {
            console.log("Not possible to reach the last airport");
            return [];
        }
        airport = bestAirport;
    }
    return path;
}