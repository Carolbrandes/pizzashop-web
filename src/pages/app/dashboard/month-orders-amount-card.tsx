import { Utensils } from "lucide-react";

import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ["metrics", "month-orders-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedido (mês)</CardTitle>

        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <p className="text-xs text-muted-foreground">
          {monthOrdersAmount && (
            <>
              <span className="text-2xl font-bold tracking-tight">
                {monthOrdersAmount.amount.toLocaleString("pt-BR")}
              </span>
              <p className="text-xs text-muted-foreground">
                {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                  <>
                    <span className="text-emerald-500 dark:text-emerald-400">
                      +{monthOrdersAmount.diffFromLastMonth}%
                    </span>{" "}
                    em relação ao mês passado
                  </>
                ) : (
                  <>
                    <span className="text-rose-500 dark:text-rose-400">
                      {monthOrdersAmount.diffFromLastMonth}%
                    </span>{" "}
                    em relação ao mês passado{" "}
                  </>
                )}
              </p>
            </>
          )}
        </p>
      </CardContent>
    </Card>
  );
}
