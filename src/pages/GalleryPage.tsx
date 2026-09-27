import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { gallery } from '../data/gallery';
import { GalleryItem } from '../types';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['all', 'JEVION', 'campus', 'previous events'];

  const filteredGallery = gallery?.filter((item: GalleryItem) => 
    filter === 'all' ? true : item.category.toLowerCase() === filter
  ) || [];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-8 tracking-wider">
            GALLERY
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 bg-[#111214] p-2 rounded-xl border border-[#5C421D]/30 mx-auto w-fit">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`py-2 px-4 rounded-lg font-orbitron text-sm font-bold uppercase transition-all ${
                  filter === cat 
                    ? 'bg-[#FF6A00] text-[#050505]' 
                    : 'text-[#A9A9A5] hover:text-[#F5F2EA] hover:bg-[#151618]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filteredGallery.map((item: GalleryItem) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer break-inside-avoid overflow-hidden rounded-lg bg-[#151618] border border-[#5C421D]/30"
                onClick={() => setSelectedImage(item)}
              >
                {/* Fallback styling for missing images */}
                <div 
                  className="w-full bg-gradient-to-br from-[#111214] to-[#1a1c1e] flex items-center justify-center p-8 aspect-square md:aspect-auto"
                  style={{ minHeight: '150px' }}
                >
                  {item.src ? (
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      loading="lazy"
                      className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <span className="text-[#A9A9A5] font-orbitron opacity-50">{item.alt || 'Image'}</span>
                  )}
                </div>
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[#FF6A00] font-orbitron font-bold tracking-wider px-4 py-2 border border-[#FF6A00] rounded">
                    VIEW
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-xs font-bold text-[#F5F2EA] uppercase truncate">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredGallery.length === 0 && (
          <div className="text-center text-[#A9A9A5] py-20">
            No images found in this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-[#A9A9A5] hover:text-[#FF6A00] transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.src ? (
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="max-w-full max-h-[85vh] object-contain rounded border border-[#5C421D]/50 shadow-2xl"
                />
              ) : (
                <div className="w-[80vw] h-[60vh] max-w-3xl bg-gradient-to-br from-[#111214] to-[#151618] border border-[#5C421D]/50 flex items-center justify-center rounded">
                  <span className="text-2xl text-[#A9A9A5] font-orbitron">{selectedImage.alt}</span>
                </div>
              )}
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="text-[#F5F2EA] font-orbitron">{selectedImage.alt}</p>
                <p className="text-[#FF6A00] text-sm uppercase mt-1">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
