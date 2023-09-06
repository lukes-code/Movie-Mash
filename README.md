# Movie-Mash :movie_camera:

A project to play around with the View Transition browser API as well as react-query for the first time.

As of writing this, to view the changes live you need to toggle view transition support in Chrome experimental.
You will also need an API key from https://www.themoviedb.org/?language=en-GB

Nextjs, tailwind, react-query and view transition (Next package from https://github.com/noamr/use-view-transitions)

Using context to store the saved movie listings to prevent refetching on re-routing back to the index page, this allows for view transition to use the movie and movies pages to compare snapshots (refetching would cause a loading state and prevent comparable snapshots).

This can also be done without using Context API by making use of getStaticProps to house the fetch, as this will run the query at build time.
However, this will become an issue down the line if you wish to implement live fetching such as movie search.

## Example of the view transition (33fps gif)

![ezgif com-video-to-gif (7)](https://github.com/lukes-code/Movie-Mash/assets/21207597/63607141-4c7f-44f4-b28b-8094eb1c6099)


## Example of the view transition (Video)

https://github.com/lukes-code/Movie-Mash/assets/21207597/c9b0999c-15d3-46a2-9992-d533efe02f7e


