import Skeleton from 'react-loading-skeleton';

// @ts-ignore TSC is somehow complain about the wrong path but this path actually works
import tailwindConfig from '@../../../tailwind.config.ts';
import resolveConfig from 'tailwindcss/resolveConfig';

type ThemeColor = string | undefined;

const LoadingSkeleton = () => {
  const fullConfig = resolveConfig(tailwindConfig);

  // Need to do a quick type casting here as the returned type from `resolveConfig()`
  // is not compatible with Skeleton's baseColor and highlightColor types
  const baseColor = fullConfig.theme?.colors?.black as ThemeColor;
  const highlightColor = fullConfig.theme?.colors?.darkBlack as ThemeColor;

  return (
    <div className="flex flex-wrap gap-7">
      {Array(8)
        .fill(null)
        .map((_, idx) => {
          return (
            <div
              key={idx}
              className="min-w-[144px] xs:min-w-[calc(50%-theme(gap.7))] sm:min-w-[calc(33%-theme(gap.7))] md:min-w-[calc(25%-theme(gap.7))] gap-4 overflow-hidden"
            >
              <div className="p-6 rounded-xl bg-dark-black">
                <Skeleton
                  count={8}
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default LoadingSkeleton;
