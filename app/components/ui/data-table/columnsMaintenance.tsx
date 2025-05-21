import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import type { MaintenanceData } from "@/data/maintenance/schema";
import { Badge } from "@/app/components/Badge";

const columnHelper = createColumnHelper<MaintenanceData>();

export const columnsMaintenance: ColumnDef<MaintenanceData, any>[] = [
  columnHelper.accessor((row) => row.description, {
    id: "description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <span>{row.original.description}</span>,
    enableSorting: true,
  }),
  columnHelper.accessor((row) => row.status, {
    id: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.status === "open"
            ? "warning"
            : row.original.status === "in_progress"
            ? "default"
            : "success"
        }
      >
        {row.original.status.replace("_", " ").toUpperCase()}
      </Badge>
    ),
    enableSorting: true,
  }),
  columnHelper.accessor((row) => row.createdAt, {
    id: "createdAt",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Created" />,
    cell: ({ row }) => <span>{new Date(row.original.createdAt).toLocaleDateString()}</span>,
    enableSorting: true,
  }),
]; 