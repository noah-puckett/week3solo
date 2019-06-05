import './html-equal.js';
// import utilities and custom assertions
import './Profile.test.js';
import { app } from '../src/services/firebase.js'; 

QUnit.done(() => {
    app.delete();
}); 