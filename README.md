# Imgur API demo

imgur web Search gallery developed with ReactJs.

### Project Requirements

- Show gallery images in a grid of thumbnails and lazy load them
- Show image description in the thumbnail, top or bottom
- On clicking an image in the gallery, show its details: big image, title, description, upvotes, downvotes, and score

### Tech

- reactjs
- bootstrap
- lodash
- react-lazy-load
- react-bootstrap
- axios

### Architecture

![Alt text](diagram.png?raw=true "architecture")

### Installation

Clone the respository and install npm and composer dependencies.

```sh
$ git clone https://github.com/diegovargasg/imgurAPI.git
$ cd imgurAPI
$ npm run v-install
```

_In case you are using windows run the command: npm run v-install-windows_

### Serve client

```sh
$ npm start
```

The client server should be running now, usually under:

```js
http://localhost:8080/
```

### Links and resources used:

- https://react-bootstrap.github.io/ - React Bootstrap
- https://create-react-app.dev - Create Reactapp documentation
- https://apidocs.imgur.com/ - imgur API documentation
