declare module 'expo-sensors' {
    export const LightSensor: {
      addListener(callback: (data: { illuminance: number }) => void): { remove: () => void };
      isAvailableAsync(): Promise<boolean>;
      setUpdateInterval(intervalMs: number): void;
    };
  }
  