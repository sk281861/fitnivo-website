import React from 'react';
import { AbsoluteFill, Composition, Sequence } from 'remotion';
import { BgMesh, Grade, Grain, Vignette } from './components/Layers';
import { SceneWorkout } from './scenes/SceneWorkout';
import { SceneFoodScan } from './scenes/SceneFoodScan';
import { SceneProgress } from './scenes/SceneProgress';

const FPS = 30;
const SCENE_LEN = 100; // 3.33s each
const TOTAL = SCENE_LEN * 3; // 300 frames = 10s

const FitnivoDemo: React.FC = () => {
  return (
    <AbsoluteFill>
      <BgMesh />

      <Sequence from={0} durationInFrames={SCENE_LEN}>
        <SceneWorkout />
      </Sequence>

      <Sequence from={SCENE_LEN} durationInFrames={SCENE_LEN}>
        <SceneFoodScan />
      </Sequence>

      <Sequence from={SCENE_LEN * 2} durationInFrames={SCENE_LEN}>
        <SceneProgress />
      </Sequence>

      <Grade />
      <Grain />
      <Vignette />
    </AbsoluteFill>
  );
};

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="FitnivoDemo"
        component={FitnivoDemo}
        durationInFrames={TOTAL}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
