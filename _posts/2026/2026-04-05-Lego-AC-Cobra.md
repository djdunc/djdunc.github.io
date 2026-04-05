---
layout: post
title:  "Lego AC Cobra"
date:   2026-04-05 08:00:00 +0100
excerpt_separator: <!--more-->

# tags: try to choose one or two from these
# events, research, teaching, publication, making, arduino, casa, training
# hardware, job, book, convergence, stuff, how to work, photos, travel, home
tags: 
    - making

category: blog  
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55188082517/in/datetaken/" title="Lego AC Cobra"><img src="https://live.staticflickr.com/65535/55188082517_fd2a174cf1_c.jpg" width="100%" alt="Lego AC Cobra"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

A couple of making projects this week. A switch for my desk that turns on the lights outside in the garden. This was also an experiment with the HLK LD2410C presence sensor for monitoring presence in my work area. The second was the Lego AC Cobra pictured above.

<!--more-->

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55188969501/in/datetaken/" title="Lego AC Cobra"><img src="https://live.staticflickr.com/65535/55188969501_2107bc1045_c.jpg" width="100%" alt="Lego AC Cobra"/></a>

I probably build one set a year, would build more if I had the space to put them once built. I like the manual process of sorting the pieces into colours and sizes, and the methodical process of following the instructions. This is not a creative process since I am following instructions, but it is a satisfying one non the less. I like the process of having a drink, putting on some music or a film that doesn't require all my attention and slowly seeing the emergence of an object. 

I take the photos as I go to remember and document the build process. My Flickr account has [photos tagged with LEGO](https://www.flickr.com/photos/pseudonomad/tags/lego/)

[![Lego on Flickr](/assets/img/blog/20260405/lego.png)](https://www.flickr.com/photos/pseudonomad/tags/lego/)

My other project last week was creating a remote switch to turn the lights on in the garden. We have been doing this via a web app and MQTT for a couple of years but I kept meaning to create a physical switch. Since getting your phone out your pocket to turn on the light is weirdly annoying. I also wanted to try out the HLK LD2410C presence sensor for monitoring presence in my work area. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55188969491/in/datetaken/" title="Garden Lights"><img src="https://live.staticflickr.com/65535/55188969491_b0aaf88e84_c.jpg" width="100%" alt="Garden Lights"/></a>

The LD2410 (centre of photo above) is a cheap way to sense presence using mmWave radar that can be configured via Bluetooth. My goal was to have one running at my desk so that I could gauge how "accurately" it reflects my presence. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55188082332/in/datetaken/" title="Garden Lights and presence sensor"><img src="https://live.staticflickr.com/65535/55188082332_a08f82bbf8_c.jpg" width="100%" alt="Garden Lights and presence sensor"/></a>

Gave me chance to play around with Fusion 360 which always reminds me that it takes me a few hours to get used to the modelling process. The Arduino code and enclosure files are [available on GitHub](https://github.com/djdunc/presence-button/blob/main/readme.md). Initial testing of the presence detection looks much better that I had experienced with previous sensors of this kind (see [work on COACH](https://www.connected-environments.org/blog/2024-08-01-enhancing-patient-flow-and-experience-in-londons-eye-clinics-with-coach-sensors/)) - I printed a translucent lid and used the RGB LED on the ESP32 C3 to indicate presence. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55189367225/in/datetaken/" title="Garden Lights and presence sensor"><img src="https://live.staticflickr.com/65535/55189367225_b8b24be3ed_c.jpg" width="100%" alt="Garden Lights and presence sensor"/></a>

Feels like a while ago now but at the start of the week I was helping out with the install of a Nuna Green Wall Irrigation System at Avenue Primary School. Also posted a video to the [Connected Environments YouTube](https://www.youtube.com/watch?v=u8EfTQvxrSU)

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55189118158/in/datetaken/" title="Nuna Green Wall Irrigation System install at Avenue Primary School"><img src="https://live.staticflickr.com/65535/55189118158_5b53ba9ba9_c.jpg" width="100%" alt="Nuna Green Wall Irrigation System install at Avenue Primary School"/></a>

We are only just starting this project but already getting some great results. Am [documenting work in progress in this Flickr album](https://www.flickr.com/photos/pseudonomad/albums/72177720332414739/).

Looking at [links.duncanwilson.com](https://links.duncanwilson.com/), these parts of the internet crossed my path this week:

- [A light that can see radio waves](https://www.youtube.com/watch?v=moBCOEiqiPs) - a lovely project!
