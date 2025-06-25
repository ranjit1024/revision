"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "An area chart with gradient fill"

const chartData = [
  { revison: "Rev1", score: 100,  },
  { revison: "Rev1", score: 100,  },
  { revison: "Rev1", score: 100,  },
  { revison: "Rev1", score: 50,  },
  { revison: "Rev1", score: 70,  },
 

]

const chartConfig = {
  score: {
    label: "score",
    color: "blue",
  },
} satisfies ChartConfig

export function Retation() {
  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Last 5 Revison Session</CardTitle>
        <CardDescription>
          Showing total score in last 5 revison session
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              
              top:20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="revison"
              tickLine={false}
              axisLine={false}
              height={300}
              tickMargin={5}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-score)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-score)"
                  stopOpacity={0.3}
                />
              </linearGradient>
      
            </defs>
      
            <Area
              dataKey="score"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.5}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
