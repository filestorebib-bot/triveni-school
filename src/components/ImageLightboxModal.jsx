import React from "react";
import { X, ZoomIn, Camera, ExternalLink } from "lucide-react";

export default function ImageLightboxModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-emerald-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 text-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video max-h-[70vh] bg-emerald-950 flex items-center justify-center overflow-hidden">
          <img
            src={image.url}
            alt={image.title || "Triveni Plant Science Photo"}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-5 sm:p-6 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
              {image.category || "Field Activity"}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Camera className="w-3.5 h-3.5" /> Triveni Plant Science Archive
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
            {image.title}
          </h3>

          {image.description && (
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {image.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
