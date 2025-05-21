import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import type { FinancialData } from "@/data/financials/schema";
import { Badge } from "@/app/components/Badge";

const columnHelper = createColumnHelper<FinancialData>();

export const columnsFinancials: ColumnDef<FinancialData, any>[] = [
  columnHelper.accessor((row) => row.type, {
    id: "type",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
    cell: ({ row }) => (
      <Badge variant={row.original.type === "rent" ? "success" : "warning"}>
        {row.original.type.charAt(0).toUpperCase() + row.original.type.slice(1)}
      </Badge>
    ),
    enableSorting: true,
  }),
  columnHelper.accessor((row) => row.amount, {
    id: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    cell: ({ row }) => <span>${row.original.amount}</span>,
    enableSorting: true,
  }),
  columnHelper.accessor((row) => row.date, {
    id: "date",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
    cell: ({ row }) => <span>{new Date(row.original.date).toLocaleDateString()}</span>,
    enableSorting: true,
  }),
  columnHelper.accessor((row) => row.description, {
    id: "description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <span>{row.original.description}</span>,
    enableSorting: false,
  }),
]; 