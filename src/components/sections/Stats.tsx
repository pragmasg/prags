import { useTranslations } from 'next-intl';

export default function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { value: t('clients'), label: t('clientsLabel') },
    { value: t('retention'), label: t('retentionLabel') },
    { value: t('savings'), label: t('savingsLabel') },
    { value: t('support'), label: t('supportLabel') },
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
              <span
                className="text-4xl text-white mb-3"
                style={{ fontFamily: 'var(--font-serif, "DM Serif Display", serif)' }}
              >
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
