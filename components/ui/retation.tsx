"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A compact line chart with dots"

const chartData = [
  { month: "January", desktop: 16, mobile: 80 },
  { month: "February", desktop: 35, mobile: 20 },
  { month: "March", desktop: 27, mobile: 12 },
  { month: "April", desktop: 73, mobile: 19 },
  { month: "May", desktop: 20, mobile: 13 },
  { month: "June", desktop: 24, mobile: 14 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function Retation() {
  return (
    <Card className="p-3 ">
      <CardHeader className="pb-1">
        <CardTitle className="text-base">Visitors Trend</CardTitle>
        <CardDescription className="text-xs">Jan - Jun 2024</CardDescription>
      </CardHeader>
      <CardContent className="h-[160px] pt-1">
        <ChartContainer config={chartConfig} className="w-[100%] h-50">
          <LineChart
            data={chartData}
            height={140}
            margin={{ left: 8, right: 8, top: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line

              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{ fill: "var(--color-desktop)", r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 text-xs pt-1">
        <div className="flex items-center gap-1 font-medium">
          <span>Trending up by 5.2%</span>
          <TrendingUp className="h-3 w-3" />
        </div>
        <div className="text-muted-foreground">Last 6 months data</div>
      </CardFooter>
    </Card>
  )
}
