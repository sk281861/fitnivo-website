export interface Device {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface DeviceCompatibility {
  id: string;
  deviceId: string;
  features: string[];
  syncFrequency: string;
  dataTypes: string[];
}

export const devices: Device[] = [
  {
    id: 'apple-watch',
    label: 'Apple Watch',
    description: 'Full integration with watchOS',
    icon: '⌚',
  },
  {
    id: 'fitbit',
    label: 'Fitbit',
    description: 'Complete Fitbit ecosystem support',
    icon: '📱',
  },
  {
    id: 'garmin',
    label: 'Garmin',
    description: 'Advanced sports watch integration',
    icon: '🏃',
  },
  {
    id: 'oura-ring',
    label: 'Oura Ring',
    description: 'Biometric ring data sync',
    icon: '💍',
  },
  {
    id: 'whoop',
    label: 'Whoop',
    description: 'Performance tracking band',
    icon: '📊',
  },
  {
    id: 'samsung-watch',
    label: 'Samsung Watch',
    description: 'Wear OS smartwatch support',
    icon: '⌚',
  },
  {
    id: 'polar',
    label: 'Polar',
    description: 'Sports watch and fitness tracker',
    icon: '❤️',
  },
  {
    id: 'strava',
    label: 'Strava',
    description: 'Activity tracking platform',
    icon: '🚴',
  },
];

export const deviceCompatibility: Record<string, DeviceCompatibility> = {
  'apple-watch': {
    id: 'compat-apple',
    deviceId: 'apple-watch',
    features: [
      'Real-time heart rate monitoring',
      'Workout tracking',
      'Sleep analysis',
      'Activity rings integration',
      'Notifications and alerts',
    ],
    syncFrequency: 'Real-time',
    dataTypes: ['Heart Rate', 'Workouts', 'Sleep', 'Activity', 'Calories'],
  },
  fitbit: {
    id: 'compat-fitbit',
    deviceId: 'fitbit',
    features: [
      'Heart rate and SpO2 tracking',
      'Sleep stage analysis',
      'Exercise recognition',
      'Stress management',
      'Menstrual cycle tracking',
    ],
    syncFrequency: 'Every 15 minutes',
    dataTypes: ['Heart Rate', 'Sleep', 'Steps', 'Calories', 'SpO2'],
  },
  garmin: {
    id: 'compat-garmin',
    deviceId: 'garmin',
    features: [
      'Advanced training metrics',
      'VO2 max estimation',
      'Recovery time',
      'Training load',
      'Performance condition',
    ],
    syncFrequency: 'Real-time',
    dataTypes: ['Training', 'Performance', 'Recovery', 'Metrics', 'GPS'],
  },
  'oura-ring': {
    id: 'compat-oura',
    deviceId: 'oura-ring',
    features: [
      'Sleep quality scoring',
      'Readiness assessment',
      'Activity tracking',
      'Temperature monitoring',
      'HRV analysis',
    ],
    syncFrequency: 'Daily',
    dataTypes: ['Sleep', 'Readiness', 'Activity', 'Temperature', 'HRV'],
  },
  whoop: {
    id: 'compat-whoop',
    deviceId: 'whoop',
    features: [
      'Strain tracking',
      'Recovery scoring',
      'Sleep optimization',
      'Personalized coaching',
      'Performance insights',
    ],
    syncFrequency: 'Real-time',
    dataTypes: ['Strain', 'Recovery', 'Sleep', 'HRV', 'Resting HR'],
  },
  'samsung-watch': {
    id: 'compat-samsung',
    deviceId: 'samsung-watch',
    features: [
      'Heart rate monitoring',
      'Workout tracking',
      'Sleep tracking',
      'Stress monitoring',
      'SpO2 measurement',
    ],
    syncFrequency: 'Every 10 minutes',
    dataTypes: ['Heart Rate', 'Workouts', 'Sleep', 'Stress', 'SpO2'],
  },
  polar: {
    id: 'compat-polar',
    deviceId: 'polar',
    features: [
      'Training load analysis',
      'Recovery status',
      'Sleep tracking',
      'Heart rate zones',
      'Training effect',
    ],
    syncFrequency: 'Real-time',
    dataTypes: ['Training', 'Recovery', 'Sleep', 'Heart Rate', 'Zones'],
  },
  strava: {
    id: 'compat-strava',
    deviceId: 'strava',
    features: [
      'Activity logging',
      'Route tracking',
      'Social features',
      'Performance analysis',
      'Segment tracking',
    ],
    syncFrequency: 'Real-time',
    dataTypes: ['Activities', 'Routes', 'Performance', 'Segments', 'Social'],
  },
};
