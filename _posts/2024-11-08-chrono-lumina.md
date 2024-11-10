---
layout: post
title:  "Chrono Lumina"
date:   2024-11-08 10:00:00 +0100
excerpt_separator: <!--more-->
tags: events
category: blog 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54130939639/in/album-72177720320549464" title="IMG_2738"><img src="https://live.staticflickr.com/31337/54130939639_fed802191c_c.jpg" width="100%" alt="IMG_2738"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

This year we changed the format of CASA0014 - the introductory module to our [Connected Environments programme](https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/connected-environments-msc) - which required a new workshop project. In previous years the students built their own [plant monitor](https://github.com/ucl-casa-ce/casa0014/blob/main/plantMonitor/README.md) this year they are building controllers to interact with a light installation in the lab called Chrono Lumina.

<!--more-->

The goal is to understand all the component parts of an IoT system through building an end to system. To support this process (and make it possible to build a prototype in 4 weeks!) we provide the students with a "light" to control via MQTT. Their task is to build an arduino based controller to send messages to Chrono Lumina, a light installation of 52 autonomous 12 pixel neopixel rings that are controlled via an ESP32. The devices are controlled by sending messages over MQTT - details are documented on the [Chrono Lumina GitHub page](https://github.com/ucl-casa-ce/casa0014/blob/main/chronoLumina/readme.md). 

The process of developing the installation has morphed and developed over the past 4 months - from individual light units to light installation in the lab. Below are some of the highlights - the [full build process is documented on Flickr](https://www.flickr.com/photos/pseudonomad/albums/72177720320549464/). Looking forward to seeing how the students light this up!

<hr>

The final installation:

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54108013241/in/album-72177720320549464" title="Chrono Lumina Installed"><img src="https://live.staticflickr.com/65535/54108013241_a91248e9eb_c.jpg" width="100%" alt="Chrono Lumina Installed"/></a>

Lovely detail by Simon on the enclosure for the PSU's / stand for the lights - amazing use of car body filler:

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54108349964/in/album-72177720320549464" title="Chrono Lumina Installed"><img src="https://live.staticflickr.com/65535/54108349964_1616bddcbf_c.jpg" width="100%" alt="Chrono Lumina Installed"/></a>

A 2x size model of the ESP32 and Neopixel ring by Simon:

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54108268198/in/album-72177720320549464" title="Chrono Lumina Model"><img src="https://live.staticflickr.com/65535/54108268198_bf0e1d1dfb_c.jpg" width="100%" alt="Chrono Lumina Model"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54046506339/in/album-72177720320549464" title="2x scale model by Simon"><img src="https://live.staticflickr.com/65535/54046506339_ec5075b31c_c.jpg" width="100%" alt="2x scale model by Simon"/></a>

Batch production - if you are going to build 52 of them, think about how easy the assembly is!

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54079993750/in/album-72177720320549464" title="adding to wifi"><img src="https://live.staticflickr.com/65535/54079993750_16f76d3d5a_c.jpg" width="100%" alt="adding to wifi"/></a>

Component parts: 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54045312692/in/album-72177720320549464" title="LED ring attachment components by Simon"><img src="https://live.staticflickr.com/65535/54045312692_a1d7f72ed4_c.jpg" width="100%" alt="LED ring attachment components by Simon"/></a>

Testing diffusion and current draw:

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53992799044/in/album-72177720320549464" title="Testing the diffuser"><img src="https://live.staticflickr.com/65535/53992799044_7007326529_c.jpg" width="100%" alt="Testing the diffuser"/></a>

Proto 1:

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53656452671/in/album-72177720320549464/" title="Proto 1 sketch with arduino"><img src="https://live.staticflickr.com/65535/53656452671_481f633c30_c.jpg" width="100%" alt="Proto 1 sketch with arduino"/></a>