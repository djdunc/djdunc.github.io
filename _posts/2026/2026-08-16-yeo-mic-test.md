---
layout: post
title:  "Yeo Mic Test"
date:   2026-08-16 08:00:00 +0100
excerpt_separator: <!--more-->

# tags: try to choose one or two from these
# events, research, teaching, publication, making, arduino, casa, training
# hardware, job, book, convergence, stuff, how to work, photos, travel, home
tags: 
    - research

category: blog  
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55467414110/in/datetaken/" title="UNO Q"><img src="https://live.staticflickr.com/65535/55467414110_7c5086c29c_c.jpg" width="100%" alt="UNO Q"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

This week has been heads down on testing our energy neutral bio acoustic monitors we are deploying for a year in [rural Somerset](https://www.iot.io/blog/2026/07/12/Yeo.html). Final design has been pretty much pinned down (still have Lora or Cellular decisions to make when on site) and the bulk of the ordering has been done. This is the setup we are going with. 

<!--more-->

An [Arduino UNO Q](https://docs.arduino.cc/hardware/uno-q/) with audiomoth mic running at 250kHz and either a LA66 Lorawan shield or A7670G multi network modem. All of which will be powered by a 50W panel and 100Wh battery mediated by a Victron MPPT controller. For the software we have been developing a new program using the [Acoupi](https://acoupi.github.io/acoupi/) framework that records birds continuously and bats from disk until dawn. The Edge AI uses Birdnet for bird classification and Batdetect2 for bat calls. We have also optmised the messenger services in Acoupi primarily for the LoraWAN use case (where air time is minimal) which has also had a positive impact on the cellular workload. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55376143653/in/album-72177720332050429/" title="UNO Q"><img src="https://live.staticflickr.com/65535/55376143653_9a6b5d8ecc_c.jpg" width="100%" alt="UNO Q"/></a>
More or less the setup! We are now using an audiomoth rather than the dodotronic mic and a slightly bigger battery with heating pads for the freezing winter days.

We have been doing lots of testing to understand the reliability of the acoupi processing pipeline under the constraints of energy budget, information volume and device cost. Am pretty happy with the sweat spot of sub £600, 10% recording time 24/7/365 and enough “spare” battery capacity to see us through 10 days of no sun in the middle of winter. We should also have enough on board storage to store about 200,000 archive recordings for off line analysis (files can be retrieved via an on demand WiFi hotspot). 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55467187744/in/album-72177720332050429/" title="3 mic testing"><img src="https://live.staticflickr.com/65535/55467187744_8cd45c58f8_c.jpg" width="100%" alt="3 mic testing"/></a>
Comparing results from 3 mics and cellular vs wifi energy use.

I have been impressed with the UNO Q. At the start we were also testing a RPi5 (great device, a bit more powerful, a bit more energy hungry, a bit more expensive), a RPi Zero 2 (not quite powerful enough to run acoupi at frequency we needed) and a Sony Spreesense (not developed beyond first week after realisation of integration work required to get to starting point). The UNO Q sat in a sweet spot just below the RPi5. Powerful enough to run the models and almost half the price with our build. 

Looking at the Victron logs we are at about 40Wh per day with the current cellular setup. Still a few more test to run to see where else we can “turn things off”, but that is good enough for phase one deployment. This is only my second  time using cellular (normally LoraWAN) since I have typically been worried about the high current spikes of sending messages. But this 12v battery setup is demonstrating a good use case scenario. This setup was a plan b since Lora had been the primary expectation. We are still working on that but still have some challenges around GW location and coverage. 

Orders for 20 off devices have been made so next week will be building and testing ready for first deployments the week after. The [yeo.cetools.org](yeo.cetools.org) website shows work in progress observations - mainly from an allotment in North London. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55467015211/in/album-72177720332050429/" title="yeo-screenshot-aug-16"><img src="https://live.staticflickr.com/65535/55467015211_5935218f60_c.jpg" width="100%" alt="yeo-screenshot-aug-16"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55467132743/in/album-72177720332050429/" title="yeo-screenshot2-aug-16"><img src="https://live.staticflickr.com/65535/55467132743_87694c13ff_c.jpg" width="100%" alt="yeo-screenshot2-aug-16"/></a>


In other news, the bike build continues - now have tyres and handlebars.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55467133213/in/datetaken/" title="Bike taking shape"><img src="https://live.staticflickr.com/65535/55467133213_675e59682b_c.jpg" width="100%" alt="Bike taking shape"/></a>

And the eclipse was fun - but my photos were bad!

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55467015461/in/datetaken/" title="Bad eclipse photos"><img src="https://live.staticflickr.com/65535/55467015461_803401b5b3_m.jpg" width="240" height="240" alt="Bad eclipse photos"/></a> <a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55467015496/in/datetaken/" title="Bad eclipse photos"><img src="https://live.staticflickr.com/65535/55467015496_f2ff0a23e7_m.jpg" width="240" height="240" alt="Bad eclipse photos"/></a>

Looking at [links.duncanwilson.com](https://links.duncanwilson.com/), these parts of the internet crossed my path this week:

- looks like I didn't see anything worth tagging this week, which is a shame