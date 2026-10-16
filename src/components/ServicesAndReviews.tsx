import React, { useState, useMemo } from "react";
import { SERVICES_DATA, ReviewCategory, ReviewItem } from "../data/siteData";
import { SmartImage } from "./UiElements";

interface ServicesAndReviewsProps {
  reviewFilter: ReviewCategory;
  setReviewFilter: (cat: ReviewCategory) => void;
  visibleReviews: ReviewItem[];
  onSelectReview: (index: number) => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesAndReviews: React.FC<ServicesAndReviewsProps> = ({
  reviewFilter,
  setReviewFilter,
  visibleReviews,
  onSelectReview,
  onBookService,
}) => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string>(
    SERVICES_DATA[0].id,
  );

  const activeServicePreview = useMemo(() => {
    return (
      SERVICES_DATA.find((s) => s.id === hoveredServiceId) || SERVICES_DATA[0]
    );
  }, [hoveredServiceId]);

  return (
    <>
      {/* БЛОК 4. УСЛУГИ И ПРАЙС */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      >
        <div className="border-t border-b border-neutral-300 py-3.5 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-500">
          <span>SECTION 03 // SERVICE GUIDE &amp; INVESTMENT</span>
          <span>ОНЛАЙН ПО ВСЕМУ МИРУ / ОФЛАЙН</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight font-normal mb-8 sm:mb-10">
              Форматы работы и прайс
            </h2>

            <div className="divide-y divide-neutral-300 border-t border-b border-neutral-300 bg-white">
              {SERVICES_DATA.map((service) => {
                const isActive = hoveredServiceId === service.id;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredServiceId(service.id)}
                    className={`p-5 sm:p-8 transition-colors duration-300 ${
                      isActive ? "bg-[#FAF8F4]" : "bg-white"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-3">
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs font-mono text-neutral-400">
                          /{service.index}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900">
                          {service.title}
                        </h3>
                      </div>
                      <div className="font-serif text-2xl sm:text-3xl text-neutral-900 shrink-0 font-medium">
                        {service.price}
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="inline-block text-[10px] font-mono uppercase tracking-[0.16em] px-2.5 py-0.5 border border-neutral-300 bg-white text-neutral-600">
                        Формат: {service.format}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <p className="text-xs text-neutral-500 border-l-2 border-neutral-400 pl-3 mb-5">
                      <strong className="font-mono uppercase text-[10px] text-neutral-700 block mb-0.5">
                        Результат для вас:
                      </strong>
                      {service.result}
                    </p>

                    <button
                      type="button"
                      onClick={() => onBookService(service.title)}
                      className="w-full sm:w-auto px-5 py-3 border border-neutral-900 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer text-center"
                    >
                      [ Выбрать «{service.title}» ]
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 sticky top-24">
            <div className="bg-white p-5 border border-neutral-300 shadow-md">
              <div className="flex justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3">
                <span>SERVICE PREVIEW</span>
                <span>/{activeServicePreview.index}</span>
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-neutral-100 mb-4">
                <SmartImage
                  src={activeServicePreview.previewImg}
                  alt={activeServicePreview.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              <div className="font-serif text-2xl text-neutral-900">
                {activeServicePreview.title}
              </div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-neutral-500">
                {activeServicePreview.price} • {activeServicePreview.format}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ОТЗЫВЫ И ИСТОРИИ КЛИЕНТОВ */}
      <section
        id="reviews"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 border-b border-neutral-300 pb-6 gap-5">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              SECTION 04 // CLIENT STORIES &amp; ARCHIVE NOTES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight font-normal">
              Истории, образы и оригиналы отзывов
            </h2>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {(
              [
                { id: "all", label: "Все истории (6)" },
                { id: "shopping", label: "Шопинг" },
                { id: "wardrobe", label: "Разбор и лукбук" },
                { id: "mens", label: "Мужской стиль" },
                { id: "coaching", label: "Фэшн-терапия" },
              ] as { id: ReviewCategory; label: string }[]
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setReviewFilter(tab.id)}
                className={`shrink-0 px-3.5 py-2 text-[10px] font-mono uppercase tracking-[0.16em] border transition-colors cursor-pointer ${
                  reviewFilter === tab.id
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleReviews.map((review, idx) => (
            <article
              key={review.id}
              onClick={() => onSelectReview(idx)}
              className="group cursor-pointer bg-white border border-neutral-300 p-5 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-neutral-400 border-b border-neutral-200 pb-3 mb-4">
                  <span>{review.code}</span>
                  <span className="text-neutral-700">{review.tag}</span>
                </div>

                <div className="relative mb-5 bg-[#F4F1EA] border border-neutral-200 p-2 overflow-hidden">
                  <div className="relative h-60 w-full overflow-hidden bg-neutral-900/5 flex items-center justify-center">
                    <SmartImage
                      src={review.proofImage}
                      alt={review.proofCaption}
                      loading="lazy"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-end justify-end p-2.5">
                      <span className="bg-white/95 text-neutral-900 px-3 py-1.5 text-[9px] font-mono uppercase tracking-[0.16em] shadow-sm">
                        [ Открыть скриншот ↗ ]
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-neutral-500">
                    <span className="truncate">{review.proofCaption}</span>
                    <span className="text-neutral-900 shrink-0 ml-2 underline">
                      Увеличить
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="font-serif text-lg sm:text-xl text-neutral-900 bg-amber-100/85 px-1.5 py-0.5 leading-snug box-decoration-clone">
                    «{review.highlight}»
                  </span>
                </div>

                <blockquote className="text-xs sm:text-sm leading-relaxed text-neutral-600">
                  {review.quote}
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-900">
                    {review.author}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                    {review.dateNote}
                  </div>
                </div>
                <span className="px-2.5 py-1 border border-neutral-300 group-hover:border-neutral-900 text-[9px] font-mono uppercase tracking-widest shrink-0">
                  Оригинал →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
