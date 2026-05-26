'use client';

import { useState, useEffect } from 'react';
import { devices, deviceCompatibility } from '@/lib/widgets/deviceData';

export default function DeviceCompatibility() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load from localStorage
    const saved = localStorage.getItem('selected-device');
    if (saved) {
      setSelectedDevice(saved);
    }
  }, []);

  useEffect(() => {
    if (selectedDevice) {
      localStorage.setItem('selected-device', selectedDevice);
    }
  }, [selectedDevice]);

  if (!mounted) return null;

  const compatibility = selectedDevice ? deviceCompatibility[selectedDevice] : null;
  const device = devices.find(d => d.id === selectedDevice);

  return (
    <section className="py-16 md:py-24 bg-white" data-section="widget">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Device Compatibility
          </h2>
          <p className="text-lg text-gray-600">
            Select your wearable device to see integration details
          </p>
        </div>

        {/* Device Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {devices.map((device) => (
            <button
              key={device.id}
              onClick={() => setSelectedDevice(device.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-200 text-center ${
                selectedDevice === device.id
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
              aria-pressed={selectedDevice === device.id}
              title={device.description}
            >
              <div className="text-4xl mb-3">{device.icon}</div>
              <p className="text-sm font-medium text-gray-900">{device.label}</p>
            </button>
          ))}
        </div>

        {/* Compatibility Details */}
        {compatibility && device && (
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {device.label} Integration
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {compatibility.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-indigo-600 font-bold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data & Sync */}
              <div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Sync Frequency
                  </h4>
                  <p className="px-4 py-3 bg-white rounded-lg text-indigo-600 font-medium">
                    {compatibility.syncFrequency}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Data Types
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {compatibility.dataTypes.map((dataType, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-white border border-indigo-200 text-indigo-700 rounded-lg text-sm font-medium"
                      >
                        {dataType}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!selectedDevice && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Select a device above to see compatibility details
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
