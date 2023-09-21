---
id: 428
title: 'a few teething issues'
date: '2006-05-09T13:20:49+00:00'
author: djdunc
layout: post
guid: 'http://beta.driversofchange.com/emtech/2006/05/09/a_few_teething_issues/'
permalink: /2006/05/09/a-few-teething-issues/
tags:
    - IoT
    - 'ubiquitous computing'
---

took delivery of 20 motes, a mix of 20 sensor boards, internet gateway and the new moteview software. Started by following the user guide and the tutorials and got simple temp readings out. When i started to try doing my own thing I started to struggle – here are a few reminders for me:

you cannot use the internet gateway with xlisten or xserve from the command line (at least i couldn’t figure out or find the syntax to use….) so dig out the serial gateway….

most laptops no longer have serial ports so i am using a USB Serial converter – this means the port(in Cygwin terms) is not Com4 (as displayed in port settings) but **/dev/ttyS3** not quite sure why or what the logic is i just found reference to this address somewhere and tried it….

the IP of my device on the intranet is 10.3.0.32

next step is to look at programming all sensors so that i get a stream of all sensor data not just temp.