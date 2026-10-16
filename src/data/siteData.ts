export type WorkCategory =
  | "all"
  | "womenswear"
  | "menswear"
  | "capsules"
  | "details";
export type ReviewCategory =
  | "all"
  | "shopping"
  | "wardrobe"
  | "mens"
  | "coaching";

export interface WorkItem {
  id: string;
  index: string;
  title: string;
  category: Exclude<WorkCategory, "all">;
  categoryLabel: string;
  description: string;
  stylistNote: string;
  detailsList: string[];
  imageUrl: string;
  colSpanClass: string;
  offsetClass?: string;
}

export interface MoodItem {
  id: string;
  code: string;
  caption: string;
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  price: string;
  format: string;
  description: string;
  result: string;
  previewImg: string;
}

export interface ReviewItem {
  id: string;
  code: string;
  category: Exclude<ReviewCategory, "all">;
  tag: string;
  author: string;
  highlight: string;
  quote: string;
  dateNote: string;
  proofImage: string;
  proofCaption: string;
}

export interface FormState {
  name: string;
  contact: string;
  service: string;
  message: string;
}

export const PHOTOS = {
  // Портреты Полины
  heroRedBelt: "/public/image/polina.jpg",
  portraitWhiteClose: "/public/image/portraitWhiteClose.jpg",
  portraitShowroomBW: "/public/image/pol-grey.jpg",
  portraitWhiteSuit: "/public/image/portraitWhiteSuit.jpg",
  portraitDarkCoat: "/public/image/portraitDarkCoat.jpg",
  portraitTopDown: "/public/image/portraitTopDown.jpg",

  // Женские образы
  lookCoatRedBag: "/public/image/lookCoatRedBag.jpg",
  lookBlueShirtRedBag: "/public/image/lookBlueShirtRedBag.jpg",
  lookYellowKnitGloves: "/public/image/lookYellowKnitGloves.jpg",
  lookTweedJacketSkirt: "/public/image/lookTweedJacketSkirt.jpg",
  lookCheckBlazerCulottes: "/public/image/lookCheckBlazerCulottes.jpg",
  lookSuedeCoatMannequin: "/public/image/lookSuedeCoatMannequin.jpg",
  lookBlueTurtleneckSkirt: "/public/image/lookBlueTurtleneckSkirt.jpg",
  lookWinterPufferPink: "/public/image/lookWinterPufferPink.jpg",

  // Мужские капсулы
  mensLookCasual: "/public/image/mensLookCasual.jpg",
  mensLookClassic: "/public/image/mensLookClassic.jpg",

  // Детали, фактуры и эстетика (Moodboard)
  detailHandBagJjoir: "/public/image/detailHandBagJjoir.jpg",
  detailKnitStack: "/public/image/detailKnitStack.jpg",
  detailKinfolkBook: "/public/image/detailKinfolkBook.jpg",
  detailBurgundyBagBook: "/public/image/detailBurgundyBagBook.jpg",
  detailBoucleChairBag: "/public/image/detailBoucleChairBag.jpg",
  detailRackShirts: "/public/image/detailRackShirts.jpg",
  detailBlueHeelsConcrete: "/public/image/detailBlueHeelsConcrete.jpg",
  detailBlueBootsCream: "/public/image/detailBlueBootsCream.jpg",
  detailBurgundyMules: "/public/image/detailBurgundyMules.jpg",
  detailGreyCardiganBrooch: "/public/image/detailGreyCardiganBrooch.jpg",
  detailLatrikaBags: "/public/image/detailLatrikaBags.jpg",

  // Оригиналы отзывов и образов клиенток
  reviewStoryYellowTrench: "/public/image/clientYellowTrench.jpg",
  reviewStoryBeigeSuit: "/public/image/reviewStoryBeigeSuit.jpg",
  reviewStoryStreetFriend: "/public/image/reviewStoryStreetFriend.jpg",
  reviewStoryMensStyle: "/public/image/reviewStoryMensStyle.jpg",
  reviewStoryGoldenDress: "/public/image/reviewStoryGoldenDress.jpg",
  reviewStoryWardrobe4h: "/public/image/reviewStoryWardrobe4h.jpg",
};

