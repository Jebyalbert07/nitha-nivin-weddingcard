import React, { useState, useEffect } from 'react';
import { Camera, Heart, Eye, Download, X, ChevronLeft, ChevronRight, Sparkles, Filter, Plus, Image as ImageIcon } from 'lucide-react';
import { SectionDivider } from './BotanicalDecoration';

const initialGalleryPhotos = [
  {
    id: 'mom-1',
    url: '/gallery/nitha_Single.jpeg',
    title: 'Grace & Serenity',
    category: 'Portraits',
    caption: 'The radiant bride, Nitha, adorned in warmth and elegance.',
    aspect: 'portrait',
    likes: 24,
  },
  {
    id: 'mom-2',
    url: '/gallery/nitha_Single.jpeg',
    title: 'The Sacred Vow',
    category: 'Pre-Wedding',
    caption: 'Two hearts joined by devotion, guided by faith.',
    aspect: 'portrait',
    likes: 19,
  },
  {
    id: 'mom-3',
    url: '/gallery/nivin single.jpeg',
    title: 'A Heart Full of Joy',
    category: 'Portraits',
    caption: 'The groom, Nivin, stepping forward into a lifetime of love.',
    aspect: 'portrait',
    likes: 22,
  },
  {
    id: 'mom-4',
    url: '/gallery/photo5.jpg',
    title: 'Eternal Symbols',
    category: 'Engagement',
    caption: 'Golden rings and fragrant blooms celebrating holy matrimony.',
    aspect: 'landscape',
    likes: 17,
  },
  {
    id: 'mom-5',
    url: '/gallery/photo4.jpg',
    title: 'Laughter & Sunshine',
    category: 'Candids',
    caption: 'Unscripted smiles and pure happiness shared together.',
    aspect: 'portrait',
    likes: 31,
  },
  {
    id: 'mom-6',
    url: '/gallery/photo6.jpg',
    title: 'Under the Canopy of Grace',
    category: 'Pre-Wedding',
    caption: 'Walking hand in hand through nature and blessing.',
    aspect: 'landscape',
    likes: 15,
  },
  {
    id: 'mom-7',
    url: '/gallery/photo7.jpg',
    title: 'Traditional Splendor',
    category: 'Engagement',
    caption: 'Cherished memories steeped in culture, faith, and family roots.',
    aspect: 'portrait',
    likes: 27,
  },
  {
    id: 'mom-8',
    url: '/gallery/photo8.jpg',
    title: 'Golden Sunset Horizon',
    category: 'Candids',
    caption: 'Looking ahead to a radiant future together as one.',
    aspect: 'landscape',
    likes: 29,
  },
];

