---
layout: post
title:  "Blinking Neo Pixels and MQTT"
date:   2024-04-28 09:00:00 +0100
excerpt_separator: <!--more-->
tags: home 
category: blog 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53685390366/in/datetaken/" title="Blinking Neo Pixels"><img src="https://live.staticflickr.com/65535/53685390366_184cc7732f_c.jpg" width="100%" alt="Blinking Neo Pixels"/></a>

Have had some fun over the past few weeks rethinking the term one workshop for CE. In previous years the students have built a plant monitor from nails and an Arduino through to setting up influxdb and grafana dashboards on a Raspberry Pi. The goal was to teach all the component parts of an IoT system. This year timings are changing a little which required an evolution of the project. This year we will have neopixel rings. 

<!--more-->

The project will still be demonstrating all the parts of an IoT system but this year we will be building some of the component parts. The students will be building a device the senses the world in some way and then sends a message over MQTT to actuate the neopixel ring device which will be installed in the lab, and send that data to a RPi running a TIG stack that they build on a cloud of RPis in the lab (that project is also looking really exciting! Hopefully more on that one in a month or so).

So I found myself playing with 12 led neopixel rings and Arduino D1 mini’s again. The goal was to create a script that could be installed on each of the 42 devices (one per student) with each RGBW led being uniquely addressed via MQTT. That process was reasonably straight forward but I needed a quick way to send test signals (which would represent another “actuating” Arduino sending updates via MQTT). I figured a web page with 12 colour pickers and a submit button would be the quickest way to go. 

This was a case where chatGPT really sped up the process in terms of creating the scaffold for a webpage with the html and JavaScript needed. I don’t do this kind of programming frequently enough to be able to remember the syntax. Being able to describe in pseudo code what I want and then asking chatGPT to generate a first go probably sped up my “finding bits of code to do stuff” ten fold. It didn’t work out the box but my exchanges back and forth got me up and running with a working demo to show others in the lab in about half the time it would usually take me. 

Some screen shots of the web app are below since the page requires you to set a local variable for the MQTT feed before it will display the colour pickers. The [html code](https://gist.github.com/djdunc/cf779ade29c483e0cef412f40b19c8f1) and the [Arduino sketch](https://gist.github.com/djdunc/3e4f5bc030f9ae58fec22b79d06121ac) are on GitHub. 


<a data-flickr-embed="true" href="https://www.iot.io/led/" title="Login page for colour picker"><img src="https://live.staticflickr.com/65535/53685917990_7aea69d7a5_c.jpg" width="100%" border="1" alt="Login page for colour picker"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53687590260/in/datetaken/" title="Colour Picker to MQTT"><img src="https://live.staticflickr.com/65535/53687590260_5bd5fdfdcd_b.jpg" width="100%" border="1" alt="Colour Picker to MQTT"/></a>