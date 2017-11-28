require('../styles/styles.scss');
require('intersection-observer');

import Coins from './components/coins/coins-component';





function init() {


    const coins = new Coins();


}
document.addEventListener('DOMContentLoaded', () => {
    init(); // Udkommenteres til launch i webdok, da vi ikke får event dér
});

