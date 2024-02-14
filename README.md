# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This project, developed as an individual endeavor, showcases a Quiz Game focused on U.S. History. Designed and implemented by Shuaib Ali, the game offers an interactive way to test and enhance knowledge on various historical events and figures of the United States. Alongside the game, the application integrates a CountryInfo feature, leveraging external web services to 
provide educational content on countries worldwide.

Game Implementation
Developed by: Shuaib Ali

=> Game Features:

A selection of multiple-choice questions covering a broad range of U.S. history topics.
Immediate feedback on answers chosen by the player, with correct answers revealed for educational purposes.
A scoring system to track player performance throughout the game.
A review section at the end of each game session, listing questions answered incorrectly along with their correct answers.

=> Web Service Integration
CountryInfo API:

As part of the project's goal to provide educational value, the CountryInfo API is employed to offer users additional information about countries across the globe. This integration allows users to explore details such as country names, capitals, populations, and Region, further enriching the learning experience provided by the quiz game.


- Run the following:
- npm install
- npm run dev  : to run  the applicaiton locally

- Api URLs:
- 1. `https://restcountries.com/v3.1/capital/${capital}`
- 2.  `https://restcountries.com/v3.1/region/${region}`


