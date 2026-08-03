---
slug: enterprise-dashboards
category: "Enterprise Data · Distribution"
platform: "BI Dashboard"
navLabel: "Multi-Subsidiary Data Dashboards"
year: "2022"
title: "Enterprise Dashboards for a Multi-Subsidiary Distribution Group"
description: "A food and agriculture conglomerate running distribution, export and laboratory data across dozens of subsidiaries. One dataset, and what you can see depends on who you are."
badge: "Shipped"
client: "Harim Holdings — major food & agriculture conglomerate"
featured: true
order: 2
cover: "/images/enterprise-dashboards/00-cover.png"
gallery:
  - { src: "/images/enterprise-dashboards/01-dashboard.png", alt: "Consolidated group dashboard with subsidiary performance", size: "large" }
  - { src: "/images/enterprise-dashboards/02-access-model.png", alt: "Role-based access model by department, seniority and subsidiary", size: "small" }
  - { src: "/images/enterprise-dashboards/03-colour-hierarchy.png", alt: "Colour and saturation mapped to data hierarchy, before and after", size: "small" }
roleTitle: "UX/UI Designer"
timeline: "3 months • Designer, Engineering, Department heads"
keyChallenges:
  - "One dataset, many audiences with different rights by department, seniority and subsidiary"
  - "Live refresh generated enough traffic to degrade the system for everyone"
outcomes:
  - "60% reduction in report-data retrieval time, validated in post-launch feedback"
  - "Role-based access model scoped through workshops with department heads"
tags: [Data Visualisation, Tableau, Stakeholder Workshops, Access Design]
---

## Overview

Harim Holdings is a major Korean food and agriculture conglomerate — livestock, feed, meat processing, export, and a laboratory arm — operating through a large number of subsidiaries. Distribution data and lab data sat in the same reporting system, and that system was slow, visually undisciplined, and took people a long time to read.

I designed the replacement in Tableau. The interesting problems were not the charts.

## Process

### 1. Scope the access model before the interface

The same dashboard could not be shown to everyone. A subsidiary manager, a parent-company director and a department head have different rights to the same numbers.

I ran workshops with department heads across the group to establish who needed which slice, then shaped access by **department, seniority and subsidiary**. That model determined the information architecture — the layout follows the permissions, not the other way round.

Doing it in that order is the whole point. Access rules retrofitted onto a finished dashboard produce a screen full of hidden and greyed-out things. Access rules decided first produce a screen that looks complete to whoever is looking at it.

![Role-based access model by department, seniority and subsidiary](/images/enterprise-dashboards/02-access-model.png "Who can see what, decided before the layout")

### 2. Trade real-time for usable

Live refresh pulled so much data that it degraded performance for everyone and put pressure on the engineering team.

Working with engineering, we replaced it with a nightly batch load covering the most recent month. Users lost same-day freshness — which the department heads confirmed they did not need — and gained instant filtering by source, country of origin and subsidiary, with no wait.

This was the trade-off I had to argue for, and it was the decision that produced the result.

### 3. Use colour as hierarchy, not decoration

The legacy reports used colour indiscriminately, so nothing stood out and everything competed.

I mapped colour to the data hierarchy deliberately: the highest-performing subsidiary carries full saturation and reads first, while the rest drop in saturation and lightness so the gap between first and the field is visible before anything is read. Where categories were genuinely parallel, hues separate clearly at the lightness where they remain legible.

![Colour and saturation mapped to data hierarchy, before and after](/images/enterprise-dashboards/03-colour-hierarchy.png "Rank made visible before a single number is read")

### 4. Ship, then correct

The first version went out, and I revised it on user feedback from the people actually running reports. The 60% retrieval-time improvement was validated at that stage rather than claimed at launch.

## What this transfers to

Enterprise data design is mostly two things people do not think of as design: deciding who is allowed to see what, and deciding what to trade away to make the thing usable. The charts are the easy part.
