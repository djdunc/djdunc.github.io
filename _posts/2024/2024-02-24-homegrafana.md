---
layout: post
title:  "Home Energy Grafana"
date:   2024-02-24 09:00:00 +0100
excerpt_separator: <!--more-->
tags: 
    - research
    - making
category: blog 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53552071545/in/datetaken/" title="Home energy dashboard daily gas last two weeks"><img src="https://live.staticflickr.com/65535/53552071545_41638ff622_c.jpg" width="100%" alt="Home energy dashboard daily gas last two weeks"/></a>

Grafana is one of our go to tools for data exploration at work. Since we are storing lots of data in InfluxDB it is a simple way to create quick dashboards. This week I found myself using it to explore how much energy we were generating via our house solar and trying to work out what was contributing to our base load. The image above shows our daily gas usage over the past 2 weeks (16-19th Feb were warmer days so less heating used).

<!--more-->

I ended up collating several different energy meters that I had been looking at in several different places into one dashboard. Some initial observations.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53552071715/in/datetaken/" title="Home energy dashboard Mac"><img src="https://live.staticflickr.com/65535/53552071715_12a8c93e82_c.jpg" width="100%" alt="Home energy dashboard Mac"/></a>

The house Mac tends to be left on 24/7 since it is used on a daily basis (and is set to back up overnight) but I hadn’t appreciated how much energy it was using (although after switching it off overnight it looks like I have other devices also on that socket! Will investigate...)

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53551626386/in/datetaken/" title="Home energy dashboard"><img src="https://live.staticflickr.com/65535/53551626386_cec01cfa29_c.jpg" width="100%" alt="Home energy dashboard"/></a>

Daily Electricity Usage (middle left chart above). Showering is a significant contributor (ie we don’t all manage the sub 4 minute guidance). The base load seems to around around 500W

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53551823948/in/datetaken/" title="Home energy dashboard cumulative daily"><img src="https://live.staticflickr.com/65535/53551823948_a3849153fd_c.jpg" width="100%" alt="Home energy dashboard cumulative daily"/></a>

Daily totals of energy use and solar generation. Solar panels have generated almost 8 Megawatt-Hours since Nov 2018.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53551823968/in/datetaken/" title="Home energy dashboard base loads"><img src="https://live.staticflickr.com/65535/53551823968_8de7597ec2_c.jpg" width="100%" alt="Home energy dashboard base loads"/></a>

Some standby modes still use a reasonable amount of energy - so worth, for example, turning the TV off at the mains. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53553348149/in/datetaken/" title="Solar net positive 10th August 2023"><img src="https://live.staticflickr.com/65535/53553348149_031cb5b006_c.jpg" width="100%" alt="Solar net positive 10th August 2023"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53553348339/in/datetaken/" title="Solar net positive 16th Aug 2023"><img src="https://live.staticflickr.com/65535/53553348339_cf4afa06e3_c.jpg" width="100%" alt="Solar net positive 16th Aug 2023"/></a>

Is nice to see that at some times of day in the summer months we are generating more than we are comsuming which means we are feeding back into the grid.

Am going to make some changes and revisit the data in a month. 
