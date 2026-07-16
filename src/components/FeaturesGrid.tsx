import Image from "next/image";

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Our cutting-edge AI and advanced tracking systems provide the ultimate upper hand in your fitness journey.
          </p>
        </div>

        <div className="space-y-32">
          {/* Feature Block 1: AI Nutrition (Text Left / Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
                AI Calorie Tracker & Food Scanner
              </h3>
              <h4 className="text-3xl font-bold">Stop Guessing. Start Snapping.</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Manual logging is dead. Don't waste time searching databases for individual ingredients. Simply snap a picture of your meal and let the integrated AI instantly calculate your calories and macros with pinpoint accuracy.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)] border border-gray-800">
                <Image 
                  src="/images/ai-calorie-tracker-food-scanner.webp" 
                  alt="AI Calorie Tracker & Food Scanner" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>

          {/* Feature Block 2: The AI Coach (Image Left / Text Right) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
                24/7 Interactive AI Personal Trainer
              </h3>
              <h4 className="text-3xl font-bold">Custom Workouts That Adapt in Real-Time.</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Static PDF workout plans lead to plateaus. Meet Fitbuu, your interactive pocket coach. Whether you are dealing with a minor tweak, traveling with limited equipment, or need form correction, Fitbuu dynamically adjusts your routine to keep you on track.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.15)] border border-gray-800">
                <Image 
                  src="/images/ai-coach-custom-workouts.webp" 
                  alt="24/7 Interactive AI Personal Trainer" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>

          {/* Feature Block 3: Holistic Health (Text Left / Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
                Complete Fitness & Mental Wellness Hub
              </h3>
              <h4 className="text-3xl font-bold">The Anti-Burnout Approach to Fitness.</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Abs are built in the kitchen, but recovery happens in your sleep. Track your physical output, mental focus, and recovery metrics all in one unified dashboard. Watch your 3 daily progress bars light up as you crush your physical goals and log your daily mindfulness and sleep habits.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)] border border-gray-800">
                <Image 
                  src="/images/complete-fitness-anti-burnout.webp" 
                  alt="Complete Fitness & Mental Wellness Hub" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>

          {/* Feature Block 4: Gamification & Analytics (Image Left / Text Right) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
                Fitness Gamification & Advanced Analytics
              </h3>
              <h4 className="text-3xl font-bold">Unlock Your Ultimate Potential.</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Turn your fitness journey into an addiction. Compete on community leaderboards, maintain your daily streak journey, and unlock exclusive achievements like the Beast Badge. For the data-obsessed, dive into the Performance Lab to visualize your long-term strength and endurance trends.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.15)] border border-gray-800">
                <Image 
                  src="/images/fitness-gamification-advanced-analytics.webp" 
                  alt="Fitness Gamification & Advanced Analytics" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
