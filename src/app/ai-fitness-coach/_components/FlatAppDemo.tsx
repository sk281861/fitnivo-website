'use client';

import { useState } from 'react';
import { Dumbbell, Utensils, Zap, Play, RefreshCw, CheckCircle2, Flame } from 'lucide-react';

export default function FlatAppDemo() {
  const [activeTab, setActiveTab] = useState<'workout' | 'meal'>('workout');
  const [workoutLog, setWorkoutLog] = useState([
    { id: 1, name: 'Barbell Squats', sets: [{ weight: 100, reps: 8, logged: true }, { weight: 100, reps: 8, logged: false }, { weight: 102.5, reps: 6, logged: false }], adjusted: false },
    { id: 2, name: 'Romanian Deadlifts', sets: [{ weight: 120, reps: 10, logged: false }, { weight: 120, reps: 10, logged: false }], adjusted: false }
  ]);
  const [logStatus, setLogStatus] = useState<string | null>(null);
  const [cnsLoad, setCnsLoad] = useState(68);
  const [dailyCalories, setDailyCalories] = useState(2520);

  const handleLogSet = (exerciseId: number, setIndex: number) => {
    const updated = [...workoutLog];
    const exercise = updated.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    exercise.sets[setIndex].logged = true;
    
    // Simulate AI sub-500ms recalculation
    setLogStatus('Recalculating progressive overload...');
    setTimeout(() => {
      // If Squats set 1 is logged, automatically recalculate next sets
      if (exerciseId === 1 && setIndex === 0) {
        exercise.sets[1].weight = 102.5; // Auto adjust next set weight
        exercise.sets[2].weight = 105;
        exercise.adjusted = true;
        setCnsLoad(72);
        setDailyCalories(2640); // Meal synchronization: calorie target shifts up due to high output
        setLogStatus('AI Recalculated: Leg volume increased. Next set adjusted to 102.5 kg. Meal targets synced.');
      } else if (exerciseId === 1 && setIndex === 1) {
        // User logged set 2, adjust set 3 based on fatigue
        exercise.sets[2].reps = 8;
        setLogStatus('AI Recalculated: Target reps optimized to 8 for set 3 to maintain hypertrophy threshold.');
      } else {
        setLogStatus('AI Recalculated: Targets optimal. Volume logged successfully.');
      }
      setWorkoutLog(updated);
      setTimeout(() => setLogStatus(null), 4000);
    }, 450);
  };

  return (
    <div className="w-full max-w-4xl mx-auto border border-[#262626] bg-[#050505] p-6 md:p-8 rounded-none shadow-none">
      {/* Device Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#1f1f1f] pb-6 mb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#00f2fe] font-mono">Live Demo</span>
          <h3 className="text-2xl font-bold text-white mt-1">Interactive Fitnivo Engine</h3>
        </div>
        
        {/* Flat Tabs */}
        <div className="flex gap-2 mt-4 sm:mt-0 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('workout')}
            className={`flex items-center justify-center gap-2 px-5 py-2.5 font-mono text-sm font-semibold transition-all w-full sm:w-auto border rounded-none ${
              activeTab === 'workout'
                ? 'bg-cyan-400 border-cyan-400 text-black'
                : 'bg-transparent border-[#262626] text-white hover:border-[#00f2fe]'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            WORKOUT TAB
          </button>
          <button
            onClick={() => setActiveTab('meal')}
            className={`flex items-center justify-center gap-2 px-5 py-2.5 font-mono text-sm font-semibold transition-all w-full sm:w-auto border rounded-none ${
              activeTab === 'meal'
                ? 'bg-cyan-400 border-cyan-400 text-black'
                : 'bg-transparent border-[#262626] text-white hover:border-[#00f2fe]'
            }`}
          >
            <Utensils className="w-4 h-4" />
            MEAL TAB
          </button>
        </div>
      </div>

      {/* Demo Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Mock Phone Screen */}
        <div className="lg:col-span-7 border border-[#262626] bg-black p-6 rounded-none flex flex-col justify-between min-h-[460px]">
          
          {/* Top Panel: Live Status Bar */}
          <div className="flex items-center justify-between text-xs text-[#A1A1A6] font-mono border-b border-[#1f1f1f] pb-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 animate-pulse rounded-full" />
              <span>ALGORITHM ONLINE</span>
            </div>
            <div>LATENCY: 42ms</div>
          </div>

          {/* Dynamic Content Body */}
          <div className="flex-grow">
            {activeTab === 'workout' ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-bold text-lg font-mono">HYPERTROPHY: LOWER BODY</h4>
                  <span className="text-[#A1A1A6] text-xs font-mono">WEEK 3 / DAY 2</span>
                </div>

                {workoutLog.map((exercise) => (
                  <div key={exercise.id} className="border border-[#1f1f1f] bg-[#050505] p-4 rounded-none">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-white font-bold text-sm block font-mono">{exercise.name}</span>
                        {exercise.adjusted && (
                          <span className="inline-block text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 mt-1 border border-cyan-900/50 font-mono">
                            ⚡ AI ADJUSTED: STRENGTH GAIN DETECTED
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {exercise.sets.map((set, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs font-mono border-t border-[#1f1f1f]/50 pt-2 first:border-0 first:pt-0">
                          <span className="text-[#A1A1A6]">SET {idx + 1}</span>
                          <span className="text-white font-bold">{set.weight} kg x {set.reps} reps</span>
                          
                          {set.logged ? (
                            <span className="flex items-center gap-1 text-green-400 font-semibold text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Logged
                            </span>
                          ) : (
                            <button
                              onClick={() => handleLogSet(exercise.id, idx)}
                              className="px-2.5 py-1 bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors text-[10px] uppercase font-bold rounded-none"
                            >
                              Log Set
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-bold text-lg font-mono">NUTRITION SYNCHRONIZATION</h4>
                  <span className="text-[#A1A1A6] text-xs font-mono">STATUS: SYNCED</span>
                </div>

                {/* Macro summary */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="border border-[#1f1f1f] bg-[#050505] p-3 rounded-none">
                    <span className="text-[10px] text-[#A1A1A6] block font-mono">PROTEIN</span>
                    <span className="text-white font-mono font-bold text-sm">175g</span>
                  </div>
                  <div className="border border-[#1f1f1f] bg-[#050505] p-3 rounded-none">
                    <span className="text-[10px] text-[#A1A1A6] block font-mono">CARBS</span>
                    <span className="text-white font-mono font-bold text-sm">310g</span>
                  </div>
                  <div className="border border-[#1f1f1f] bg-[#050505] p-3 rounded-none">
                    <span className="text-[10px] text-[#A1A1A6] block font-mono">FAT</span>
                    <span className="text-white font-mono font-bold text-sm">80g</span>
                  </div>
                </div>

                {/* Meal list */}
                <div className="space-y-3">
                  <div className="border border-[#1f1f1f] bg-[#050505] p-4 rounded-none flex justify-between items-center">
                    <div>
                      <span className="text-xs text-[#A1A1A6] block font-mono">MEAL 1 (PRE-WORKOUT)</span>
                      <span className="text-white font-bold text-sm font-mono">Oats + Whey Protein + Banana</span>
                    </div>
                    <span className="text-white text-xs font-mono">580 kcal</span>
                  </div>

                  <div className="border border-[#1f1f1f] bg-[#050505] p-4 rounded-none flex justify-between items-center">
                    <div>
                      <span className="text-xs text-[#A1A1A6] block font-mono">MEAL 2 (POST-WORKOUT)</span>
                      <span className="text-white font-bold text-sm font-mono">Chicken Breast + Rice + Greens</span>
                    </div>
                    <span className="text-white text-xs font-mono">750 kcal</span>
                  </div>

                  <div className="border border-[#1f1f1f] bg-[#050505] p-4 rounded-none flex justify-between items-center">
                    <div>
                      <span className="text-xs text-[#A1A1A6] block font-mono">MEAL 3 (DINNER)</span>
                      <span className="text-white font-bold text-sm font-mono">Salmon + Sweet Potato + Asparagus</span>
                    </div>
                    <span className="text-white text-xs font-mono">680 kcal</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Panel: Latency & Feedback */}
          <div className="border-t border-[#1f1f1f] pt-4 mt-4 min-h-[48px]">
            {logStatus ? (
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>{logStatus}</span>
              </div>
            ) : (
              <div className="text-xs text-[#A1A1A6] font-mono">
                {activeTab === 'workout' 
                  ? "👉 Try clicking 'Log Set' on Set 1 to test the sub-500ms AI recalculation model."
                  : "💡 Calorie target automatically adapts based on your logged training volume."
                }
              </div>
            )}
          </div>

        </div>

        {/* Right Side: Engine Statistics */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="border border-[#262626] bg-black p-6 rounded-none flex-grow">
            <h4 className="text-white font-bold text-lg mb-4 font-mono">REAL-TIME TELEMETRY</h4>
            
            <div className="space-y-4">
              {/* Dynamic Target Calories */}
              <div className="border-b border-[#1f1f1f] pb-3">
                <div className="flex justify-between text-xs text-[#A1A1A6] font-mono mb-1">
                  <span>SYNCED DAILY ENERGY GOAL</span>
                  <Flame className="w-3.5 h-3.5 text-[#00f2fe]" />
                </div>
                <div className="text-3xl font-bold text-white font-mono">{dailyCalories} <span className="text-xs text-[#A1A1A6]">kcal</span></div>
                <p className="text-[11px] text-[#A1A1A6] mt-1">Automatically recalculates relative to daily energy output from logged lifts.</p>
              </div>

              {/* CNS Load */}
              <div className="border-b border-[#1f1f1f] pb-3">
                <span className="text-xs text-[#A1A1A6] font-mono block mb-1">CENTRAL NERVOUS SYSTEM (CNS) LOAD</span>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-2xl font-bold text-white font-mono">{cnsLoad}%</span>
                  <span className="text-[10px] text-cyan-400 font-mono">OPTIMAL ZONE</span>
                </div>
                <div className="w-full bg-[#111111] h-1.5 border border-[#1f1f1f]">
                  <div className="bg-cyan-400 h-full transition-all duration-300" style={{ width: `${cnsLoad}%` }} />
                </div>
              </div>

              {/* Auto Overload Check */}
              <div>
                <span className="text-xs text-[#A1A1A6] font-mono block mb-2">DYNAMIC OVERLOAD PROGRESSION</span>
                <ul className="space-y-1.5 text-xs font-mono">
                  <li className="flex items-center gap-2 text-white">
                    <span className="w-1.5 h-1.5 bg-[#00f2fe]" />
                    Set Velocity Tracking: Active
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <span className="w-1.5 h-1.5 bg-[#00f2fe]" />
                    Micro-Loading Calculations: On
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <span className="w-1.5 h-1.5 bg-[#00f2fe]" />
                    Fatigue-Drop Adjustments: Active
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Engine Latency Badge */}
          <div className="border border-[#262626] bg-[#0a0a0a] p-4 rounded-none flex items-center gap-3">
            <div className="bg-cyan-950/40 border border-cyan-800 p-2 text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-[#A1A1A6] font-mono block uppercase">Recalculation Latency</span>
              <span className="text-white font-bold font-mono">Sub-500ms Threshold Met</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
