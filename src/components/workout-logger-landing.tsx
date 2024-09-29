import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getServerAuthSession } from "@/server/auth";
import { Leaf, TreePine, Mountain, Users } from "lucide-react";
import Link from "next/link";

export async function WorkoutLoggerLandingComponent() {
  const session = await getServerAuthSession();
  return (
    <div className="flex min-h-screen flex-col bg-stone-100">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="sr-only">NatureTrack</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {session?.user ? (
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/dashboard"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                className="text-sm font-medium underline-offset-4 hover:underline"
                href="#"
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium underline-offset-4 hover:underline"
                href="#"
              >
                Pricing
              </Link>
              <Link
                className="text-sm font-medium underline-offset-4 hover:underline"
                href="#"
              >
                About
              </Link>
              <Link
                className="text-sm font-medium underline-offset-4 hover:underline"
                href="#"
              >
                Contact
              </Link>
            </>
          )}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full bg-green-900 py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-green-50 sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Track Your Workouts, Naturally
                </h1>
                <p className="mx-auto max-w-[700px] text-green-200 md:text-xl">
                  Connect with your body and the earth. Log your workouts with
                  NatureTrack - the eco-friendly way to fitness.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-green-300 bg-green-50 text-green-900 hover:bg-green-100"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-stone-200 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-green-900 sm:text-5xl">
              Features
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <TreePine className="mb-4 h-12 w-12 text-green-600" />
                <h3 className="mb-2 text-xl font-bold text-green-800">
                  Eco-Friendly Tracking
                </h3>
                <p className="text-green-700">
                  Log your workouts with minimal environmental impact.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Mountain className="mb-4 h-12 w-12 text-green-600" />
                <h3 className="mb-2 text-xl font-bold text-green-800">
                  Nature-Inspired Workouts
                </h3>
                <p className="text-green-700">
                  Get workout ideas that connect you with the outdoors.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="mb-4 h-12 w-12 text-green-600" />
                <h3 className="mb-2 text-xl font-bold text-green-800">
                  Community Challenges
                </h3>
                <p className="text-green-700">
                  Join eco-conscious fitness enthusiasts in group challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-green-800 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <blockquote className="text-center text-2xl font-semibold italic text-white">
              "NatureTrack has transformed my fitness journey. I feel more
              connected to my body and the environment than ever before."
            </blockquote>
            <p className="mt-4 text-center text-green-200">
              - Alex Green, Fitness Enthusiast
            </p>
          </div>
        </section>
        <section className="w-full bg-stone-100 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-green-900 sm:text-5xl">
                  Ready to Start Your Eco-Friendly Fitness Journey?
                </h2>
                <p className="mx-auto max-w-[600px] text-green-800 md:text-xl">
                  Join NatureTrack today and take the first step towards a
                  healthier you and a healthier planet.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 border-green-300 bg-green-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-green-600 text-white hover:bg-green-700"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-green-700">
                  By signing up, you agree to our Terms & Conditions and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-green-300 bg-stone-200 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-green-700">
          © 2024 NatureTrack. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs text-green-700 underline-offset-4 hover:underline"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-green-700 underline-offset-4 hover:underline"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