export const MOOD_STRIP_DATA: MoodItem[] = [
  {
    id: "m-1",
    code: "ARCHIVE // 01",
    caption: "Тактильность: кашемир, шёлк и кожа",
    imageUrl: PHOTOS.detailKnitStack,
  },
  {
    id: "m-2",
    code: "ARCHIVE // 02",
    caption: "Форма мыса и линия брюк",
    imageUrl: PHOTOS.detailBlueHeelsConcrete,
  },
  {
    id: "m-3",
    code: "ARCHIVE // 03",
    caption: "A Life More Conscious",
    imageUrl: PHOTOS.detailKinfolkBook,
  },
  {
    id: "m-4",
    code: "ARCHIVE // 04",
    caption: "Драпировка и скульптурный металл",
    imageUrl: PHOTOS.detailGreyCardiganBrooch,
  },
  {
    id: "m-5",
    code: "ARCHIVE // 05",
    caption: "Глубокий винный и тёплый ворс",
    imageUrl: PHOTOS.detailBurgundyBagBook,
  },
  {
    id: "m-6",
    code: "ARCHIVE // 06",
    caption: "Палитра рейла: бордо и небесный",
    imageUrl: PHOTOS.detailRackShirts,
  },
];

export const WORKS_DATA: WorkItem[] = [
  {
    id: "w-1",
    index: "LOOK 01",
    title: "Скульптурное пальто с шарфом и красные акценты",
    category: "womenswear",
    categoryLabel: "Женский образ / Верхняя одежда",
    description:
      "Мягкая геометрия бежево-таупового пальто со встроенным шарфом и широкими брюками, собранная вокруг смелого дуэта красной сумки и остроносых лодочек.",
    stylistNote:
      "Красный здесь работает как доминанта, превращая спокойную базу в запоминающийся выход.",
    detailsList: [
      "Пальто сложного кроя со съёмным шарфом",
      "Широкие брюки кофейного оттенка в пол",
      "Цветовая рифма: лаконичная красная сумка и остроносые лодочки",
    ],
    imageUrl: PHOTOS.lookCoatRedBag,
    colSpanClass: "md:col-span-7",
  },
  {
    id: "w-2",
    index: "LOOK 02",
    title: "Деконструкция классики: голубая сорочка на запах",
    category: "womenswear",
    categoryLabel: "Деловой гардероб",
    description:
      "Полосатая рубашка сложного кроя с акцентной металлической пуговицей, широкие серые брюками со складками и рифма красных деталей.",
    stylistNote:
      "Одна и та же акцентная сумка и обувь легко переходят из пальто в деловой образ внутри капсулы.",
    detailsList: [
      "Асимметричная сорочка в тонкую полоску с металлической фурнитурой",
      "Костюмные серые палаццо со защипами",
      "Интеграция ярких аксессуаров в строгий дресс-код",
    ],
    imageUrl: PHOTOS.lookBlueShirtRedBag,
    colSpanClass: "md:col-span-5",
    offsetClass: "md:mt-12",
  },
  {
    id: "w-3",
    index: "LOOK 03",
    title: "Игра цвета: лимонный трикотаж, небесная кожа и бордо",
    category: "capsules",
    categoryLabel: "Сложная палитра",
    description:
      "Утончённое сочетание светлой куртки, лимонного джемпера на плечах с брошью, голубых кожаных перчаток и фактурных бордовых джинсов.",
    stylistNote:
      "Иллюстрация того, как историк моды работает с неочевидными цветовыми триадами.",
    detailsList: [
      "Цветовой треугольник: сливочно-лимонный, пыльный голубой и винный",
      "Джемпер как архитектурный шарф с акцентной брошью",
      "Мягкая скульптурная сумка-хобо",
    ],
    imageUrl: PHOTOS.lookYellowKnitGloves,
    colSpanClass: "md:col-span-5",
  },
  {
    id: "w-4",
    index: "LOOK 04",
    title: "Архитектурный жакет, голубая манжета и разрез",
    category: "womenswear",
    categoryLabel: "Шопинг-сопровождение",
    description:
      "Укороченный жакет из фактурной шерсти поверх голубой рубашки, юбка миди шоколадного оттенка и лодочки slingback.",
    stylistNote:
      "Выверенная пропорция укороченного верха и удлинённой вертикали юбки.",
    detailsList: [
      "Жакет из фактурного твида без воротника",
      "Контраст голубых манжет и глубокого коричневого тона",
      "Юбка миди с деликатным боковым разрезом",
    ],
    imageUrl: PHOTOS.lookTweedJacketSkirt,
    colSpanClass: "md:col-span-7",
    offsetClass: "md:mt-10",
  },
  {
    id: "w-5",
    index: "LOOK 05",
    title: "Мужская городская капсула: фактурное пальто и бургунди",
    category: "menswear",
    categoryLabel: "Мужской гардероб",
    description:
      "Структурное графитовое пальто, трикотаж на молнии, кожаная дорожная сумка и тонкий штрих — бордовые носки в мелкий горох.",
    stylistNote:
      "Мужской стиль строится на нюансах фактур и безупречной посадке базовых слоёв.",
    detailsList: [
      "Двубортное графитовое пальто прямого кроя",
      "Кашемировый джемпер и кардиган на молнии",
      "Акцентные детали: кожаная сумка и бордовые носки",
    ],
    imageUrl: PHOTOS.mensLookClassic,
    colSpanClass: "md:col-span-6",
  },
  {
    id: "w-6",
    index: "LOOK 06",
    title: "Мужской смарт-кэжуал: клетка, деним и функциональность",
    category: "menswear",
    categoryLabel: "Мужской гардероб",
    description:
      "Тёплая рубашка в мелкую клетку, вельветовые брюки песочного оттенка, тёмно-синий пуховик и замшевые хайкеры.",
    stylistNote:
      "Готовый конструктор в электронном лукбуке, с которым мужчина тратит минимум времени в магазине.",
    detailsList: [
      "Плотная верхняя сорочка в коричнево-бежевую клетку",
      "Базовый молочный лонгслив и песочные чиносы",
      "Практичный синий пуховик и замшевые ботинки на шнуровке",
    ],
    imageUrl: PHOTOS.mensLookCasual,
    colSpanClass: "md:col-span-6",
    offsetClass: "md:mt-12",
  },
  {
    id: "w-7",
    index: "LOOK 07",
    title: "Интеллектуальная многослойность: клетка, деним и охра",
    category: "capsules",
    categoryLabel: "Разбор гардероба",
    description:
      "Клетчатый двубортный блейзер, надетый поверх джинсовой рубашки и винной водолазки с широкими кюлотами цвета карамели.",
    stylistNote:
      "Три слоя верха создают глубину и позволяют трансформировать образ в течение дня.",
    detailsList: [
      "Сложный приём: джинсовая рубашка как промежуточный слой под жакет",
      "Винная база и карамельные широкие брюки",
      "Два варианта обуви под разное настроение дня",
    ],
    imageUrl: PHOTOS.lookCheckBlazerCulottes,
    colSpanClass: "md:col-span-4",
  },
  {
    id: "w-8",
    index: "LOOK 08",
    title: "Шоколадная замша и молочный трикотаж",
    category: "details",
    categoryLabel: "Фактуры сезона",
    description:
      "Благородный контраст матовой тёмно-коричневой замши длинного тренча и мягкого трикотажного комплекта оттенка сливочного масла.",
    stylistNote:
      "Тихая роскошь, построенная исключительно на разнице поверхностей.",
    detailsList: [
      "Длинный замшевый тренч глубокого кофейного тона",
      "Трикотажная пара молочного оттенка",
      "Фактурные ботильоны под кожу рептилии",
    ],
    imageUrl: PHOTOS.lookSuedeCoatMannequin,
    colSpanClass: "md:col-span-4",
    offsetClass: "md:mt-8",
  },
  {
    id: "w-9",
    index: "LOOK 09",
    title: "Глубокий кобальт и песочная миди",
    category: "capsules",
    categoryLabel: "Капсула на сезон",
    description:
      "Фактурная синяя водолазка в рубчик с кулоном-ключом, светлая юбка с высоким разрезом, широкий коньячный ремень и замшевые сапоги.",
    stylistNote:
      "Идеальный баланс тёплого и холодного спектра в одном силуэте.",
    detailsList: [
      "Насыщенный синий трикотаж в вертикальный рубчик",
      "Акцент на талии широким кожаным ремнём с латунной пряжкой",
      "Структурная кожаная сумка-тоут в тон ремню",
    ],
    imageUrl: PHOTOS.lookBlueTurtleneckSkirt,
    colSpanClass: "md:col-span-4",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "shopping",
    index: "01",
    title: "Шопинг-сопровождение",
    price: "60 000 ₽",
    format: "Онлайн / офлайн",
    description:
      "Подберём одежду под ваши задачи, образ жизни и бюджет. Разберёмся, какие вещи нужны, что с чем сочетать и на что обращать внимание в магазине.",
    result:
      "Вы получите помощь с выбором вещей и чёткое понимание, как вписать покупки в свой гардероб.",
    previewImg: PHOTOS.detailLatrikaBags,
  },
  {
    id: "wardrobe-audit",
    index: "02",
    title: "Разбор гардероба",
    price: "40 000 ₽",
    format: "Онлайн / офлайн",
    description:
      "Разберём вещи, которые у вас уже есть, посмотрим, какие сочетания можно собрать, чего не хватает и что стоит изменить.",
    result:
      "В результате станет понятнее, как пользоваться своим гардеробом и какие покупки действительно нужны.",
    previewImg: PHOTOS.detailRackShirts,
  },
  {
    id: "consultation",
    index: "03",
    title: "Консультация по стилю",
    price: "20 000 ₽",
    format: "Онлайн / офлайн",
    description:
      "Разбор запроса. Анализ фигуры и определение подходящих цветов и типов одежды. Обсуждаем стиль, цвета, фасоны и детали.",
    result:
      "Понимание своих сильных сторон и инструментов, которые помогают создавать нужное впечатление.",
    previewImg: PHOTOS.detailBoucleChairBag,
  },
  {
    id: "coaching",
    index: "04",
    title: "Фэшн-коучинг",
    price: "5 000 ₽ / час",
    format: "Минимум 3 коуч-сессии",
    description:
      "Для тех, кто хочет разобраться в отношениях со своим гардеробом и найти стиль, в котором будет комфортно жить и работать.",
    result:
      "Вместе исследуем, как вы хотите выглядеть, какое впечатление производить и что сейчас мешает прийти к желаемому образу.",
    previewImg: PHOTOS.detailKinfolkBook,
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "r-1",
    code: "CASE FILE // 01",
    category: "shopping",
    tag: "Шопинг как терапия",
    author: "История о жёлтом тренче (@deepstacia)",
    highlight:
      "Шопинг с Полиной стал для меня терапией, которая невероятно раскрыла меня!",
    quote:
      "«С 2019 года хотела купить себе классный тренч, но не бежевый — хотелось чего-то особенного. И вот на мне мой уютнейший жёлтый тренч! Многие страхи по поводу одежды и внешности ушли именно после работы с Полиной. Сейчас ощущаю себя на 100500% красивой и уверенной!»",
    dateNote: "Шопинг-сопровождение + Капсула",
    proofImage: PHOTOS.reviewStoryYellowTrench,
    proofCaption: "Образ @deepstacia в жёлтом тренче",
  },
  {
    id: "r-2",
    code: "CASE FILE // 02",
    category: "wardrobe",
    tag: "Лукбук на 3 года",
    author: "Клиентка о готовой системе образов",
    highlight:
      "На выбор образа уходит меньше минуты — весь результат оформлен в виде стильного лукбука.",
    quote:
      "«Нет необходимости запоминать каждый образ, что с чем носить и как надевать — всё разделено на категории. Образы собраны максимально из имеющегося гардероба, докупить нужно было минимум. Ощущение по итогу, что образов хватит года на 3!»",
    dateNote: "Разбор гардероба + Онлайн-шопинг",
    proofImage: PHOTOS.reviewStoryBeigeSuit,
    proofCaption: "Образ в бежевом костюме + отзыв",
  },
  {
    id: "r-3",
    code: "CASE FILE // 03",
    category: "shopping",
    tag: "Взгляд со стороны",
    author: "История из жизни клиента",
    highlight: "Поля, ты — знак качества! Твои клиенты выделяются из толпы.",
    quote:
      "«Еду в машине, а по тротуару идёт женщина — она даже плывёт, а не идёт... Такой на ней красивый летящий костюм, очень выделяется среди остальных. Я смотрю, аж глаз не оторвать, а потом понимаю, что это моя ближайшая подруга, которую одеваешь ты!»",
    dateNote: "Персональный стайлинг",
    proofImage: PHOTOS.reviewStoryStreetFriend,
    proofCaption: "Оригинал истории из чата Полины",
  },
  {
    id: "r-4",
    code: "CASE FILE // 04",
    category: "mens",
    tag: "Мужской гардероб",
    author: "Отзыв о мужской консультации по стилю",
    highlight:
      "Использую электронный лукбук прямо в магазине при выборе одежды — очень удобно!",
    quote:
      "«Ты провела для меня консультацию, исходя из физических характеристик моего тела и цвета кожи, очень круто подобрала цвета и луки. Очень благодарен за то, что сопроводила мои первые покупки в формате онлайн. Рекомендую друзьям!»",
    dateNote: "Мужская консультация + Онлайн-сопровождение",
    proofImage: PHOTOS.reviewStoryMensStyle,
    proofCaption: "Отзыв о мужской консультации",
  },
  {
    id: "r-5",
    code: "CASE FILE // 05",
    category: "coaching",
    tag: "Глубина и психология",
    author: "Отзыв о перевоплощении и ценностях",
    highlight:
      "Не просто собрать гардероб под цели, а помочь присвоить свою неповторимость.",
    quote:
      "«Ты не боишься выйти за рамки и предложить нетривиальные решения. Все инструкции — чётко и по делу, ты сэкономила мне массу времени, нервов и денег. Мне понравилось, что ты глубоко узнаёшь цели и ценности человека. Работа с тобой — часть психотерапии!»",
    dateNote: "Комплексная работа со стилем",
    proofImage: PHOTOS.reviewStoryGoldenDress,
    proofCaption: "Оригинал сторис на фоне золотистого платья",
  },
  {
    id: "r-6",
    code: "CASE FILE // 06",
    category: "wardrobe",
    tag: "Разбор гардероба",
    author: "Впечатления после 4-часового разбора",
    highlight:
      "Теперь факт, что у меня много одежды, не пугает, а вызывает предвкушение!",
    quote:
      "«Я как будто с подругой провела 4 часа за классной беседой — ты не давишь, не ставишь жёстких рамок, но очень бережно направляешь. Я даже не думала, что из моих вещей и обуви можно собрать столько стильных луков. Разбор меня прямо окрылил!»",
    dateNote: "Ревизия гардероба",
    proofImage: PHOTOS.reviewStoryWardrobe4h,
    proofCaption: "Сообщение после 4-часового разбора",
  },
];
