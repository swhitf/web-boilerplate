module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: [
        './test/setup.ts'
    ],
    testEnvironment: 'jsdom',
};