const test = QUnit.test;
QUnit.module('Unnamed function test');

//I want this function to take my url and return the id
//then I want to place the id in a string and return it

function urlToString(url) {
    

    return string;
}

test('renders with full user props', assert => {
    // arrange
    const roomId = 'http://localhost:5500/chat.html?key=-LgjP9pCvf0LIsvPD1MG';

    const expected = 'LgjP9pCvf0LIsvPD1MG';

    // act
    const result = urlToString(roomId);

    // assert
    assert.equal(result, expected);
});