const advantages = [
  { icon: "⚡", title: "Скорость монтажа", desc: "Полный цикл работ — от подготовки до засыпки — занимает 3–7 дней" },
  { icon: "💪", title: "Несущая способность ×2–3", desc: "Значительный рост прочности по поперечной силе и изгибающему моменту" },
  { icon: "📐", title: "Минимальный габарит", desc: "Толщина системы CFRP — от 1 до 5 мм. Геометрия фундамента не меняется" },
  { icon: "🔩", title: "Без сварки и техники", desc: "Не нужны сварочные агрегаты, краны или вибропогружатели" },
  { icon: "🛡️", title: "Долговечность 50+ лет", desc: "Углеродное волокно не ржавеет и не деградирует при правильной защите" },
  { icon: "📊", title: "Проектный расчёт", desc: "Разработка проекта усиления по 1-й и 2-й группам предельных состояний" },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/9b7b1f15-7a32-4aad-9610-01094eae2475/files/7cc63b56-3689-4c4c-8c9e-c5c3b9d4b931.jpg"
          alt="Усиление фундамента CFRP лентой"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему CFRP — лучший выбор</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
          Углеродные ленты решают задачи, с которыми не справляются традиционные методы — быстро, точно и без остановки здания.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {advantages.map((adv) => (
            <div key={adv.title} className="flex gap-3 items-start">
              <span className="text-2xl">{adv.icon}</span>
              <div>
                <div className="font-semibold text-neutral-900 text-sm uppercase tracking-wide mb-1">{adv.title}</div>
                <div className="text-neutral-500 text-sm leading-snug">{adv.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать обследование
        </button>
      </div>
    </div>
  );
}