interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({
  value,
  label,
  showPercentage = true,
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className="space-y-2">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-white/60 text-sm">{label}</span>
          )}
          {showPercentage && (
            <span className="text-white font-medium text-sm">
              {Math.round(clampedValue)}%
            </span>
          )}
        </div>
      )}
      <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
        <div
          className="h-full gradient-bg rounded-full transition-all duration-500 ease-out"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
