import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Trash2 } from "lucide-react";

const GalleryWidget = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load from localStorage or initialize with placeholders
  useEffect(() => {
    const storedImages = localStorage.getItem("galleryImages");
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    } else {
      const placeholderImages = [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=500&fit=crop",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=500&fit=crop",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=500&fit=crop",
        },
      ];
      setImages(placeholderImages);
      localStorage.setItem("galleryImages", JSON.stringify(placeholderImages));
    }
  }, []);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = {
          id: Date.now(),
          url: reader.result,
        };
        const updatedImages = [...images, newImage];
        setImages(updatedImages);
        localStorage.setItem("galleryImages", JSON.stringify(updatedImages));
        e.target.value = ""; // reset input so same file can be reselected
      };
      reader.readAsDataURL(file);
    }
  };

  // Delete image
  const handleDelete = (id) => {
    const updatedImages = images.filter((img) => img.id !== id);
    setImages(updatedImages);
    localStorage.setItem("galleryImages", JSON.stringify(updatedImages));
    if (currentIndex > 0 && currentIndex >= updatedImages.length - 2) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Navigation
  const handlePrevious = () => {
    if (images.length > 3) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    if (images.length > 3) {
      setCurrentIndex((prev) => Math.min(images.length - 3, prev + 1));
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="w-full bg-[#1a1a1f] rounded-3xl p-6 shadow-2xl relative">
      {/* Decorative Question Mark Icon */}
      <div className="absolute left-6 top-6 w-10 h-10 bg-[#2d2d35] rounded-full flex items-center justify-center text-gray-500">
        <span className="text-xl">?</span>
      </div>

      {/* Gallery Header */}
      <div className="flex items-center justify-between mb-6 ml-14">
        <div className="flex items-center gap-4">
          <div className="bg-[#0f0f12] rounded-2xl px-8 py-3">
            <h2 className="text-white font-medium text-lg">Gallery</h2>
          </div>
          <label className="bg-[#2d2d35] hover:bg-[#3d3d45] rounded-full px-6 py-3 cursor-pointer transition-all duration-300 shadow-lg flex items-center gap-2 group">
            <Plus className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-white font-medium text-sm">ADD IMAGE</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="w-12 h-12 bg-[#2d2d35] hover:bg-[#3d3d45] disabled:opacity-40 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            disabled={images.length <= 3 || currentIndex >= images.length - 3}
            className="w-12 h-12 bg-[#2d2d35] hover:bg-[#3d3d45] disabled:opacity-40 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-4 ml-14">
        {visibleImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square rounded-2xl overflow-hidden bg-[#2d2d35] shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image.url}
              alt={`Gallery ${image.id}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => handleDelete(image.id)}
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}

        {/* Fill empty slots if less than 3 images */}
        {visibleImages.length < 3 &&
          Array.from({ length: 3 - visibleImages.length }).map((_, idx) => (
            <div
              key={`empty-${idx}`}
              className="aspect-square rounded-2xl bg-[#2d2d35] shadow-xl flex items-center justify-center"
            >
              <span className="text-gray-600 text-sm">Empty Slot</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryWidget;