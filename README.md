# ReactJS Basics

Reviewing React applications with the focus on implementing simple functionalities.

## Application: Videos

fetching and displaying videos from YouTube.

### Features

* Using Axios to fetch data using an API
* Using the YouTube API (using an API Key, no OAuth)
* Using semantic-ui-css to style the app, including the grid
* Using simple state through the constructor (syntactic-sugar version)
* Using the props system to send data to a child of a child
* Using the props system to send data from a child to the parent of the parent (to the grand-parent?)
..* Sent a callback method from the parent to the child and from the child to the grand-child. This is when the limits of the props system become evident as the code is not ready to reason about; if having to send more callback methods to different components the mental burden would build up considerably.
* Reused the Spinner Component from the 'seasons' application showing the importance of building reusable components