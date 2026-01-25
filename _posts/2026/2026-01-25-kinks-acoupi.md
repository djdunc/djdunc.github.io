---
layout: post
title:  "Kinks + Birds"
date:   2026-01-25 08:00:00 +0100
excerpt_separator: <!--more-->

# tags: try to choose one or two from these
# events, research, teaching, publication, making, arduino, casa, training
# hardware, job, book, convergence, stuff, how to work, photos, travel, home
tags: 
    - making

category: blog  
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55060048850/in/datetaken/" title="Kinks - Sunny Afternoon at Ally Pally"><img src="https://live.staticflickr.com/65535/55060048850_c6fae2dbf3_c.jpg" width="100%" alt="Kinks - Sunny Afternoon at Ally Pally"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Had a fantastic night at the Kinks "Sunny Afternoon" musical at Alexandra Palace theatre. The energy of the cast and quality of the music was superb, combined with my favourite venue in London. Highly recommended if you get the chance to come over to Ally Pally this week before they continue a tour around the UK. Otherwise this week have split my time between making bat / bird detectors, wrangling with Ultralytics installation on RPi Trixie with Mini Forge and two full on days of teaching plus our annual open evening.

<!--more-->

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55058785572/in/datetaken/" title="Bartlett PG open evening"><img src="https://live.staticflickr.com/65535/55058785572_de5a93770d_c.jpg" width="100%" alt="Bartlett PG open evening"/></a>
Open evening at Bartlett.

Spent the start of the week finally getting to get hands on with the acoupi package (paper over here on [BES Methods in Ecology and Evolution](https://besjournals.onlinelibrary.wiley.com/doi/10.1111/2041-210x.70208?af=R)). This meant working with RPi5's for the first time and setting up [Conda Miniforge](https://github.com/conda-forge/miniforge) to get the right python environment. Once familiar with the acoupi package and reminding myself how to configure Audiomoths it was all really straight forward. Now have the batbox in the allotment updated from the 2017 version of the Intel Shazam for Bats Edison based device to one with a Pi.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55059693966/in/datetaken/" title="Echobox update - swapping to RPi"><img src="https://live.staticflickr.com/65535/55059693966_a1831849ea_c.jpg" width="100%" alt="Echobox update - swapping to RPi"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55059868618/in/datetaken/" title="Echobox update - swapping to RPi"><img src="https://live.staticflickr.com/65535/55059868618_8187bccdf0_c.jpg" width="100%" alt="Echobox update - swapping to RPi"/></a>
Acoupi and Batdetect2 running on a RPi5 at the allotment.

Was surprised to start picking up readings at dusk in January. Some spectrograms below of the first few days. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55059916913/in/datetaken/" title="Bat detections"><img src="https://live.staticflickr.com/65535/55059916913_bf5b5d9df7_c.jpg" width="100%" alt="Bat detections"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55059916908/in/datetaken/" title="Bat detections"><img src="https://live.staticflickr.com/65535/55059916908_ea814d70ed_c.jpg" width="100%" alt="Bat detections"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55060096200/in/datetaken/" title="Bat detections"><img src="https://live.staticflickr.com/65535/55060096200_a51afd1768_c.jpg" width="100%" alt="Bat detections"/></a>

Was also experimenting with cameras from streaming and object detection. More on this and pointers to the repo next week.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55059694081/in/datetaken/" title="Birdnet-pi at home still going strong"><img src="https://live.staticflickr.com/65535/55059694081_a2bf27f477_c.jpg" width="100%" alt="Birdnet-pi at home still going strong"/></a>

Also took the opportunity to update my existing [Birdnet-pi](https://www.iot.io/blog/2023/10/07/birdnet-puc.html) installation since the original Patrick McGuire version is now no longer supported (used [this fork by Nachtzuster](https://github.com/Nachtzuster/BirdNET-Pi) - note: had some issues with missing labels on home page chart - had to [update Matplotlib](https://github.com/Nachtzuster/BirdNET-Pi/issues/341)). Coincidentally this is also the [Big Bird Watch weekend](https://www.iot.io/blog/2024/01/28/birdwatch.html). Here is this years count for the day compared to last year and 2024: 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55060359603/in/datetaken/" title="Birdnet2026"><img src="https://live.staticflickr.com/65535/55060359603_622431a7f2_c.jpg" width="100%" alt="Birdnet2026"/></a>
2026

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55060441259/in/datetaken/" title="Birdnet2025"><img src="https://live.staticflickr.com/65535/55060441259_9e17c61454_c.jpg" width="100%" alt="Birdnet2025"/></a>
2025

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55060372308/in/datetaken/" title="Birdnet2024"><img src="https://live.staticflickr.com/65535/55060372308_9c8e10efd6_c.jpg" width="100%" alt="Birdnet2024"/></a>
2024


Looking at [links.duncanwilson.com](https://links.duncanwilson.com/), these parts of the internet crossed my path this week:

- [a blog about measuring solar](https://jack-kelly.com/blog/2026-01-19-plot-solar-pv)
- [a long read on fonts](https://klim.co.nz/blog/die-grotesk-design-information/)