'use strict';

import {create, select} from '../../utils/trix-utils';




export default class Coins {
    constructor(conf) {

        this.build();
        this.setup();
        this.coinValues = {
            customer: 50,
            pusher: 45,
            rocker: 30,
            grossist: 20,
            smuggler: 10,
            farmer: 4
        }

    }

    build() {

        this.coinsWrapper = select('#coins');
        console.log(this.coinsWrapper)
        for (let n=0; n<=50; n++) {
            const coin = create('div',  this.coinsWrapper, 'coin')
            coin.classList.add('coin-' + n);
        }
    }

    setup() {

        const step = document.body.scrollHeight + window.innerHeight / 50;




          var options = {
            root: null,
            rootMargin: "0px",
          };

          const observer = new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) {
                    console.log(entries[0].target.dataset.type);

                    var pctScrolled = this.coinValues[entries[0].target.dataset.type];
                    for (let n=0; n<=50; n++) {

                        const coin = select('.coin-' + n);
                        //console.log(n, pctScrolled)
                        if (n < 50-pctScrolled) {
                            coin.classList.add('hidden')
                        } else {
                            coin.classList.remove('hidden')
                        }
                    }
                }

          }, options);

          const cards = document.querySelectorAll('.card');

          cards.forEach(card => {
            observer.observe(card);
          });



          /*
        window.addEventListener('scroll', (e) => {


                var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
                var docheight = this.getDocHeight()
                var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
                var trackLength = docheight - winheight
                var pctScrolled = Math.floor((scrollTop/trackLength * 100)/2) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

                for (let n=0; n<=50; n++) {

                    const coin = select('.coin-' + n);
                    if (n < pctScrolled) {
                        coin.classList.add('hidden')
                    } else {
                        coin.classList.remove('hidden')
                    }
                }*/




    }
    /*
    getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    }
    handleScroll(e) {
        console.log(e)
    }*/

}