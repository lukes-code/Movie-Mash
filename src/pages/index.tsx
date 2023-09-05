import Movies from "@/components/Movies";

type HomeProps = {
  movies: any[];
};

export default function Home({ movies }: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Movies data={movies} />
      <p>hi</p>
    </main>
  );
}

export const getStaticProps = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const popularMovies = data.results;

    return {
      props: {
        movies: popularMovies,
      },
    };
  } catch (error) {
    console.error(`Error fetching data: ${error}`);

    return {
      props: {
        movies: [],
      },
    };
  }
};
