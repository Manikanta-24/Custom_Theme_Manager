import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-200">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Theme Manager
            </h1>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This is a production-ready theme manager that automatically detects your system
              preferences and remembers your choice. Try clicking the toggle button in the
              top-right corner!
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🎨 Dynamic Theming
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Seamlessly switch between light and dark themes with smooth transitions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                💾 Persistent Storage
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your theme preference is saved and remembered across sessions.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;