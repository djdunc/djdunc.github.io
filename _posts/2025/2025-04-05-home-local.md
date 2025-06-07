---
layout: post
title:  "home.local"
date:   2025-04-05 09:00:00 +0100
excerpt_separator: <!--more-->
tags: research
category: blog 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54421427504/in/datetaken/" title="Bus Nook update"><img src="https://live.staticflickr.com/65535/54421427504_2f48da8d20_c.jpg" width="100%" alt="Bus Nook update"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Took the chance to update some crumbling home infrastructure. Moved a few home scripts over to new hardware (RPi5 with [M2 Hat+ and SSD](https://www.raspberrypi.com/products/m2-hat-plus/)) to hopefully make them a little more reliable. This also gave me the excuse to add in more info to the [Bus Nook](https://www.iot.io/projects/2024/01/11/nook.html) - global CO2 levels.

<!--more-->

It shows the current value in ppm and the value from the year I was born (425ppm today vs 326ppm). A little depressing but a daily reminder of the bigger picture. The web page also shows a graph of historic data pulled from [https://global-warming.org](https://global-warming.org).

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54435642241/in/datetaken/" title="home.local"><img src="https://live.staticflickr.com/65535/54435642241_ce568164f6_b.jpg" width="100%" alt="home.local"/></a>

Next up I updated a script that is scraping live data from the web page used internally on the home solar converter - the app available when I bought the panels is no longer supported (and was automatically removed from my phone by Apple!) - so I use a little script to scrape the web page and forward the value to an mqtt broker. The little web page below then displays this information.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54434781337/in/datetaken/" title="home.local"><img src="https://live.staticflickr.com/65535/54434781337_d4b33d0b11_b.jpg" width="100%" alt="home.local"/></a>

The main reason for doing all this however was to get the webpage I use to control a few switches working a little more reliably!

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54434781327/in/datetaken/" title="home.local"><img src="https://live.staticflickr.com/65535/54434781327_33bbac6e87_b.jpg" width="100%" alt="home.local"/></a>