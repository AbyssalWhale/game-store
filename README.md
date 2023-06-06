# Game Store
This repository only serves as a demonstration software for demostration of following skills: 
- software development with using TypeScript + React;
- automation testing with using .Net, Python, TypeScript(coming), Java(coming), 
- DevOps with using AWS, GitHub Action, Microsoft Azure DevOps. 
The repository contains code and resources related to video games, where users can retrieve, filter, sort and search games. 

# Features
- search game by name;
- filter by: genre, platform, order by;
- use light or dark mode;

# Technologies Used
The following technologies and tools are used in this repository:
- TypeScript: A statically typed superset of JavaScript, used for writing the codebase and tests;
- React: A JavaScript library for building user interfaces, used for creating the profile application;
- Chakra UI: a simple, modular and accessible component library that gives you the building blocks you need to build your React applications;
- Vite: (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects.

# DevOps
There are two pipelines configured in the repository, which are automatically triggered whenever a new pull request (PR) is opened. 
These pipelines serve as 'Checks' to ensure the quality and functionality of the code. The pipelines are configured in two different places:
- GitHub Actions: This pipeline runs all stages automatically, as they are public and can be reviewed by anyone. The pipeline includes stages such as checking out the code, building it, and deploying the changes.
- Microsoft Azure DevOps: This pipeline also runs automatically, but only for the build and publish stages. The remaining stages require some manual activity to be completed. This configuration is done to optimize cost savings.

The main jobs performed by the pipelines are as follows:
1. Check out the code, build it, and deploy the changes;
2. Retrieve repositories/artifacts containing the tests and execute them;
3. Publish the test results to the corresponding pull request.

It's important to note that only GitHub Actions handles the deployment of the software to AWS. This approach is chosen to optimize cost savings.

# Conclusion
I would like to emphasize the following points:
1. Ongoing Development: Everything in this repository, including the Game Store and the associated tests, is currently in development. I actively switch between projects to continuously enhance my skills in different technologies. It's important to note that this is not the final or most refined version of the software and tests.
2. Skill Demonstration: The main objective of this repository is to showcase my skills and capabilities. While the software and tests may not be the absolute best or most comprehensive versions, they serve as tangible examples of my proficiency in the respective technologies. They demonstrate my ability to work on real-world projects and provide insight into my development approach.

By highlighting these points, it is clear that the repository serves as a demonstration of skills rather than representing finalized or production-ready software.

#Thank you for you time! 
