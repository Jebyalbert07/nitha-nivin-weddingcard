import React, { useState, useEffect } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles, Upload, RefreshCw, Filter } from 'lucide-react';
import { defaultPhotos } from './defaultPhotos';

export const CoupleGallery = () => {

  const [photos, setPhotos] = useState(defaultPhotos);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const categories = ['All', 'Groom', 'Bride', 'Couple'];

  // Load custom photos from localStorage if uploaded by user
  useEffect(() => {
    const custom = localStorage.getItem('nitha_nivin_custom_photos');
    if (custom) {
      try {
        const parsed = JSON.parse(custom);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed.length < 5) {
          setPhotos(parsed);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const filteredPhotos = activeCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
      if (e.key === 'ArrowLeft') setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handleCustomUpload = (index, event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const base64Url = uploadEvent.target?.result;
        if (typeof base64Url === 'string') {
          // Find the original photo in the full photos array
          const originalPhoto = filteredPhotos[index];
          const updated = photos.map((p) =>
            p.id === originalPhoto.id ? { ...p, url: base64Url } : p
          );
          setPhotos(updated);
          localStorage.setItem('nitha_nivin_custom_photos', JSON.stringify(updated));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhotos = () => {
    localStorage.removeItem('nitha_nivin_custom_photos');
    setPhotos(defaultPhotos);
  };

  return (
    <div className="mt-14">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#8c7035] mb-1">
          <Camera size={14} />
          <span>Moments Of Love</span>
          <Sparkles size={14} />
        </div>
        <h3 className="font-['Cinzel'] text-2xl sm:text-3xl text-[#283629] font-medium tracking-wide">
          Pre-Wedding Gallery
        </h3>
        <p className="text-stone-600 font-serif italic text-xs sm:text-sm mt-1 max-w-md mx-auto">
          Cherished glimpses of Nitha &amp; Nivin as they step toward a lifetime of togetherness.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2 bg-[#f4ede1] p-1.5 rounded-2xl border border-[#ded3be]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${activeCategory === cat
                ? 'bg-[#2d3a2b] text-white shadow-sm'
                : 'text-[#536252] hover:text-[#2d3a2b]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      {filteredPhotos.length === 0 ? (
        <div className="text-center py-12 text-stone-400">
          <Filter size={28} className="mx-auto mb-2 opacity-50" />
          <p className="text-sm font-serif italic">No photos in this category yet.</p>
        </div>
      ) : (
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${filteredPhotos.length >= 3 ? 'lg:grid-cols-' + Math.min(filteredPhotos.length, 4) : ''} gap-4 sm:gap-6`}>
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md border border-[#dfd4c0] cursor-pointer transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with 4:5 Portrait Aspect Ratio */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle Golden Frame Overlay on Hover */}
                <div className="absolute inset-2 border border-[#c4a468]/0 group-hover:border-[#c4a468]/80 rounded-xl transition-colors duration-300 pointer-events-none"></div>

                {/* View Overlay Tag */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                  <span className="p-2.5 rounded-full bg-white/20 backdrop-blur-sm mb-2 transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye size={18} />
                  </span>
                  <span className="text-[11px] uppercase tracking-widest font-sans font-semibold">
                    View Fullscreen
                  </span>
                </div>

                {/* Category Pill */}
                <span className="absolute top-3 left-3 bg-[#2d3a2b]/85 backdrop-blur-sm text-[#f6f2e8] text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  {photo.category}
                </span>
              </div>

              {/* Photo Caption Card */}
              {/* <div className="p-3.5 bg-[#fcfbfa] flex-1 flex flex-col justify-between border-t border-[#ede5d4]">
                <div>
                  <h4 className="font-['Cinzel'] text-xs sm:text-sm font-bold text-[#2d3a2b] line-clamp-1">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-serif italic mt-0.5 line-clamp-1">
                    "{photo.caption}"
                  </p>
                </div>

                <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
                  <span className="tracking-wider uppercase font-sans">Frame {index + 1}</span>
                  <label
                    onClick={(e) => e.stopPropagation()}
                    className="cursor-pointer text-[#8c7035] hover:text-[#2d3a2b] font-medium flex items-center gap-1"
                    title="Upload your own photo for this frame"
                  >
                    <Upload size={11} />
                    <span>Replace</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => handleCustomUpload(index, e)}
                    />
                  </label>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      )}

      {/* Gallery reset button if custom photos are active */}
      {/* <div className="mt-4 flex justify-end">
        <button
          onClick={handleResetPhotos}
          className="text-[11px] text-stone-400 hover:text-stone-600 inline-flex items-center gap-1 transition-colors"
          title="Reset to default photoshoot images"
        >
          <RefreshCw size={11} />
          <span>Reset Photos</span>
        </button>
      </div> */}

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-fadeIn select-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full max-h-[92vh] flex flex-col items-center bg-[#faf8f3] rounded-3xl overflow-hidden shadow-2xl border border-[#d6c7b0]"
          >
            {/* Top Toolbar */}
            <div className="w-full px-5 py-3 bg-[#f2ecde] border-b border-[#dfd4be] flex items-center justify-between text-[#2d3a2b]">
              <div className="flex items-center gap-2">
                <span className="text-[#8c7035] text-base font-serif">†</span>
                <span className="font-['Cinzel'] text-xs uppercase tracking-wider font-semibold">
                  {filteredPhotos[selectedPhotoIndex].title}
                </span>
                <span className="text-[10px] bg-[#e3d7c1] text-[#6d5b3d] px-2 py-0.5 rounded-full uppercase font-medium">
                  {filteredPhotos[selectedPhotoIndex].category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-stone-500 font-sans font-medium">
                  {selectedPhotoIndex + 1} / {filteredPhotos.length}
                </span>
                <button
                  onClick={handleCloseLightbox}
                  className="p-1 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 transition-colors"
                  aria-label="Close photo preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main Image with Navigation Arrows */}
            <div className="relative w-full flex-1 max-h-[72vh] flex items-center justify-center bg-stone-900 overflow-hidden">
              <img
                src={filteredPhotos[selectedPhotoIndex].url}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white backdrop-blur-sm transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white backdrop-blur-sm transition-all"
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="w-full py-3.5 px-6 bg-[#f2ecde] border-t border-[#dfd4be] flex flex-col sm:flex-row items-center justify-between text-xs text-[#2d3a2b] gap-2">
              <span className="font-serif italic text-stone-600">
                "{filteredPhotos[selectedPhotoIndex].caption}"
              </span>
              <span className="font-['Cinzel'] text-[11px] uppercase tracking-widest text-[#8c7035] font-semibold">
                Nitha &amp; Nivin
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
