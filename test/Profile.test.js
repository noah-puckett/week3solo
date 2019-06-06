import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('Profile Component');

test('renders with full user props', assert => {
    // arrange
    const user = {
        displayName: 'Noah P',
        photoURL: 'https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg'
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div class="profile">
            <img src="https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg">
            <span class="username">Noah P</span>
            <button>Log Out???</button>
        </div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});

test('renders with default avatar when no photoURL', assert => {
    // arrange
    const user = {
        displayName: 'Noah P',
        photoURL: null
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div class="profile">
            <img src="./assets/hahaha.jpg">
            <span class="username">Noah P</span>
            <button>Log Out???</button>
        </div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});

test('renders empty div when no user', assert => {
    // arrange
    const user = null;
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div></div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});