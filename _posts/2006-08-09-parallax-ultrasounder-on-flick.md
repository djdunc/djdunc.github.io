---
id: 450
title: 'Arduino workshop at Artificialtourism'
date: '2006-08-09T09:56:14+00:00'
author: djdunc
layout: post
guid: 'http://beta.driversofchange.com/emtech/2006/08/09/parallax_ultrasounder_on_flick/'
permalink: /2006/08/09/parallax-ultrasounder-on-flick/
categories:
    - 'processing and arduino'
---

Just back from 2 days with [Artificialtourism](http://www.artificialtourism.com/) getting some hands on experience with Arduino. After a morning of intros to Arduino, basic does and don’ts and looking at sensors available we got onto building some prototypes. First up was using a tri colour LED ([see Farnell](http://uk.farnell.com/jsp/endecaSearch/partDetail.jsp?SKU=1168585&N=401)) with a simple cross fade app (from examples in Arduino).

[![](https://i0.wp.com/static.flickr.com/82/210796110_3a6e930407.jpg?w=400)](http://www.flickr.com/photos/96635144@N00/210796110/ "3 colour LED on Flickr - Photo Sharing!")

This was then extended to add a serial read from a processing app that defined the RGB value to be used for the LED. The processing app uses an image of a colour wheel and the mousePressed event to get the pixel RGB value and then writes that to the appropriate serial port. Arduino is watching the same port and when it receives data it buffers the RGB values reading them separately into a function that sets the RGB level of the LED using PWM input to the Arduino circuit.

[![](https://i0.wp.com/static.flickr.com/87/210796137_9a8a634651.jpg?w=400)](http://www.flickr.com/photos/96635144@N00/210796137// "3 colour LED with processing input on Flickr - Photo Sharing!")

The other \*nice\* sensor we used was the parallax ultra-sounder…

[![](https://i0.wp.com/static.flickr.com/57/210796153_4c79088d75.jpg?w=400)](http://www.flickr.com/photos/96635144@N00/210796153/ "parallax ultra-sounder on Flickr - Photo Sharing!")