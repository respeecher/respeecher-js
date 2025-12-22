/** @type {import('jest').Config} */
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "(.+)\.js$": "$1",
    },
    transformIgnorePatterns: [
        'node_modules/(?!until-async/)',
    ],
    setupFilesAfterEnv: ["<rootDir>/tests/mock-server/setup.ts"],
};
