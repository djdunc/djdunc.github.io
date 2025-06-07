---
layout: post
title:  "The LLM whirrs"
date:   2024-05-10 09:00:00 +0100
excerpt_separator: <!--more-->
tags: 
    - resaerch
    - how to work 
category: blog 
---

<a data-flickr-embed="true" href="https://www.flickr.com/photos/pseudonomad/53712049370/in/datetaken/" title="Ollama running llama"><img src="https://live.staticflickr.com/65535/53712049370_6957064d7b_c.jpg" width="100%" alt="Ollama running llama"/></a>

I am starting to use LLM’s as much as I am using Google. This shift has happened over the past six months as a result of both needing to check it out to see how students might be using it and since I am late comer to using ChatGPT to help me scaffold simple code for html, js, css, and python scripts (I have only just this week installed GitHub CoPilot!). I have found the latter transformative in helping me test out ideas quickly without some of the road blocks of trying to figure out what questions to ask on stackoverflow or google. 

<!--more-->

I stumbled across an article by Mike Kuniavsky describing his journey exploring distributed cognition with LLM’s. He discusses how he has been using these tools in his daily life and is much more eleoquent than this post - [go and read it!](https://medium.com/@mikekuniavsky/personal-explorations-in-distributed-cognition-with-foundation-models-40019f932072) I liked how he was using it for really simple tasks like creating lists, sanity checking ideas and finding the name of something - all tasks that on reflection I use [ChatGPT](https://chatgpt.com/) for.

His article also promted me to explore the “running it locally” idea. I really like the idea of being able to have a local conversation rather than having to send bits of data thousands of miles to ask something which is not really that significant. It feels slightly irrisponsible. So following his lead I [installed Ollama](https://ollama.com) and downloaded [Llama 3](https://ollama.com/library/llama3). I have a 2017 iMac with 40Gb RAM and whilst it is noticeably slower than using [ChatGPT 3.5](https://chatgpt.com/) I like the fact it is local. 

I also like the visceral reminder everytime I make a query via iTerm and the fans all start whirring - its almost like the computer is telling me “I can do this for you but do you realise how much embedded energy is in this task…”

A couple of other items popped up as I was doing this research. I am leaving these here since I thought they were interesing:

*“Large Language Models (LLMs) in war games escalate conflicts, showing a tendency towards arms-race dynamics without significant de-escalation across various models tested.”
[AI in War: LLMs ‘Develop Arms-Race Dynamics’ — Bloomsbury Intelligence and Security Institute \(BISI\)](https://bisi.org.uk/reports/ai-in-war-llms-develop-arms-race-dynamics)*

*“Research firm SemiAnalysis suggested that OpenAI required 3,617 of NVIDIA’s HGX A100 servers, with a total of 28,936 graphics processing units (GPUs), to support ChatGPT, implying an energy demand of 564 MWh per day. Compared to the estimated 1,287 MWh used in GPT-3’s training phase, the inference phase’s energy demand appears considerably higher.”  [https://doi.org/10.1016/j.joule.2023.09.004](https://doi.org/10.1016/j.joule.2023.09.004) 564MWh per day! I guess that is only the same as a small to medium sized city...*

<hr>
**Extra Content:**

In case you are interested, I asked ChatGPT 3.5. and llama to write this blog post - my intention was to give it the bullet points of what I wanted to say and then use the response to help me speed up my writing. But both output unusable content which I thought was more interesting in its original form! So i have copied them below as a reminder of the challenge of prompt engineering….

> Prompt used: <br>
> hello llama3, can you write me a blog post using the following bullet points. Can you write it as a british person who is coming from a technical background but is writing for a lay person. 
> - hard to miss the hype around LLMs at moment
> - i am using chat-gpt more and more
> - inspired by this article by Mike https://medium.com/@mikekuniavsky/personal-explorations-in-distributed-cognition-with-foundation-models-40019f932072 to install ollama
> - the whirr of the iMac fans as i make a query provides a physical indication of energy used


**chat-gpt 3.5 output**

Title: Demystifying LLMs: An Everyday Perspective from a Tech Enthusiast

If you've been remotely tuned into the tech scene lately, you can't have missed the buzz surrounding Large Language Models (LLMs). These sophisticated AI constructs are making waves, from sparking debates about their capabilities to revolutionizing how we interact with technology. As someone with a technical background, I've found myself increasingly drawn into the realm of LLMs, particularly through my encounters with ChatGPT.

ChatGPT, an instance of an LLM, has become a staple in my digital interactions. Whether it's for finding information, brainstorming ideas, or even just having a chat, ChatGPT has become a go-to companion. But what sparked my deeper dive into the world of LLMs was stumbling upon an enlightening article by Mike Kuniavsky. In his piece, Mike delves into the concept of distributed cognition with foundation models, shedding light on the profound implications of these AI constructs.

Inspired by Mike's insights, I decided to take the plunge and install OLLAMA, an LLM-based tool. The experience was akin to stepping into uncharted territory, yet the potential for exploration was palpable. As I fired up OLLAMA and posed my first query, I was met with the whirr of my iMac fans spinning up, a tangible reminder of the computational energy being harnessed to fuel my inquiry.

But what exactly do LLMs like OLLAMA bring to the table for the everyday user? At its core, these models are engines of understanding, capable of parsing through vast amounts of data to provide relevant insights and responses. Whether it's helping with research, generating creative content, or even just engaging in casual conversation, LLMs are democratizing access to AI-driven capabilities.

However, amidst the excitement, it's important to recognize the ethical and societal implications that accompany the rise of LLMs. From concerns about data privacy to the perpetuation of biases embedded within the training data, navigating the ethical landscape of AI is no simple feat. As users, we must remain vigilant and advocate for responsible AI development and deployment.

In conclusion, while the hype surrounding LLMs may seem daunting at times, delving into the world of these AI constructs can be a rewarding journey. Whether you're a tech enthusiast or simply curious about the possibilities of AI, embracing LLMs like OLLAMA opens up a world of opportunities for exploration and discovery. So, why not take the plunge and embark on your own AI adventure? After all, the future is already here, and LLMs are leading the way.

**llama 3** 

Title: The Llama's Guide to Large Language Models (LLMs): A Technical Insider's Take on the Hype

Hello there, fellow tech enthusiasts! It's your mate Llama3 here, and I'm excited to share my thoughts on the latest buzz in AI town – Large Language Models  (LLMs). As someone who's been around the block a few times, I thought it was high time for me to dive into the world of LLMs and share some insights with you lot.

First off, let's talk about the hype. It's hard to miss the excitement surrounding these language processing behemoths. And rightly so! The potential applications are endless, from improving customer service chatbots to enhancing our understanding of human behavior. As someone who's always been fascinated by the intersection of tech and society, I'm thrilled to see where this technology takes us.

Now, let me get personal for a sec. I've recently found myself using Chat-GPT more and more in my daily routine. It's amazing how these AI models have come a long way since the early days of language processing. The ability to generate human-like text is nothing short of remarkable.

But what really got me thinking was an article by Mike Kuniavsky, titled "Personal Explorations in Distributed Cognition with Foundation Models." If you're interested in the tech side of things, I highly recommend giving it a read. It's a thought-provoking piece that explores the possibilities of LLMs and their potential to revolutionize our understanding of cognition.

As for me, I decided to take the plunge and install OLLAMA on my trusty iMac. And let me tell you, there's nothing quite like the whirr of those fans as I make a query to get my thoughts flowing! It's a physical reminder that energy is being used – and what an incredible feeling it is!

Now, I know some folks might be thinking, "But Llama3, this all sounds very technical and complicated." Fear not, my friends! I'm here to break it down in a way that's easy to understand.

So, what are Large Language Models? In a nutshell, they're AI systems designed to process and generate human-like text. Think of them like super-smart language learners – except instead of taking years to master the nuances of language, LLMs can do it in mere minutes!

And here's the kicker: these models aren't just limited to processing written text. Oh no! They're capable of understanding and generating spoken language as well! It's a game-changer, if you ask me.

Now, I know some of you might be thinking, "But Llama3, this all sounds very sci-fi and futuristic." And you know what? You're not wrong! The potential applications for these models are endless – from improving customer service to enhancing our understanding of human behavior.

And that's where I come in – as a technical insider turned layman (or at least, trying to be one!). My goal is to help bridge the gap between the tech-savvy and those who might not have the same level of knowledge. So, if you're looking for someone to break it down in an easy-to-understand way, then you've come to the right place!

That's all for now, folks! I hope this post has given you a good starting point for exploring the wonderful world of Large Language Models. And who knows? Maybe one day we'll be able to chat with our AI models like they're old pals!