(function () {
    var gpio = require('pi-gpio');

    var retries = 10,
        pin = 14,
        wateringPin = 15;

    function chargeTime(pin) {
        gpio.open(pin, 'output');
        gpio.write(pin, 0);
        setTimeout(function () {
            var startTime = new Date();
            gpio.setDirection(pin, 'in');
            while (gpiot.read(pin) === 0) {
                setTimeout(function () {
                    if (new Date() - startTime > 3) {
                        return {
                            state: true,
                            chargeTime: new Date() - startTime
                        };
                    }
                }, 100);
            }

            return {
                state: false,
                chargeTime: new Date() - startTime
            };
        });
    }

    function watering(pin) {
        gpio.open(pin, 'out');
        gpio.write(pin, 1);
        setTimeout(function () {
            gpio.write(pin, 0);
        }, 10000);
    }

    while (true) {
        setTimeout(function () {
            var checks = [],
                count = 0;

            for (var i = 0; i < retries; i++) {
                checks.push(chargeTime(pin));
            }

            checks.forEach(function (item) {
                if (item.state === false) {
                    count += 1;
                }
            });

            if (count > retries / 2) {
                watering(wateringPin);
            }
        }, 360000);
    }
})();
