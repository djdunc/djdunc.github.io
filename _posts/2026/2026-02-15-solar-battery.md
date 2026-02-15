---
layout: post
title:  "Solar Edge AI"
date:   2026-02-15 08:00:00 +0100
excerpt_separator: <!--more-->

# tags: try to choose one or two from these
# events, research, teaching, publication, making, arduino, casa, training
# hardware, job, book, convergence, stuff, how to work, photos, travel, home
tags: 
    - making

category: blog  
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55096719111/in/datetaken/" title="Rainbows over UCL East"><img src="https://live.staticflickr.com/65535/55096719111_890ac11758_c.jpg" width="100%" alt="Rainbows over UCL East"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Spent a fair bit of time exploring solar battery setups for running EdgeAI applications this week. Turns out the requirements for two different setups came together at the same time. One a 10W system, the other a 100W. One for a resource constrained device, the other for a RPi that is pretty much running the whole time. 

<!--more-->

My [house has a 3kW system](https://www.iot.io/blog/2024/02/03/solar.html), my camper van a 180W system, and I have used the adafruit solar chargers with small panels and lipo batteries a fair bit in the lab, but working out this kind of setup required a bit of searching in addition to knowing the basic theory of solar generation equations. Next step will be to build and test how closely the theory matches the in-situ use. 

Here are the outlines of two different systems showing where the money gets spent.  All are based on running in UK over all seasons. Note, these are total cost including RPi, microphone, enclosures etc for a device that is running BirdNet and reporting live bird counts via a Lora network.

**100W panel / 100Ah battery - £800** 
- Controller - [Victron SmartSolar MPPT 75/10](https://www.amazon.co.uk/MPPT-controller-Victron-Energy-75/dp/B075NTT8GH/)
- Battery - [Fogstar Drift 100ah](https://www.fogstar.co.uk/collections/lithium-leisure-battery/products/fogstar-drift-12v-100ah-lithium-leisure-battery)
- Solar - [Renogy 16bb - N Type 100W](https://uk.renogy.com/products/renogy-16bb-n-type-100-watt-solar-panel)
- Buck Converter - [X1001-Max buck converter 12-5V](https://geekworm.com/products/x1001-max?variant=51697472110905)

**10W panel / 30Ah battery - £450**
- Controller - [Victron SmartSolar MPPT 75/10](https://www.amazon.co.uk/MPPT-controller-Victron-Energy-75/dp/B075NTT8GH/)
- Battery - [Eco Tree Lithium (12V 12Ah)](https://ecotreelithium.co.uk/product/12v-12ah/)
- Solar - [Victron BlueSolar 30W (Mono)](https://www.splitcharge.co.uk/product/victron-energy-30w-12v-mono-spm040301200-series-4a/)
- Buck Converter - [12V>5V 5A Waterproof Buck Converter USB-C](https://www.evoriacrate.com/product-p-321792.html)

Turns out the 10W version was also something very similar to the system the [lovely folk at Nuna Studio]() where chatting to me about.  In their case the need was to create an energy source to occasionally pump water up to a height of 6m. Looking forward to seeing that one installed on a school in a Newham. 

To help me remember, the component parts of the system are sketched out below. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55095845252/in/datetaken/" title="RPi5"><img src="https://live.staticflickr.com/65535/55095845252_40d6f2ef8c_c.jpg" width="100%" alt="RPi5"/></a>
100W panel / 100Ah battery - £800

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55096718916/in/datetaken/" title="RPiZero2W"><img src="https://live.staticflickr.com/65535/55096718916_3743f5dfcf_c.jpg" width="100%" alt="RPiZero2W"/></a>
10W panel / 30Ah battery - £450

Also, I hadn't realised (or remembered) that the Van Victron has a BLE interface - downloaded the Victron Connect app - useful:

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/55097092005/in/datetaken/" title="Victron BMV712"><img src="https://live.staticflickr.com/65535/55097092005_0dadd9a290_h.jpg" width="100%" alt="Victron BMV712"/></a>

Looking at [links.duncanwilson.com](https://links.duncanwilson.com/), these parts of the internet crossed my path this week:

- [PvPi is getting closer to production - update on testing](https://www.youtube.com/watch?v=qlH1AD58-QY)
- [Gallery of physical visualisations](https://dataphys.org/list/gallery/)

(looks like I didn't do much browsing this week...)