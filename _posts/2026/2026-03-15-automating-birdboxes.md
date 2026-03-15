---
layout: post
title:  "Automating Birdboxes + Arup Foresight"
date:   2026-03-15 08:00:00 +0100
excerpt_separator: <!--more-->

# tags: try to choose one or two from these
# events, research, teaching, publication, making, arduino, casa, training
# hardware, job, book, convergence, stuff, how to work, photos, travel, home
tags: 
    - making
    - teaching

category: blog  
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55148347751/in/datetaken/" title="Birdbox nest building"><img src="https://live.staticflickr.com/65535/55148347751_0c0e012fb2_c.jpg" width="100%" alt="Birdbox nest building"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Having a bit of fun automating some of the analysis of bird box photos. Looks like we have a visitor to the bird box and am hoping they are nesting. In [previous years](https://www.iot.io/blog/2024/02/17/birdbox.html) I have managed to capture footage of the nest once it was setup, but this time I am hoping to be recording from the outset. 

<!--more-->

That meant I needed to be able to sift through lots of “empty” images and delete them to not overwhelm the SD Card (I am taking a photo every minute between 7am and 8pm - 780 photos a day). I used [Python](https://www.python.org/) and [OpenCV](https://opencv.org/) via Google's [Antigravity](https://antigravity.google). This was also a bit of an experiment to explore how I might teach the process of prototyping with AI tools. In this application the process was quite smooth and I found the support scaffold helpful in getting the job done quicker than it would probably have taken me if I had been developing it from scratch and debugging via stack overflow searches. This code worked well for identifying empty boxes and flagging to me when the box did start to get occupied but then the changes in the "background" image meant that it started to capture continuously again. Still trying to decide if that is ok or not.

The [GitHub repo is here](https://github.com/djdunc/rpi-noir-bird-detect). I had the opposite experience a couple of days later trying to use the same tool to develop a status dashboard for some MQTT and InfluxDB data. Felt like I was always getting further away from a solution rather than closer. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55147745883/in/datetaken/" title="Birdbox testing"><img src="https://live.staticflickr.com/65535/55147745883_80217aefa2_c.jpg" width="369" height="800" alt="Birdbox testing"/></a>

Screenshot of birdbox webpage

This week we our students had the pleasure of the excellent [Josef](https://www.linkedin.com/in/josefhargrave/) from [Arup](https://www.arup.com/contact-us/josef-hargrave/) along to chat about foresight and innovation as part of our Ethics, Sustainability and Business of IoT module. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55147965795/in/datetaken/" title="Arup Foresight and Innovation workshop"><img src="https://live.staticflickr.com/65535/55147965795_2aa6a7bb62_c.jpg" width="100%" alt="Arup Foresight and Innovation workshop"/></a>

Josef from Arup - can we predict the future?

This led to one of those lovely moments with students that can't be scripted. The students were tasked with creating some foresight scenarios for UCL East in 2040 - one group highlighted the idea that in our future campus we will have no WiFi. When I asked what they would do during lectures they retorted “what did you oldies do during lectures”, touché. I replied saying we used to listen to the lecturer and make notes! ([Continuous Partial Attention](https://en.wikipedia.org/wiki/Continuous_partial_attention) is an ongoing challenge!) A great conversation followed about how much they prefer the active learning sessions and workshops (vs lectures). Learning through making is key to our programme. Even though we only spent a little time on this activity, some interesting themes emerged around scope 3 emissions and AI (will potentially kill any net zero goals for our estate), space research becoming a thing (which then led to a living space station lab / digital habitation discussion) and the need for on site micro data centre that could be used to heat the pool in the aquatics centre. I think we need to do more of this next year.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55147817894/in/datetaken/" title="Arup Foresight and Innovation workshop"><img src="https://live.staticflickr.com/65535/55147817894_3c6cb44fd6_c.jpg" width="100%" alt="Arup Foresight and Innovation workshop"/></a>

Workshop mode

WIP continues on the Manifold light box. Wiring and inserting into enclosure is improving, very close to have the working version so we can start focusing on animations. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55146689052/in/datetaken/" title="Manifold light box build"><img src="https://live.staticflickr.com/65535/55146689052_d70853e2ec_c.jpg" width="100%" alt="Manifold light box build"/></a>

Also assembled and tested the solar battery water pump - was aiming for 7m head of water.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55147587001/in/datetaken/" title="water-pump-test"><img src="https://live.staticflickr.com/31337/55147587001_8627f19036_c.jpg" width="404" height="720" alt="water-pump-test"/></a>

Looking at [links.duncanwilson.com](https://links.duncanwilson.com/), these parts of the internet crossed my path this week:

- None - my page history looks like I was building not browsing this week!