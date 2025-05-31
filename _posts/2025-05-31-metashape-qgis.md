---
layout: post
title:  "Metashape, QGIS mapping orthos"
date:   2025-05-31 09:00:00 +0100
excerpt_separator: <!--more-->
tags: research
category: blog 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54557398376/in/datetaken/" title="OSR04"><img src="https://live.staticflickr.com/65535/54557398376_0527476fd9_c.jpg" width="100%" alt="OSR04"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

The processing of the data from the [drone flights for the WildPosh project](https://www.iot.io/blog/2025/04/26/wildposh.html) is almost at the end of the first phase, with the orthophotos and 3D models being generated from the drone imagery and the resulting data being imported into QGIS for mapping. After 7 years at CASA i am finally booting up QGIS and doing some mapping!

<!--more-->

The first step was to use [Agisoft Metashape](https://www.agisoft.com/) to process the drone imagery into orthophotos and 3D models. This is a complex process that involves aligning the images, generating a point cloud, and then creating the orthophoto and 3D model from the point cloud. The screenshot below shows the processing in Metashape, where the drone imagery is being aligned and the point cloud is being generated. The blue area is the area of interest, and the black lines are the camera positions. 

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54556521707/in/datetaken/" title="metashape-processing"><img src="https://live.staticflickr.com/65535/54556521707_1f938d26c0_c.jpg" width="100%" alt="metashape-processing"/></a>

The screenshot below highlights the task manager showing the resource usage on our AI machine during the processing. Was interesting to see the different resource usage patterns for the different tasks, with some tasks being more CPU intensive and not as much GPU usage as I anticipated.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54557397816/in/datetaken/" title="CPU-ai-ai2"><img src="https://live.staticflickr.com/65535/54557397816_6d16df2317_c.jpg" width="100%" alt="CPU-ai-ai2"/></a>

The following screenshot shows a sample of the resultant orthophotos - high-resolution images that are geometrically corrected to be uniform in scale. The GSD (Ground Sample Distance) ranged from 0.5cm to 1.2cm depending on the terrain follow model being used. The orthophoto is a composite of the images taken by the drone, stitched together to create a single image that represents the area of interest. The orthophoto is georeferenced, meaning that it is aligned with the real-world coordinates of the area.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54557641018/in/datetaken/" title="metashape-stats"><img src="https://live.staticflickr.com/65535/54557641018_e8a3f647f8_c.jpg" width="100%" alt="metashape-stats"/></a>

Orthophotos were generated for 4 of the OSR sites and contained 8 flights - I was trying different terrain follow models to understand the impact on the GSD and the resultant orthophotos. These large TIF files (about 1-2GB each) were then exported from Metashape for import into [QGIS](https://www.qgis.org/), an open-source geographic information system (GIS) application that allows users to create, edit, visualize, analyze, and publish geospatial information. The goal was to create a map view of the various sites to show the orthomosaic images as full resolution tiles. The orthos were imported as a raster layer in QGIS, projection set to EPSG:43260 (WGS 84), and then settings edited to output tiles at zoom levels 12-25 with DPI of 128.

Still a work in progress but we now have a [prototype one map view](https://wildposh.cetools.org) (thanks Steve!) to share with the other researchers so that they can explore the data via a website prior to starting the image processing and analaysis on these multi gigabyte orthophotos. Next steps are to add in the other 6 layers of map tiles and make it a little more intuitive to select the different OSR sites.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54557450551/in/datetaken/" title="Wildposh web proto1"><img src="https://live.staticflickr.com/65535/54557450551_b0811e3084_c.jpg" width="100%" alt="Wildposh web proto1"/></a>

In other news this week, a lovely sunset over the allotment.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54557570039/in/datetaken/" title="Allotment Sunset"><img src="https://live.staticflickr.com/65535/54557570039_2a1f5aa7d7_c.jpg" width="100%" alt="Allotment Sunset"/></a>