---
title: I (kind of) Learned Kerberos So You Don't Have To
published: 2025-06-21
description: 'Kerberos giveth, and Kerberos Taketh Away'
image: ''
tags: []
category: ''
draft: true
lang: ''
---

blah blah blah intro

The question I asked - which, mind you, is one I've been asking since I could form words - is this; "why"? Dear reader, I can both wholeheartedly recommend while simultaneously disuading you from asking such questions about Kerberos. But now that I've asked this question of myself, hopefully you don't have to. 

To simplify this down, we only have to ask ourselves one question: "where do we have full control?". In the case of the TGS-REP, we lack completely control over the `EncTicketPart` section of our ticket, meaning that any tampering we do to our user-controlled portion of an AP-REQ would fail on the service host as there would be mismatches with the user-controlled portion. Likewise, this question also explains why both silver and golden ticket attacks are possible. For silver tickets, the `[USER ENCRYPTED THING HERE] (encrypted with a service session key) and the [SERVICE ENCRYPTED THING] (encrypted with the service account's hash) can both be controlled by the adversary, meaning we can build a valid request to a service (assuming no PAC validation is in place). Golden tickets function for the same reason - because we control the `krbtgt` hash (`EncTicketPart`) and have control over the `Authenticator` data, we can generate valid TGS-REQs and send them to the TGS (KDC, more than likely) to request our necessary services.

Side note: this question of control is probably a good sanity check you can give yourself during offensive engagements, as it may give you a better sense of what directions you should pursue.

Overall, these facts are nothing new; no groundbreaking information is said here. But what this hopefully does is give you more clarity on why the attacks we have today work and why other paths are less possible.

I would recommend Zero Point Security's Kerberos Fundamentals course, but unfortunately the course is no longer available. I'll try and find some other course or content piece that can assist with any further questions folks may have. 
