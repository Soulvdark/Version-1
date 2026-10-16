import React, { useState } from "react";
import { PHOTOS, SERVICES_DATA, FormState } from "../data/siteData";
import { SmartImage, BinderClip } from "./UiElements";

interface ContactAndFooterProps {
  contactRef: React.RefObject<HTMLElement | null>;
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

export const ContactAndFooter: React.FC<ContactAndFooterProps> = ({
  contactRef,
  formState,
  setFormState,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.contact.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <>
      <section
        id="contact"
        ref={contactRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24"
      >
        <div className="bg-white border border-neutral-300 p-5 sm:p-10 lg:p-16 shadow-md relative">
          <BinderClip className="hidden sm:block absolute -top-6 right-12" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 block">
                SECTION 05 // RESERVATION &amp; CONTACTS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl tracking-tight font-normal leading-tight">
                Давайте обсудим ваш гардероб
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Если хотите разобраться со стилем, подготовить гардероб к новому
                этапу жизни или научиться самостоятельно собирать образы —
                напишите мне напрямую или оставьте заявку в анкете.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="aspect-[4/3] border border-neutral-200 overflow-hidden bg-neutral-100">
                  <SmartImage
                    src={PHOTOS.detailHandBagJjoir}
                    alt="Деталь образа"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] border border-neutral-200 overflow-hidden bg-neutral-100">
                  <SmartImage
                    src={PHOTOS.detailBurgundyMules}
                    alt="Обувь и стиль"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-3 border-t border-neutral-200">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                  Личные каналы связи Полины:
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://t.me/couture_polina"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between px-5 py-3.5 bg-neutral-900 text-white text-xs font-mono uppercase tracking-[0.18em] hover:bg-neutral-800 transition-colors"
                  >
                    <span>Telegram: @couture_polina</span>
                    <span>↗</span>
                  </a>
                  <a
                    href="https://instagram.com/coutur.ye"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between px-5 py-3.5 border border-neutral-900 text-neutral-900 text-xs font-mono uppercase tracking-[0.18em] hover:bg-neutral-100 transition-colors"
                  >
                    <span>Instagram: @coutur.ye</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FAF8F5] border border-neutral-300 p-5 sm:p-10">
              <div className="flex justify-between items-center border-b border-neutral-300 pb-4 mb-6 sm:mb-8 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                <span>CLIENT APPLICATION BRIEF</span>
                <span>WOMEN &amp; MEN</span>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="font-serif text-3xl text-neutral-900">
                    Ваша анкета готова
                  </div>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Спасибо, {formState.name}! Выбрана услуга:{" "}
                    <strong>{formState.service}</strong>. Нажмите кнопку ниже,
                    чтобы сразу открыть диалог с Полиной в Telegram.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href="https://t.me/couture_polina"
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3.5 bg-neutral-900 text-white text-xs font-mono uppercase tracking-[0.2em]"
                    >
                      Открыть Telegram Полины
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-3.5 border border-neutral-400 text-xs font-mono uppercase tracking-[0.2em] cursor-pointer"
                    >
                      Редактировать заявку
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="f-name"
                      className="block text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2"
                    >
                      01 / Ваше имя *
                    </label>
                    <input
                      id="f-name"
                      type="text"
                      required
                      placeholder="Как к вам обращаться"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-neutral-400 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="f-contact"
                      className="block text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2"
                    >
                      02 / Ник в Telegram или телефон *
                    </label>
                    <input
                      id="f-contact"
                      type="text"
                      required
                      placeholder="@username или +7 (999) 000-00-00"
                      value={formState.contact}
                      onChange={(e) =>
                        setFormState({ ...formState, contact: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-neutral-400 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="f-service"
                      className="block text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2"
                    >
                      03 / Выберите формат работы
                    </label>
                    <select
                      id="f-service"
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-neutral-400 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} — {s.price} ({s.format})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="f-msg"
                      className="block text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2"
                    >
                      04 / Коротко о вашем запросе (необязательно)
                    </label>
                    <textarea
                      id="f-msg"
                      rows={3}
                      placeholder="Например: разобрать текущий гардероб, собрать деловую капсулу, подготовиться к съёмке или мероприятию..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-neutral-400 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-neutral-900 text-white text-xs font-mono uppercase tracking-[0.22em] hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-300 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} ПОЛИНА ШУРУПОВА — СТИЛИСТ И ИСТОРИК
            МОДЫ
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://t.me/couture_polina"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900"
            >
              TELEGRAM
            </a>
            <a
              href="https://instagram.com/coutur.ye"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900"
            >
              INSTAGRAM
            </a>
            <a href="#top" className="hover:text-neutral-900">
              НАВЕРХ ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
