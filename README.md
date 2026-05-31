# Polar Monitoring EMS

## React + TypeScript + Vite App

This is a React project bootstrapped with Vite using TypeScript.

## Setup

Run the following commands to run locally:
- npm i
- npm run dev
- go to http://localhost:5173/

## Design Decisions

When designing this app, I decided to keep it very simple and clean. When displaying analytics, it is easy to get overwhelmed and make it overly complicated. I assumed the user would be a non-technical person who would use this dashboard as an everyday checkpoint. The main focus was to keep the UI modern but intuitive. Due to time limitations, I decided to use a component library (MUI). This definitely saved some time but meant I had less freedom when it came to customisation.

I kept a dark theme as it gives the elements more contrast.

## UX Choices

I split the elements into their own pages (dashboard, alerts, and graphs). I think this is a better, more refined UX. It gives the user the option to only see what is required at that point rather than bombarding them with all the data and figures in one place.

This decision was also made because it was a mobile UI. Within a desktop project, I might have extended the amount of data/content that I added to the pages purely because of space. I used a hamburger menu rather than a bottom menu just to save some space, but depending on the full design, the bottom menu might be a better option, especially for non-technical users.

## Trade-offs

In a real-life scenario, I might not have used MUI. It definitely helps with speed but limits custom designs. This would depend on how rigorous the real project design needed to be. I have not worked much with Figma, so I prioritised the actual app design and implementation. Personally, I find it much easier to make UI adjustments directly in code rather than in a design file. This also allows me to see how UI changes influence the rest of the code and gives me an idea of its complexity. Design files are very important, but the UI will never be a perfect representation of them, so using code directly is more intuitive for me.

I used MUI icons rather than the icons in the brand guidelines document, as converting those into SVGs would take too much time. 

## Improvements

There are a few UI elements that I would have cleaned up if I had time, for example the alerts page and filter. The navigation menu could also be a bit cleaner and smoother. I also intended to make the UI fully light/dark mode enabled, but I ran out of time. I prefer a dark theme, but I also know that many users would prefer a light theme.

I would also have done a bit more research on a practical system and what would be realistic, but that would mostly be for my personal interest. If time allowed, I would have wanted to build a loading component and make it brand-aware. I would also have used a few more of the suggestions in the guidelines.

Overall, I greatly enjoyed this project. I could have spent many more hours experimenting with the design and implementation. Regardless of what happens, I am grateful to have been given this opportunity. It reminded me why I love front-end development, so thank you.  

