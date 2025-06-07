---
layout: post
title:  "Cities in the Metaverse"
date:   2025-06-07 08:00:00 +0100
excerpt_separator: <!--more-->
tags: publication
category: blog 
---

![Book cover by Andy](/assets/img/blog/metaverse.jpg)
_Image from Cities in the Metaverse book cover by Andy Hudson-Smith_

This time last summer I was focusing on researching and writing a chapter on AI for the Cities in the Metaverse book with Andy and Valerio. The process was mostly fun, I loved the research and deep dive to connect the dots between the future we’re building and the ideas that brought us to this point. It was a lesson in patience; I'm learning that my frustration with writing isn't a lack of skill, but that the craft itself requires time. The book is now available and am curious to see where this takes us next: [Cities in the Metaverse - Digital Twins, Society, Avatars and Economics on the New Frontier](https://www.routledge.com/Cities-in-the-Metaverse-Digital-Twins-Society-Avatars-and-Economics-on-the-New-Frontier/Hudson-Smith-Signorelli-Wilson/p/book/9781032576695). It also prompted me to remind myself of what I wrote! Turns out I covered Turing Tests, Douglas Adams Babel Fish, Bukimi no Tani, Perlin noise, VAE's, Black Mirror and NERF's.

<!--more-->

We scrolled right back to the foundational work of Alan Turing and revisited the [1956 Dartmouth conference](http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf), the event that essentially kicked off the entire field of AI. The questions they were asking then — about how to determine if a machine is truly "intelligent" — are still incredibly relevant. How do we create digital experiences and avatars that are believably and authentically real? This brings up a major hurdle we discussed while writing: the challenge of getting digital humans to *feel* right. The Japanese roboticist Masahiro Mori coined a term for this back in 1970: the "[uncanny valley](https://spectrum.ieee.org/the-uncanny-valley)." It’s that eerie feeling you get when an avatar or robot looks almost perfectly human, but a few subtle flaws make it feel unsettling instead of familiar. Avoiding that valley is critical. If we want the metaverse to be a place for genuine social connection, we need to design avatars people are comfortable interacting with.

On a more optimistic note, as a terrible learner of languages, I’ve always loved Douglas Adams’ idea of the Babel Fish from *The Hitchhiker's Guide to the Galaxy*. The concept of a universal, real-time translator is the holy grail for global communication. The prospect of seamlessly talking to anyone, anywhere, in any language within a shared virtual space is an exciting development to watch and is one of those inventions that I didn't think my generation would get to witness - but it feels quite close. I also found myself exploring films like Big Hero 6 and games like [No Mans Sky](https://www.nomanssky.com/) (am not a big gamer but I love No Mans Sky - meaning I now have 3 games I play - Elite, Portal and No Mans Sky!). The procedural generation of worlds took me down some very large rabbit holes! But it did allow me to include a code example as a reference in the book - if you want to learn how to generate trees using L-systems, check out the code on [this Google Colab](https://github.com/djdunc/djdunc.github.io/blob/main/projects/Lsystems/L_systems.ipynb)

![No Mans Sky](https://www.nomanssky.com/media/legacy/uploads/2017/02/NewEridu.png)
_Procedural generation in No Mans Sky_

But as this technology evolves, you can’t help but feel we should be paying more attention to the cautionary tales. For me, the most potent modern warnings come from Charlie Brooker’s *Black Mirror*. The series is a brilliant, and often unsettling, exploration of how our best intentions can have unintended and negative consequences. As we lay the foundations for the metaverse, it feels like we have a responsibility to keep those lessons in mind and think critically about the worlds we’re building.

Exploring the potential of the metaverse was a great experience, and I really enjoyed the discussion we had when developing the structure of the book. Next up is how this informs some of the next phases of research in Connected Environments. For the past year we have been noodling on what facility we develop at UCL East to explore what the metaverse means for cities and society - and specifically how we can conduct research where we are active participants in the metaverse as part of our daily life. We have been imagining a space that is physical, but is infinitely extensible via the metaverse. Where the physical space affords collaboration and interaction that is also supported by the digital. A hybrid digital physical environment where you can spend days not hours. My last email of the week ended with the following comment:  _"would be really cool to have a mock up space station at UCL East inhabited by researchers.”_ Fingers crossed that proposal sparks some interest…

[![Hassell Mars Habitat - via Design Museum Space Architecture (2019)](https://designmuseum.org/image/9d2a2860-f11d-474a-b82f-263283530b8e)
_Hassell Mars Habitat - via Design Museum Space Architecture (2019)_](https://designmuseum.org/whats-on/talks-courses-and-workshops/space-architecture)


<hr>
Extra - intro to chapter 6:

## Turings Dream
Artificial intelligence (AI) has transitioned from science fiction to the practical tool that empowers us to automate tasks once thought impossible. It has become an everyday reality, transforming the way we live, work, and interact with one another. Those same technologies are blurring our perception of reality in the Metaverse and playing a crucial role in enabling the creation of realistic and immersive virtual environments.

Since its inception at the Dartmouth conference in 1956, artificial intelligence has progressed significantly as a research domain. The formulation of the Turing test, alongside the establishment of foundational concepts like symbolic reasoning and machine learning, has catalysed advancements across a spectrum of modern computing fields. AI's influence extends to diverse domains, ranging from natural language processing and computer vision to robotics and machine learning.  However, its potential impact goes far beyond these individual domains. In the next phase of technological evolution, AI will play a crucial role in shaping a metaverse that looks and feels indistinguishable from the world around us. As we continue to explore and develop our digital landscape, AI will provide the tools for creating systems that feel more intelligent, with an ability to learn, adapt, and make decisions in real-time. AI will be a key technology enabling the full potential of the metaverse, providing us the means to create new forms of communication, collaboration, and creativity that were previously unimaginable.

In this chapter we introduce key elements of AI research that are already changing the way we build and interact with the metaverse. These behind the scenes building blocks are often not directly visible, but are influencing most of the action in the environment. One of the key concepts in AI relevant to the development of the metaverse is machine learning (ML). ML is a subset of AI that enables computers to learn from data without being explicitly programmed. This simple concept has been transformative given the exponential growth of data afforded by the internet. In the past couple of decades we have been collecting pictures, videos, stories, songs and many other sources of data. In turn that has been tagged with descriptive information such as colour, subject, location and indexed by search engines so that others can find it. This explosion of data is providing the raw materials from which we are using machine learning to generate our future metaverse. For example, an ML algorithm could be trained on a dataset of images of forests and use this training to generate a photorealistic virtual forest in the metaverse.

In the following sections we explore key AI technologies impacting the metaverse. We discuss how natural language processing (NLP) is being used to create more human-like interactions with non player characters, and increasing accessibility through making environments more inclusive and responsive to individual user abilities and preferences or through translation and localisation. We explore how AI is being used to power content creation through generative design tools, and introduce how machine vision enables computers to interpret and understand visual data from the real world. The section on enhancing realism introduces emerging techniques such as neural rendering, spatial audio and dynamic world simulation as examples of work towards creating lifelike experiences using cutting-edge advancements in AI and immersive technologies.

However, amidst the promise of these technological advancements, history shows us that it is essential to consider the ethical implications and potential challenges that AI presents. As we create these tools on our journey to build the Metaverse, we must navigate carefully, addressing concerns and ensuring that AI serves as a force for positive transformation while mitigating any unintended consequences that may arise. We conclude the chapter commenting on some of ethical challenges we will encounter and the socio-economic impacts of how these technologies will reshape industries, economies, and society at large.
[end]

Sections in the chapter:
- To be human in a virtual world
- AI-Powered Content Creation
    - Automated world-building
    - Procedural content generation
    - Avatar creation and customization
- Broadening Modes of Interaction
- Enhancing Realism
- Improving Accessibility and Ethics