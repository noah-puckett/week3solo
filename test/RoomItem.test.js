import RoomItem from '../src/chat/RoomItem.js';

const test = QUnit.test;
QUnit.module('Profile Component');

test('Can my dumb room ITEM return something DYNAMICALLY?', assert => {
    // arrange
    const room = {
        key: '-LgdScWdzi4YwpxDYSM3',
        name: 'Test Room',
        owner: 'f8xmKv9WA0a28uMMVo3IUaaGyJg1'
    };

    const roomItem = new RoomItem({ room });

    const expected = /*html*/`
        <li>
            <a href="./chat.html?key=-LgdScWdzi4YwpxDYSM3">Test Room</a>
        </li>
    `;

    // act
    const rendered = roomItem.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});