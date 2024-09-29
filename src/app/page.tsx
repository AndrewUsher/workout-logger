import { HydrateClient } from "@/trpc/server";
import { WorkoutLoggerLandingComponent } from "@/components/workout-logger-landing";

export default async function Home() {
  return (
    <HydrateClient>
      <WorkoutLoggerLandingComponent />
    </HydrateClient>
  );
}
