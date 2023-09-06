# Movie-Mash

A project to play around with the View Transition browser API as well as react-query for the first time.

As of writing this, to view the changes live you need to toggle view transition support in Chrome experimental.
You will also need an API key from https://www.themoviedb.org/?language=en-GB

Nextjs, tailwind, react-query and view transition (Next package from https://github.com/noamr/use-view-transitions)

Using context to store the saved movie listings to prevent refetching on re-routing back to the index page, this allows for view transition to use the movie and movies pages to compare snapshots (refetching would cause a loading state and prevent comparable snapshots).

This can also be done without using Context API by making use of getStaticProps to house the fetch, as this will run the query at build time.
However, this will become an issue down the line if you wish to implement live fetching such as movie search.

Example of the view transition (33fps gif):
![ezgif com-video-to-gif (5)](https://github.com/lukes-code/movie-mash/assets/21207597/99b9f81e-2285-445b-9bac-343195c1a1a1)


