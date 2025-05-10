---
layout: post
title:  "Multispectral Training"
date:   2025-05-09 09:00:00 +0100
excerpt_separator: <!--more-->
tags: training
category: blog 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54509555825/in/datetaken/" title="Multispectral"><img src="https://live.staticflickr.com/65535/54509555825_fd966ec64a_c.jpg" width="100%" alt="Multispectral"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Back at Cranfield for some drone training, this time with the Multispectral DJI M3M. A few of us from UCL East (CASA, CBER, Robotics) spent a day with Ben Crisford from [DPA](https://www.dronepilotacademy.co.uk/) (and [ Crossbill Forestry](https://www.crossbillforestry.co.uk/)) learning the [basics of Multispectral imaging](https://www.dronepilotacademy.co.uk/product/multispectral-course/) in the morning and then out flying and data processing in the afternoon. 

<!--more-->

Some really good insights into reflected light in different spectral bands and in particular the four used on the M3M - Green (550nm +-16), Red (650nm +-16), Red Edge (730nm +-16), Near Infrared (860nm +-26) - and how the combination of the reflected radiance from each sensor can be used calculate the status of vegetation. For example, chlorophyll in plants reflect more Near Infrared and represent a healthy leaf. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54508331152/in/datetaken/" title="DPA Multispectral"><img src="https://live.staticflickr.com/65535/54508331152_808146c1a1_c.jpg" width="100%" alt="Multispectral"/></a>

A key part of the practical application of Multispectral imaging seems to be selecting the appropriate visual / vegetation indices for the task at hand. We mainly discussed NDVI ( NDVI=(NIR-Red)/(NIR+Red) ), NDRE and when to use in combination with RGB - a long list of indices used are at [https://www.indexdatabase.de](https://www.indexdatabase.de)

Some sample images from one shot using the 5 different sensors during the flight are below:

RGB
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54509210881/in/datetaken/" title="RGB"><img src="https://live.staticflickr.com/65535/54509210881_29be5fe471_c.jpg" width="100%" alt="RGB"/></a>

Green
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54509399304/in/datetaken/" title="G"><img src="https://live.staticflickr.com/65535/54509399304_9c251589a0_c.jpg" width="100%" alt="G"/></a>

Red
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54509564155/in/datetaken/" title="R"><img src="https://live.staticflickr.com/65535/54509564155_1058d2cf77_c.jpg" width="100%" alt="R"/></a>

Red Edge
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54509564150/in/datetaken/" title="RE"><img src="https://live.staticflickr.com/65535/54509564150_1ae63a30e5_c.jpg" width="100%" alt="RE"/></a>

Near Infra Red
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54509399294/in/datetaken/" title="NIR"><img src="https://live.staticflickr.com/65535/54509399294_d63069f6b1_c.jpg" width="100%" alt="NIR"/></a>



After my previous challenges with getting the Matrices 4E to follow terrain while maintaining a low GSD it was really handy being able to get Ben’s feedback on approaches he uses to automate the terrain following - various notes made and was good to see that practicalities of implementing these approaches in the field later in the afternoon. Need to go and look at downloading the 1m resolution digital surface model from the [UK national lidar programme](https://environment.data.gov.uk/dataset/2e8d0733-4f43-48b4-9e51-631c25d1b0a9).



Other useful links include:

- [Copernicus Browser](https://browser.dataspace.copernicus.eu/?zoom=12&lat=51.53957&lng=-0.07587&themeId=AGRICULTURE&visualizationUrl=U2FsdGVkX1%2Bz0cWOErmp7pRQahJt%2Boky%2F%2FGyGhb3qmVQNwymR5SBTVP0BE0HclPpT36gL8ZPyOexUQ1jWut397rB5kFNpoHsFUBOLuKG%2FGCJyIh0eU%2FPOjbIZ7VUdyAJ&datasetId=S2_L1C_CDAS&fromTime=2025-05-02T00%3A00%3A00.000Z&toTime=2025-05-02T23%3A59%3A59.999Z&layerId=3_NDVI&demSource3D=%22MAPZEN%22&cloudCoverage=30&dateMode=SINGLE) to explore lower res (30m) data from across the country

- [Opendronemap](https://www.opendronemap.org) as an alternative platform for analysing mission data

- This paper [Daniels, L.; Eeckhout, E.; Wieme, J.; Dejaegher, Y.; Audenaert, K.; Maes, W.H. Identifying the Optimal Radiometric Calibration Method for UAV-Based Multispectral Imaging. Remote Sens. 2023, 15, 2909.](https://doi.org/10.3390/rs15112909) 

- [DJI Agras T40](https://www.dji.com/uk/t40) - the future of precision farming

- [Mountain Rescue Map](http://www.mrmap.org.uk) “The software is written and the project is run by currently serving Mountain Rescue Team Members. [...] The MRMap team members are volunteers and give of their time and effort for nowt. ” Really interesting [background here](http://www.mrmap.org.uk/index.php/overview-and-history)

- [Air Forestry](https://www.airforestry.com/en/) - the onward progress of drone applications - can imagine this one inspiring future horror films…


<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54509390004/in/datetaken/" title="Multispectral"><img src="https://live.staticflickr.com/65535/54509390004_770fa8b265_c.jpg" width="100%" alt="Multispectral"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54509555750/in/datetaken/" title="Multispectral"><img src="https://live.staticflickr.com/65535/54509555750_7e093738bf_c.jpg" width="100%" alt="Multispectral"/></a>