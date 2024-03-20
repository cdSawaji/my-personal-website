---
title: 'Learnings from building a data pipeline'
date: '2023-10-04'
---

I will start with a story which will sound familiar to most engineers working for mid to large size companies. 

**A company gathers data as a by-product of the services and products they build. Over time, the company realizes that they can use this data to extract insights and help drive revenue, growth etc. They put together a team of data engineers and domain specialists (ML engineers or economists) to help with the project. The team comes up with a highly manual and expensive (infrastructure cost and person hours) to gather insights. After a few quarters, the company decides that the insights are indeed valuable but the cost of gathering these insights is expensive. To reduce cost and increase efficiency, an engineering team is put together. Now the engineering team gathers all the context, the learning lessons over multiple quarters and starts putting together a plan to reduce cost and increase efficiency. The engineering team has to do all of this while not disturbing the monthly or quarterly cadence of the data engineers and domain specialists. The engineering team comes up with a winning plan and starts executing. There are multiple iterations over a number of months which provide buggy results or untrustworthy data. Finally, after multiple frustrating runs, the values are correct and usable. The entire process is not manual but still needs minimal human oversight. Now with the data pipeline in place, more computations need to be onboarded. The long never ending struggle of refactoring/re-designing (maintainability and scalability) v/s adding new workflows (the business need) begins.**

If only you had a time machine. 

One can easily identify misses in this story. I’ll list these problems/complaints down and provide realistic expectations of solve-ability of each of them. Once we get these problems out of the way, I will talk about what the team should really focus on or consider when building a data pipeline.
