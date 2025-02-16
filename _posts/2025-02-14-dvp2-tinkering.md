---
layout: post
title:  "Tinkering with weather + birdboxes"
date:   2025-02-14 09:00:00 +0100
excerpt_separator: <!--more-->
tags: research
category: blog 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54327016117/in/album-72177720321642954" title="dvp2hereeast"><img src="https://live.staticflickr.com/65535/54327016117_fd835c35b8_c.jpg" width="100%" alt="dvp2hereeast"/></a>
<script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

This week culminated in tinkering with a few projects to get them live. Weather stations are one of the simplest IoT devices (in theory) since they are well developed products and have easy to understand (and therefore test) outputs, but they still require some [fettling](https://en.wiktionary.org/wiki/fettle).

<!--more-->

My first challenge was to work out why a station located at the "other" end of the Olympic Park was not working. The station is located next to solar PV and the [green roof at Here East](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://hereeast.com/about/different-makes-difference/here-east-planet/). 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/52820532952/in/album-72157710585870338/" title="IMG_8110"><img src="https://live.staticflickr.com/65535/52820532952_0c6c1aa4e4_c.jpg" width="100%" alt="IMG_8110"/></a>

I had assumed I was just going to need to reconnect the RPi running Weewx to the UCL_IoT wifi network. I was not able to access it remotely implying that it had lost connection (or crashed). So armed with the portable screen and keyboard I went back to basics and plugged in to the RPi. Turns out it was connected but had acquired a new address (my one complaint about the UCL_IoT system is that it doesn't let you see what IP has been allocated to your device - one of the reasons why we still run our own internal network!) - from here I could see that Weewx was running fine but the error logs were showing problems with connection to the MQTT broker (and a similar one with the rsync'ing of the html over to the weather webpage server). 

Turned out to be a "routing issue" from the UCL_IoT domain when using the standard account - we have an early "Connected Enviroments" account from when they system was being prototyped which has some extra routing rules back to our server infrastructure. This was identified using the humble `ping` to highlight that messages were not getting through. I am leaving these comments here since after an hour or two of debugging this I said to myself "ah I remember having this issue about 19 months ago..."

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54327016157/in/album-72177720321642954" title="DVP2 screenshots"><img src="https://live.staticflickr.com/65535/54327016157_48c0f85b44_c.jpg" width="100%" alt="DVP2 screenshots"/></a>

An hour of work the following day with Steve via teams and we had changed the set-up of this RPi / Weewx / DVP2 configuration so that it uses the MQTT broker at my house for the live data and the html content is uploaded to our [weather.cetools.org](weather.cetools.org) website via GitHub - (as a reminder to self, I did need to change my home setup back to using certificates on the MQTT broker!)

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54328143558/in/album-72177720321642954/" title="DVP2 screenshots"><img src="https://live.staticflickr.com/65535/54328143558_1570eb159f_c.jpg" width="100%" alt="DVP2 screenshots"/></a>

The other little project that came to completion last week was the Birdnet-Pi plus camera for the OPS roof garden. Simon had been working on his already great enclosure for the device so that we could mount it underneath the wifi access point in the garden. It looks even more awesome than I could have anticipated! This little birdbox has been entirely made by Simon - model maker supreme!

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54328325485/in/album-72177720321642954/" title="OPS nature smart garden"><img src="https://live.staticflickr.com/65535/54328325485_595f5905e8_c.jpg" width="100%" alt="OPS nature smart garden"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54328325805/in/album-72177720321642954/" title="OPS nature smart garden"><img src="https://live.staticflickr.com/65535/54328325805_04b83e3933_c.jpg" width="100%" alt="OPS nature smart garden"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54328325470/in/album-72177720321642954/" title="Birdnet pi"><img src="https://live.staticflickr.com/65535/54328325470_b28944b8ab_c.jpg" width="100%" alt="Birdnet pi"/></a>

Looks like our first visitor may have been a chiffchaff. Visit [http://10.23.194.102](http://10.23.194.102) when on UCL Pool Street network if you want to take a look at the days bird detections - would be good to hear how realistic the observations are and any suggestions for tweaks to the configuration of birdnet happily received. The camera is also available as an RSTP stream while in One Pool Street. Next up setting up a timelapse.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54328142264/in/album-72177720321642954/" title="Birdnet pi"><img src="https://live.staticflickr.com/65535/54328142264_62843e343e_c.jpg" width="100%" alt="Birdnet pi"/></a>
