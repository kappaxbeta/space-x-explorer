#Space X Launch Explorer

Data provided by https://docs.spacexdata.com/,

To start the project, run npm install and npm start.

Preview Link: https://space-x-explorer.vercel.app/

## Details

This project is using create-react-app, redux, and grommet.
Axios handle the API request, and with react-cool-img is taking care of loading the large images.

## Idea's

- more information in the detail view of the launch
- ordering feature, search and filter ( e.g. Future Lauch)
- Rockets, Ships, and Vehicles listing with information
- Space X info site
- nice to have: automated testing

### Bugs

- mobile detail launch page: scrolling is headstrong in the detail view when a lot of images are loaded
- history page: render cached store after probably staying long on the site
