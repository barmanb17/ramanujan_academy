import * as React from "react"
import { cn } from "@/lib/utils"

const Chart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div className={cn("rounded-md border", className)} ref={ref} {...props} />
})
Chart.displayName = "Chart"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { data: any[]; tooltip?: React.ReactNode; legend?: React.ReactNode }
>(({ className, data, tooltip, legend, ...props }, ref) => {
  return (
    <div className={cn("relative", className)} ref={ref} {...props}>
      {tooltip}
      {legend}
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cn("absolute z-10 hidden", className)} ref={ref} {...props} />
  },
)
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cn("bg-popover text-popover-foreground shadow-md", className)} ref={ref} {...props} />
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("absolute bottom-0 left-0 flex items-center justify-center w-full", className)}
        ref={ref}
        {...props}
      />
    )
  },
)
ChartLegend.displayName = "ChartLegend"

const ChartLegendItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cn("flex items-center space-x-2", className)} ref={ref} {...props} />
  },
)
ChartLegendItem.displayName = "ChartLegendItem"

const ChartLegendItemLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return <span className={cn("text-sm text-muted-foreground", className)} ref={ref} {...props} />
  },
)
ChartLegendItemLabel.displayName = "ChartLegendItemLabel"

const ChartLegendItemValue = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return <span className={cn("ml-auto font-medium", className)} ref={ref} {...props} />
  },
)
ChartLegendItemValue.displayName = "ChartLegendItemValue"

const ChartLegendItemColor = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return <span className={cn("block h-4 w-4 rounded-full", className)} ref={ref} {...props} />
  },
)
ChartLegendItemColor.displayName = "ChartLegendItemColor"

export {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartLegendItemLabel,
  ChartLegendItemValue,
  ChartLegendItemColor,
}
