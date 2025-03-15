---
layout: post
title:  "Orthomosaic"
date:   2025-03-14 09:00:00 +0100
excerpt_separator: <!--more-->
tags: research
category: blog 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54387879449/in/datetaken/" title="tile-model-mesh crop"><img src="https://live.staticflickr.com/65535/54387879449_c7fac2cc5c_c.jpg" width="100%" alt="tile-model-mesh crop"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Nudged forward the work on exploring [orthomosaics](https://www.dronegenuity.com/orthomosaic-maps-explained/) with the DJI mini 4. Mainly exploring the workflow with Agisoft Metashape Pro (we have a floating licence in the lab) and checking to see how well the slighlty random images I took a few weeks ago on the OPS roof garden work. The images below contain orthomosaics and tile-models with textured, solid, mesh and elevation representations. I was also keen to get a sense of the [GSD](https://enterprise-insights.dji.com/blog/ground-sample-distance) (Ground Sample Distance) - some slightly crude testing at 10m indicates a GSD of about 17mm - which is within our requirements.
 
<!--more-->

Feels like opening this door has highlighted 10x things I need to now work out but gives me the confidence we can setup the workflow for monthly scans of the OPS garden. I need to dip into the [tutorials on the agisoft site](https://www.agisoft.com/support/tutorials/). 

I also found myself having to explain what an orthomosaic was to my kids - I said something along the lines of the following; _an orthomosaic takes a bunch of random overlapping images and pieces them together like a jigsaw puzzle. But first, each photo is corrected for distortion and perspective, so everything lines up perfectly. Then, the computer stitches them all together, creating one giant, seamless, and geographically accurate image of the entire area photographed, as if you were looking straight down from above._

Was certainly impressive being able to take the drone photos as input without any markers or reference points (only the gps data in the drone photos) and then create an image that could be overlaid on open street map - not a perfect fit but way closer than I imagined.

First batch of images below.

Tile-model Textured
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54387016545/in/datetaken/" title="tile-model-textured"><img src="https://live.staticflickr.com/65535/54387016545_bbe21f2dd2_c.jpg" width="100%" alt="tile-model-textured"/></a>

Tile-model Mesh
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54386873223/in/datetaken/" title="tile-model-mesh"><img src="https://live.staticflickr.com/65535/54386873223_a628daf786_c.jpg" width="100%" alt="tile-model-mesh"/></a>

Tile-model Solid
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54385763152/in/datetaken/" title="tile-model-solid"><img src="https://live.staticflickr.com/65535/54385763152_9a11c24f93_c.jpg" width="100%" alt="tile-model-solid"/></a>

Tile-model Elevation
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54386833779/in/datetaken/" title="tile-model-elevation"><img src="https://live.staticflickr.com/65535/54386833779_ce71c376f4_c.jpg" width="100%" alt="tile-model-elevation"/></a>

Tile-model Textured showing the locations of the images from the drone as blue squares. Note to the right of the image I was taking some text images at different heights to get a sense of resolution (I didn't mean to include these in this workflow!)
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54386645681/in/datetaken/" title="tile-model-flight-path"><img src="https://live.staticflickr.com/65535/54386645681_3bd51260bd_c.jpg" width="100%" alt="tile-model-flight-path"/></a>

Orthomosaic 1
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54386835394/in/datetaken/" title="orthomosaic1"><img src="https://live.staticflickr.com/65535/54386835394_f40e42756a_c.jpg" width="100%" alt="orthomosaic1"/></a>

Orthomosaic 2 - zooming in
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54386835394/in/datetaken/" title="orthomosaic1"><img src="https://live.staticflickr.com/65535/54386835394_f40e42756a_c.jpg" width="100%" alt="orthomosaic1"/></a>

Orthomosaic 3 - zooming in futher
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54385764807/in/datetaken/" title="orthomosaic3"><img src="https://live.staticflickr.com/65535/54385764807_1aab1434e5_c.jpg" width="100%" alt="orthomosaic3"/></a>

Orthomosaic 4 - zooming towards pond
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54386834964/in/datetaken/" title="orthomosaic4"><img src="https://live.staticflickr.com/65535/54386834964_fd208d2de6_c.jpg" width="100%" alt="orthomosaic4"/></a>

Orthomosaic 5 - finding some flowers to focus on
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54386835059/in/datetaken/" title="orthomosaic5"><img src="https://live.staticflickr.com/65535/54386835059_166998c890_c.jpg" width="100%" alt="orthomosaic5"/></a>

Orthomosaic 6 - measuring distance across flower
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54385763677/in/datetaken/" title="orthomosaic6"><img src="https://live.staticflickr.com/65535/54385763677_6f0c6409df_c.jpg" width="100%" alt="orthomosaic6"/></a>

Orthomosaic 7 - flower measurement zoomed in to view at pixel level
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54386873578/in/datetaken/" title="orthomosaic7"><img src="https://live.staticflickr.com/65535/54386873578_e42075e61b_c.jpg" width="100%" alt="orthomosaic7"/></a>

The video below shows the zooming in process and the use of the measure tool to get a sense of scale.
<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/54386835774/in/datetaken/" title="zoom-to-flower"><img src="https://live.staticflickr.com/31337/54386835774_39cbee3f96_c.jpg" width="100%" alt="zoom-to-flower"/></a>