export const WeddingMomentsGallery = () => {
  const [photos, setPhotos] = useState(initialGalleryPhotos);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [userLikes, setUserLikes] = useState({});

  const categories = ['All', 'Portraits', 'Pre-Wedding', 'Engagement', 'Candids'];

  // Load custom added photos and user likes from localStorage
  useEffect(() => {
    const savedCustom = localStorage.getItem('nitha_moments_gallery');
    if (savedCustom) {
      try {
        const parsed = JSON.parse(savedCustom);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPhotos(parsed);
        }
      } catch (e) {
        console.error(e);
      }
    }

    const savedLikes = localStorage.getItem('nitha_moments_likes');
    if (savedLikes) {
      try {
        setUserLikes(JSON.parse(savedLikes));
      } catch (e) { }
    }
  }, []);

  const filteredPhotos = activeCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const handleToggleLike = (id, e) => {
    e.stopPropagation();
    const isLiked = !!userLikes[id];
    const newLikesState = { ...userLikes, [id]: !isLiked };
    setUserLikes(newLikesState);
    localStorage.setItem('nitha_moments_likes', JSON.stringify(newLikesState));

    const updated = photos.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          likes: isLiked ? p.likes - 1 : p.likes + 1,
        };
      }
      return p;
    });

    setPhotos(updated);
    localStorage.setItem('nitha_moments_gallery', JSON.stringify(updated));
  };

  const handleAddCustomPhoto = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const base64Url = uploadEvent.target?.result;
        if (typeof base64Url === 'string') {
          const newPhoto = {
            id: `custom-${Date.now()}`,
            url: base64Url,
            title: file.name.replace(/\.[^/.]+$/, ''),
            category: activeCategory === 'All' ? 'Candids' : activeCategory,
            caption: 'A cherished memory added with love.',
            aspect: 'portrait',
            likes: 1,
          };
          const updated = [newPhoto, ...photos];
          setPhotos(updated);
          localStorage.setItem('nitha_moments_gallery', JSON.stringify(updated));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevLightbox = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-[#8c7035] text-xs uppercase tracking-[0.3em] font-semibold font-sans flex items-center justify-center gap-1.5">
          <Sparkles size={14} />
          <span>Captured With Love</span>
          <Sparkles size={14} />
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-5xl text-[#283629] mt-2 mb-3">
          Memories &amp; Moments
        </h2>
        <p className="text-stone-600 font-serif italic text-sm sm:text-base max-w-xl mx-auto">
          "Every picture tells a story of grace, laughter, and the beginning of forever."
        </p>
        <SectionDivider label="📷" />
      </div>

      {/* Filter Tabs & Add Photo Button */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2 bg-[#f4ede1] p-1.5 rounded-2xl border border-[#ded3be]">
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

        {/* Upload a memory */}
        <label className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-[#faf7f0] border border-[#d6c9b4] text-[#334233] rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm transition-all hover:border-[#8c7035]">
          <Plus size={14} className="text-[#8c7035]" />
          <span>Add Photo</span>
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleAddCustomPhoto}
          />
        </label>
      </div>

      {/* Photo Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredPhotos.map((photo, index) => {
          const isLiked = !!userLikes[photo.id];

          return (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md border border-[#dfd5c4] cursor-pointer hover:shadow-xl hover:border-[#c4a468] transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                  loading="lazy"
                />

                {/* Golden corner flourishes overlay */}
                <div className="absolute inset-2 border border-[#c4a468]/0 group-hover:border-[#c4a468]/70 rounded-xl transition-colors duration-300 pointer-events-none"></div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  {/* Top Bar with Category Badge & Eye */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                      {photo.category}
                    </span>
                    <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                      <Eye size={14} />
                    </span>
                  </div>

                  {/* Bottom title inside image overlay */}
                  <div>
                    <h4 className="font-['Cinzel'] text-sm font-bold text-white leading-tight">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] text-stone-200 font-serif italic mt-0.5 line-clamp-1">
                      "{photo.caption}"
                    </p>
                  </div>
                </div>

                {/* Category Pill for static view */}
                <span className="group-hover:opacity-0 transition-opacity absolute top-3 left-3 bg-[#2d3a2b]/80 backdrop-blur-sm text-[#f6f2e8] text-[9px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  {photo.category}
                </span>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-3.5 bg-[#fcfbfa] flex items-center justify-between border-t border-[#eee6d7]">
                <div>
                  <h4 className="font-['Cinzel'] text-xs font-bold text-[#2d3a2b] line-clamp-1">
                    {photo.title}
                  </h4>
                  <span className="text-[10px] text-[#8c7035] uppercase tracking-wider font-semibold">
                    Nitha &amp; Nivin
                  </span>
                </div>

                {/* Heart / Like Button */}
                <button
                  onClick={(e) => handleToggleLike(photo.id, e)}
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-colors border ${isLiked
                    ? 'bg-rose-50 text-rose-600 border-rose-200'
                    : 'bg-stone-50 text-stone-500 border-stone-200 hover:text-rose-600'
                    }`}
                  title="Like this photo"
                >
                  <Heart
                    size={13}
                    className={isLiked ? 'fill-rose-500 text-rose-500' : ''}
                  />
                  <span className="font-medium text-[11px]">{photo.likes}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/90 backdrop-blur-md animate-fadeIn select-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center bg-[#faf8f3] rounded-3xl overflow-hidden shadow-2xl border border-[#d6c7b0]"
          >
            {/* Top Toolbar */}
            <div className="w-full px-5 py-3.5 bg-[#f2ecde] border-b border-[#dfd4be] flex items-center justify-between text-[#2d3a2b]">
              <div className="flex items-center gap-2">
                <span className="text-[#8c7035] text-base font-serif">†</span>
                <span className="font-['Cinzel'] text-xs uppercase tracking-wider font-semibold">
                  {filteredPhotos[lightboxIndex].title}
                </span>
                <span className="text-[10px] bg-[#e3d7c1] text-[#6d5b3d] px-2 py-0.5 rounded-full uppercase font-medium">
                  {filteredPhotos[lightboxIndex].category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-stone-500 font-sans font-medium">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>

                <button
                  onClick={closeLightbox}
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
                src={filteredPhotos[lightboxIndex].url}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={prevLightbox}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white backdrop-blur-sm transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextLightbox}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white backdrop-blur-sm transition-all"
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Caption & Actions */}
            <div className="w-full py-3.5 px-6 bg-[#f2ecde] border-t border-[#dfd4be] flex flex-col sm:flex-row items-center justify-between text-xs text-[#2d3a2b] gap-2">
              <span className="font-serif italic text-stone-600">
                "{filteredPhotos[lightboxIndex].caption}"
              </span>

              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => handleToggleLike(filteredPhotos[lightboxIndex].id, e)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#8c7035] font-semibold"
                >
                  <Heart
                    size={14}
                    className={userLikes[filteredPhotos[lightboxIndex].id] ? 'fill-rose-500 text-rose-500' : ''}
                  />
                  <span>{filteredPhotos[lightboxIndex].likes} Likes</span>
                </button>

                <a
                  href={filteredPhotos[lightboxIndex].url}
                  download={`nitha-nivin-${filteredPhotos[lightboxIndex].title}.jpg`}
                  className="inline-flex items-center gap-1 text-[11px] text-stone-600 hover:text-stone-900"
                  title="Download photo"
                >
                  <Download size={13} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

