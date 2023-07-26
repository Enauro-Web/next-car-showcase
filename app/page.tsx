import Image from "next/image";
import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the car you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="fuel" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">Oops, no cars where found</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}