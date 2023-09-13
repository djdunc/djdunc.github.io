---
id: 598
title: 'ITOBO wireless sensor network design tool'
date: '2010-03-13T21:39:39+00:00'
author: djdunc
layout: post
guid: 'http://beta.driversofchange.com/emtech/2010/03/13/itobo_wireless_sensor_networ/'
permalink: /2010/03/13/itobo-wireless-sensor-networ/
categories:
    - IoT
    - 'research and funding'
    - 'ubiquitous computing'
tags:
    - ITOBO
---

[Alan Gibney](http://www.aws.cit.ie/personnel/PersonalMain.php?User=amcgibney) was over at Arup a couple of weeks ago testing a Wireless Sensor Network design tool in number 8 Fitzroy Street that he developed during his PhD on a tool for wifi access point positioning.

Using a 3D info of the building the tool allows us to figure out the best location for network gateways based on the required location of sensing nodes and the material characteristics of the building. This particular installation was of interest since the majority of the office is open plan which means that the “stuff” that interferes with wireless signals is much more dynamic and difficult to model than say a concrete wall or a glass partition which is traditionally quite stationary and has modelable properties.

![method](https://i0.wp.com/farm3.static.flickr.com/2617/4429740437_70e9fa1bb8.jpg?w=1170)

Data Capture Process

The process shown in the sketch above involved 1\] identifying sensor locations on the fourth floor of number 8 Fitzroy, 2\] walking around the floor plate taking measurements of signal strength for each node in different areas, 3\] mapping the signal strength, 4\] generating a heatmap of gateway options, 5\] running agent based optimisation algos to select optimal gateway positions.

![WSN node map](https://i0.wp.com/farm5.static.flickr.com/4060/4429685425_ee648e6279.jpg?w=1170)

Signal strength of node in different locations of office

The signal strengths were then loaded into the design tool to verify that the actual were similar enough to those predicted in the model. With a mean error of 1.41 the model seemed pretty robust.

The design tool then allows a variety of gateway / sensor nodes positions to be tested and compared for different types of optimisation (battery life, signal robustness, minimising nodes required etc.)

![topology](https://i0.wp.com/farm5.static.flickr.com/4003/4430452656_32ff725744_o.jpg?w=1170)

Topology of possible WSN

A ray launching method is used to propogate the signal strength from a node to a gateway with the journey being recalculated using a motif model that describes the radion propogation model of a material. The image below shows the heat map generated for a gateway positioned in the open plan area of the office.

![gateway](https://i0.wp.com/farm5.static.flickr.com/4025/4430452840_92a3a2361f_o.jpg?w=1170)

Candidate gateway locations

![measure predict](https://i0.wp.com/farm3.static.flickr.com/2766/4430452984_dbd78b9039_o.jpg?w=1170)

Measurement vs Prediction

![heatmap](https://i0.wp.com/farm3.static.flickr.com/2803/4430452772_0ebfbb91cd_o.jpg?w=1170)

Heat map based on signal strength from gateway

Next steps are to use the design tool to model the whole building in preparation to roll out a 200+ node WSN in the building. The aim of the installation will be to monitor light (lux) levels in the office alongside occupancy to analyse and optimise both light comfort levels and energy efficiency.

More detail on the WSN design tool is available at:

[Motif Model](http://www.aws.cit.ie/personnel/PersonalMain.php?User=mklepal)

[Propagation Model](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.132.8246&rep=rep1&type=pdf)

[Optimisation Algorithms](http://www.aws.cit.ie/personnel/PersonalMain.php?User=amcgibney)

All [images on Flickr](http://www.flickr.com/photos/pseudonomad/sets/72157602816009716/)