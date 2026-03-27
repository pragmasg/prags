import { useTranslations } from 'next-intl';

export default function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { value: t('v1'), label: t('v1label') },
    { value: t('v2'), label: t('v2label') },
    { value: t('v3'), label: t('v3label') },
    { value: t('v4'), label: t('v4label') },
  ];

  return (
    <section className="bg-[#0A0A0A] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col px-8 py-8 ${
                index < stats.length - 1 ? 'md:border-r border-white/10' : ''
              } ${index < 2 ? 'border-b md:border-b-0 border-white/10' : ''}`}
            >
              <span className="text-4xl text-[#00D4AA] mb-3">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
