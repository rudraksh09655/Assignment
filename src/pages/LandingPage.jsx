import React from 'react';
import TabsWidget from '../components/TabsWidget';
import GalleryWidget from '../components/GalleryWidget';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0f12] flex">
      {/* Left Half - Empty Dark Background */}
      <div className="hidden lg:block lg:w-1/2 bg-[#0f0f12]"></div>

      {/* Right Half - Widgets */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col gap-8 justify-center">
        {/* Tabs Widget */}
        <div className="relative">
          <TabsWidget />
        </div>

        {/* Gallery Widget */}
        <div className="relative">
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;