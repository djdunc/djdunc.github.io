---
id: 601
title: 'Pervasive 2010 Helsinki'
date: '2010-05-19T06:58:59+00:00'
author: djdunc
layout: post
guid: 'http://beta.driversofchange.com/emtech/2010/05/19/pervasive_2010_helsinki/'
permalink: /2010/05/19/pervasive-2010-helsinki/
categories:
    - IoT
    - 'research and funding'
    - 'ubiquitous computing'
tags:
    - conference
    - SENSEI
---

Gonzalo had a demo of his UCL / Arup CASE research at Pervasive this year and I was presenting at a workshop on “Energy Awareness and Conservation through Pervasive computing”. We had great feedback on the ambient displays with several requests for others to use the devices as communication media on their own projects. Next steps will be to make robust units with doorways into different datasets (e.g. resource use at Arup offices).

[![place stats on flickr](https://i0.wp.com/farm2.static.flickr.com/1405/4609623561_23a098c656.jpg?w=1170)](http://www.flickr.com/photos/gonzillaaa/4609623561/)

Place stat\* demo

The workshop was an interesting mix of researchers but heavily focused on the domestic energy monitoring market which was a shame since i think pervasive computing has much to offer the commercial / public building space and will probably have a greater impact than the domestic. Notes are at the bottom of this post but of interest was the use of social norms to influence behaviour, the use of REST to interface data and the lack of looking at patterns in the data to understand meaning. All three of which are areas we are looking at with the internal “Seewatt” research project.

Also of interest was the keynote by [Henry Tirri SVP and Head of Nokia Research](http://research.nokia.com/people/henry_tirri) – which had two key take-aways:

– 4.6 billion users of mobile services, 1.6 billion have bank accounts – what do the other 3 billion do? the demand for banking services via telcos in growth markets. I had heard this anecdotaly but the numbers referenced were very significant.

– on the issues of understanding energy management on mobile devices where transmission is major energy expense ie use cached local version or continually pull from cloud – the future is not about bandwidth or cost but the availability of energy to sustain device use. Whilst he side stepped the question on the commercial drive to get users to replace handsets on 2 year cycles it was interesting that they recognise the benefit in the research community developing methods for continually trying to use less resource.

And finally a great video from the conference on the Formamat project at: <http://formamat.com/>

Links at <http://delicious.com/djdunc/pervasive2010>

Photos on flickr <http://www.flickr.com/photos/pseudonomad/tags/pervasive2010/>

**Notes from WP2 – Energy Awareness and Conservation through Pervasive computing**

Andreas – Cyprus – interacting with smart meters using REST principles – using Web Application Description Language (WADL) to describe services. Using TinyOS nodes to simulate energy meters. <http://www.webofthings.com/energievisible/>

James Scott – Microsoft Research Cambridge – predicting occupancy to control heating and cooling of domestic properties – measured temp on boiler, outside and on at thermostat + using GPS to predict arriving home. Debate – INFORM OR CONTROL?

Jon Bird (Yvonne Rogers) – Open University – CHANGE project – <http://www.changeproject.info>, Tidy St (Brighton), “social norms” (life of brian – we are all individuals – i am not) boomerang affect – people gravitate towards the average – ie if they were below the average they tend up towards it – research done on beer consumption in US. Tidy St – displaying energy use of each house in the street – they liked the idea initially but then got slightly uncomfortable. <http://www.caniturniton.com> a project which says if the national grid is under stress or not (a one pound circuit will tell you the current frequency – also <http://www.dynamicdemand.co.uk/>). So compare national demand with tidy street average.

Jorn – Fachhochschule – matrix of types of usage (info, advice, automation) and data aspects (data sources, processing, interface, control / sharing)

Tatsuo – Waseda Uni – EcoIsland, game play to involve participants. Users add their behaviours and get recommendations for how to reduce resource use (from Japanese gov list of activities). Being used in 7 houses / families.

Matthias – Fraunhofer – energy awareness and self awareness – took measurements from an office / home and then asked inhabitants to review and describe their behaviour during that period. Not the graphs, it is understanding the graphs that is important – the behaviour. About events that occur not the readings themselves (the kink in the curve).

Karthikeya – School of Art and Design, Aalto Uni – Helsinki Energy Informer – video record usage of light switches (to see which ones were on) to monitor the use of lights in an office space – usage sent back to inhabitants via text. Drop in usage between 1st and 2nd week of trial “due to Hawthorn effect” of people being monitored. More activity in use of light switch in second week.

Daphne – TUDelft – a community based approach for engagement. <http://www.livvinggreen.eu/> – changing beliefs, incentives, education, community mgt (Gardner &amp; Stern 1996) – focus here on latter, community mgt.

Jorge Zapico – KTH – <http://www.sustainablecommunications.org/> and an interesting hackday output to compare CO2 to other stuff “to try to help people understand what the measurement kg of CO2 means <http://carbon.to/> and <http://www.jorgezapico.com/>

Giulio – Helsinki Inst. for Info Tech – iPhone app to feedback usage of appliances in lab and also survey / quiz to challenge people to think about resource usage BeAware – <http://www.energyawareness.eu/>

“Cialdini has an interesting take on persuasion” [http://en.wikipedia.org/wiki/Robert\_Cialdini](http://en.wikipedia.org/wiki/Robert_Cialdini)

“lots of talk about sensing and visualising but not much on data mining and making sense out of the data”