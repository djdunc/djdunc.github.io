---
layout: post
title:  "Manifold Simulation"
date:   2026-06-21 08:00:00 +0100
excerpt_separator: <!--more-->

# tags: try to choose one or two from these
# events, research, teaching, publication, making, arduino, casa, training
# hardware, job, book, convergence, stuff, how to work, photos, travel, home
tags: 
    - travel

category: blog  
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55335427070/in/datetaken/" title="Manifold testing"><img src="https://live.staticflickr.com/65535/55335427070_9ae91191a3_c.jpg" width="100%" alt="Manifold testing"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Lots of side quests on at the moment. [Manifold](https://www.ucl.ac.uk/ucl-east/public-art-and-art-campus/manifold) is one of those projects that has been ticking over for [quite a few months now](https://www.iot.io/blog/2026/02/01/sonder-manifold.html). Last week I installed the lights in the lab, partially so that the students could see one of our research projects as a work in progress as they are working towards their dissertation projects, but mostly so that we could start to work on the animations for the lights with [Emma](https://www.emma-smith.com). This also meant a need to migrate from using WLED for testing to coding our own animations. A couple of hours later and I had a browser based LED / NeoPixel simulator running to test animations before uploading them to the ESP32 in the ceiling.

<!--more-->

This was built with Antigravity. I can't remember how long it took me to build the test page for [Vespera](https://www.iot.io/blog/2025/10/05/vespera.html) (a similar web page based tool to allow students to test the animations they are wanting to send to the light installation in the lab), but it was certainly much longer than the few hours I spent getting this set-up and running with Antigravity. I didn't need to do this, but the fact I could quickly make a prototype to test ideas before working with hardware shows a really nice use case for this kind of vibe coding. 

Screenshots below show the webpage - the single row of LED's along the top (1 pixel wide, 5 pixels high), simulation variables in the left hand panel (it contains a drop down of all the animation types I create) and the corresponding Arudino code in the right hand panel which I can copy paste onto the ESP32.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55349236650/in/datetaken/" title="LED simulator in Antigravity"><img src="https://live.staticflickr.com/65535/55349236650_6042d9391a_c.jpg" width="100%" alt="LED simulator in Antigravity"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55349032479/in/datetaken/" title="LED simulator in Antigravity"><img src="https://live.staticflickr.com/65535/55349032479_98cf91234c_c.jpg" width="100%" alt="LED simulator in Antigravity"/></a>

Code is still work in progress but will pull together into a repo in next few weeks.

Allotment is looking good at the moment. Onions have bolted, but that means I get to take pictures of lovely seed heads like this.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55348817401/in/datetaken/" title="IMG_7554"><img src="https://live.staticflickr.com/65535/55348817401_b17f68214d_c.jpg" width="100%" alt="IMG_7554"/></a>

A sad but lovely trip up north.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55349033094/in/datetaken/" title="Roseberry Topping"><img src="https://live.staticflickr.com/65535/55349033094_4ec02e8754_c.jpg" width="100%" alt="Roseberry Topping"/></a>

Finally the A-Levels are over. Three kids through school, all now 18+. Job done.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55349033139/in/datetaken/" title="Almost last day of A-level revision"><img src="https://live.staticflickr.com/65535/55349033139_9d5a6b6045_c.jpg" width="800" height="450" alt="Almost last day of A-level revision"/></a>

Looking at [links.duncanwilson.com](https://links.duncanwilson.com/), these parts of the internet crossed my path this week:

- [Networks of New York](https://www.seeingnetworks.in/) - ordered.
- [I Could've Rickrolled the Entire FIFA World Cup. ](https://bobdahacker.com/blog/fifa-hack) - wow !!