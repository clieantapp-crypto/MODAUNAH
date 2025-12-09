export function AdSpace({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50 ${className}`}
    >
      <div className="text-center p-8">
        <p className="text-sm font-medium text-muted-foreground">Advertisement</p>
        <p className="text-xs text-muted-foreground mt-1">Google Ads Placement</p>
      </div>
    </div>
  )
}
