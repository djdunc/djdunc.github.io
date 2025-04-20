---
layout: post
title:  "DJI Matrice 4E"
date:   2025-04-19 09:00:00 +0100
excerpt_separator: <!--more-->
tags: research
category: blog 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54454626416/in/datetaken/" title="TerraATcameras"><img src="https://live.staticflickr.com/65535/54454626416_596ab16da0_c.jpg" width="100%" alt="TerraATcameras"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Continuing learning and preperation for capturing orthomosaic photos of fields in Wiltshire this week as a contribution into a [UCL Grand Challenge](https://www.ucl.ac.uk/grand-challenges/) project. We took delivery of the DJI Matrice 4E so the notes below are reminders of the process of getting started.

<!--more-->

First up, the Matrice 4E feels big! Moving from a year with the DJI Mini 4 Pro to this felt a little more serious. Felt like you need to have a licence to fly this thing. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54454626911/in/datetaken/" title="bigger drone"><img src="https://live.staticflickr.com/65535/54454626911_63cf689c19_c.jpg" width="100%" alt="bigger drone"/></a>

The enterprise controller is also big - and a really nice interface to work with - felt like the screen was big enough to do things like setting up missions on the device (vs on the desktop and then uploading) but my finger did not feel precise enough for touch so may think about a stylus.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54453780687/in/datetaken/" title="DJI controllers"><img src="https://live.staticflickr.com/65535/54453780687_c21928272e_c.jpg" width="100%" alt="DJI controllers"/></a>

Getting started was pretty straightforward and the [tutorials on DJI site](https://enterprise.dji.com/matrice-4-series/video) provide a quick overview. My focus was on trying to work out how to set-up a mission to create an orthomosaic and in particular to explore the settings needed to get the GSD at under a cm ([building on work a few weeks ago](https://www.iot.io/blog/2025/03/14/orthomosaic.html)). I found [this overview YouTube video of using DJI Terra](https://www.youtube.com/watch?v=wAL8wuEarqI) useful for getting started with creating Orthomosaics and 3D models. 

After updating the drone details on our Ops Manuals / GitHub repository and marking up the drone with Operator ID I found I needed Windows to use Terra and the games PC we have at home (circa 2016) didn't have enough memory - so a quick upgrade was required to process the test flight data.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54454652411/in/datetaken/" title="Terra running"><img src="https://live.staticflickr.com/65535/54454652411_f5d67ba613_c.jpg" width="100%" alt="Terra running"/></a>

Below are some outputs from the first test runs. The images below are with a GSD of around 0.7cm (flying at 18m height), I have since done a second test flight getting around 0.3cm GSD. Next up will be comparing the Terra outputs to those generated in Metashape Pro.

Orthomosaic output, white dots show image locations.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54454819694/in/datetaken/" title="Terra2Dortho"><img src="https://live.staticflickr.com/65535/54454819694_36d72e76e3_c.jpg" width="100%" alt="Terra2Dortho"/></a>

Pyramids show camera photo locations with arrows on base showing direction of travel. The diagonal from right hand side into centre show camera moving from -90deg (down) to -45deg to get reference images for topography.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54454986810/in/datetaken/" title="TerraATcameraAngle"><img src="https://live.staticflickr.com/65535/54454986810_de609f25ea_c.jpg" width="100%" alt="TerraATcameraAngle"/></a>

Height map.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54454819869/in/datetaken/" title="TerraHeightPointcloud"><img src="https://live.staticflickr.com/65535/54454819869_3169654340_c.jpg" width="100%" alt="TerraHeightPointcloud"/></a>

RGB pointcloud

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54454879313/in/datetaken/" title="TerraRGBpointcloud"><img src="https://live.staticflickr.com/65535/54454879313_07b386ede4_c.jpg" width="100%" alt="TerraRGBpointcloud"/></a>

Type map (brown is ground)

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54453780522/in/datetaken/" title="TerraTypePointcloud"><img src="https://live.staticflickr.com/65535/54453780522_8596aab85d_c.jpg" width="100%" alt="TerraTypePointcloud"/></a>

3D model output

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54454819579/in/datetaken/" title="TerraModel"><img src="https://live.staticflickr.com/65535/54454819579_dd2261fced_c.jpg" width="100%" alt="TerraModel"/></a>

Some other links of interest found during the process. This [blog post has useful comparisons](https://geonadir.com/matrice-4-enterprise/) of flight paths under different settings - am curious about their observation on [pure nadir](https://en.wikipedia.org/wiki/Nadir) vs the smart (3 directional) of Matrice 4E. Plus [DJI info on terra](https://www.dji.com/uk/dji-terra/info). 

<a data-flickr-embed="true" data-footer="true" href="https://www.flickr.com/photos/pseudonomad/54454986510/in/datetaken/" title="geonadir1"><img src="https://live.staticflickr.com/65535/54454986510_f9066806ba_c.jpg" width="100%" alt="geonadir1"/></a>

<a data-flickr-embed="true" data-footer="true" href="https://www.flickr.com/photos/pseudonomad/54453780077/in/datetaken/" title="geonadir2"><img src="https://live.staticflickr.com/65535/54453780077_a86f0a315d_c.jpg" width="100%" alt="geonadir2"/></a>

