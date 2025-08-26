const GAME_NAME = "SevenUpDown";

export const settings = {
    id: 103,
    name: GAME_NAME,
    namespaces: ["7Up7Down"],
    observerNamespace: GAME_NAME,
    durations: {
        wholeRound: 33,
        lockingBet: 3,
        placingBet: 20,
        generatingResult: 9,
        startRound: 1,
    },
    numberOfRoundHistory: 100,
    isMiniGame: true,
};

