import EarthquakeMap from "@/components/EarthquakeMap";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto p-4">
        <div className="pb-3">
          <p className="text-2xl font-semibold text-[#172899]">
            24-Hour Earthquake Map
          </p>
          <p className="text-lg text-[#f4085a] font-semibold">
            Data Visualization
          </p>
        </div>
        <EarthquakeMap />
      </div>
    </main>
  );
}
