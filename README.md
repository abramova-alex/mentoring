Raspberry Pi Soil Moisture tool
=======
Capacitance and Dielectrics
-----------
![Alt text](capacitor.png?raw=true "A parallel plate capacitor")
Take a standard parallel plate capacitor. Water has a very large dielectric constant. A capacitor that has water between the plates have a capacitance that is 100 times higher than the same capacitor using air.
Make a capacitor using the soil as our dielectric. If the soil is moist, the capacitor contains more water. This will result in a higher capacitance. If the soil is dry the capacitance will be lower.
![Alt text](co-planar.png?raw=true "A co-planar plate capacitor")
As a basis for the sensor use a co-planar plate capacitor. The electric field lines extend outward from the plates into the dielectric on both sides.
![Alt text](co-planar2.png?raw=true)
![Alt text](co-planar2.png?raw=true)
![Alt text](co-planar3.png?raw=true)

Sensor & Circuit Design
-----------
![Alt text](schema.png?raw=true)
An RC circuit provides a quick & simple way to measure changes in the sensor capacitance due to changes in soil water content.
Every RC circuit has an associated time constant. Time it takes the capacitor to reach ~ 63% of its maximum charge.
The time constant is used to measure changes in the sensor capacitance due to changes in soil water content. The Raspberry Pi GPIO Pin 14 measures, or
counts, the circuit time constant (how long it takes the capacitor to charge).

Tool box
-----------
  * Raspberry pi
  * Image [RASPBIAN JESSIE](https://www.raspberrypi.org/downloads/raspbian/)
  * Printed Sensor [schematic](https://sites.google.com/site/drxzcl/capsensor.sch) and [board file](https://sites.google.com/site/drxzcl/capsensor.brd)
  * Watering system (will be connected to 15 pin and GND)

How install app
-----------
  * apt-get install nodejs npm
  * git clone git://github.com/quick2wire/quick2wire-gpio-admin.git
  * cd quick2wire-gpio-admin
  * make
  * sudo make install
  * sudo adduser $USER gpio
  * npm install pi-gpio
  * mkdir /root/bin
  * cd tmp && git clone https://github.com/abramova-alex/mentoring.git && mv ./mentoring/watering.js /root/bin
  * cat <<EOF > /etc/systemd/system/watering.service
```shell
[Unit]
 Description=Watering
    [Service]
    ExecStart=node /root/bin/watering.js
    KillMode=process
    Restart=on-failure
    RestartSec=10s
    LimitNOFILE=4096
    [Install]
    WantedBy=multi-user.target
    EOF
```
 
  * systemctl enable watering
  * systemctl start watering

