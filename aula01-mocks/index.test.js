const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')

;(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }

    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }

    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
                "name": "Evandro Neris",
                "id": 123,
                "profession": "Javascript",
                "birthDay": 1998
            },
            {
                "name": "Xuxa silva",
                "id": 321,
                "profession": "teste",
                "birthDay": 1941
            },
            {
                "name": "Joaosiznho",
                "id": 231,
                "profession": "java",
                "birthDay": 1991
            }
        ]

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }
})()