import RoomItem from '../src/chat/RoomItem.js';

const test = QUnit.test;

QUnit.module('Profile Component');


test('Can my dumb room ITEM return something DYNAMICALLY?', assert => {
    // arrange
    const room = {
        key: '-LgdScWdzi4YwpxDYSM3',
        name: 'Test Room'
    };

    const roomItem = new RoomItem({ room });

    const expected = /*html*/`
        <li>
            <a href="./chat.html?key=${room.key}">${room.name}</a>
            <button>Delete Room</button>
        </li>
    `;

    // act
    const rendered = roomItem.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});
//