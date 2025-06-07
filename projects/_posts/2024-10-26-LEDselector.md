---
title: 'LED Selector'
date: '2024-10-26T10:51:08+00:00'
author: djdunc
layout: post
image: /assets/img/projects/thumb/240-ledselector.png
excerpt_separator: <!--more-->
tags:
    - arduino 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54031574406/in/album-72177720321469614" title="Lumina Selector - Final Prototype"><img src="https://live.staticflickr.com/31337/54031574406_09f7017604_c.jpg" width="100%" alt="Lumina Selector - Final Prototype"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Lumina Selector - a device for publishing messages via MQTT to Chrono Lumina light installation in the CELab. The aim of this project was to build a controller that would allow me select 1 of 52 Chrono Lumina NeoPixel LED rings and send a message over MQTT to flash the lights white. My goal was to create an easy way to identify an LED ring by its device number.

<!--more-->

For the project I wanted to use a [rotary encoder](https://howtomechatronics.com/tutorials/arduino/rotary-encoder-works-use-arduino/) as the primary sensor for selecting a value (LED ring number), and stumbled across these [small OLED displays](https://randomnerdtutorials.com/guide-for-oled-display-with-arduino/) which I wanted to test. Both sensor and display integrated easily with the Arduino MKR1010 initially used for the project development, and the ESP32 C3 zero which I ended up needing to port the code over to in the final stages.

The [project is documented over on GitHub](https://github.com/ucl-casa-ce/casa0014/blob/main/chronoLumina/LEDfinder/readme.md) as part of the [Chrono Lumina project](https://github.com/ucl-casa-ce/casa0014/blob/main/chronoLumina/readme.md). 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54016480715/in/album-72177720321469614" title="Lumina Selector - flashing all lights"><img src="https://live.staticflickr.com/31337/54016480715_1586592ee5_c.jpg" width="100%" alt="Lumina Selector - flashing all lights"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54031571831/in/album-72177720321469614" title="Lumina Selector - final build"><img src="https://live.staticflickr.com/65535/54031571831_8e40b32907_c.jpg" width="100%" alt="Lumina Selector - final build"/></a>