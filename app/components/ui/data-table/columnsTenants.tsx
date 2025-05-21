import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import type { Tenant } from "@/data/tenants/schema";
import { Badge } from "@/app/components/Badge";

const columnHelper = createColumnHelper<Tenant>();

export const columnsTenants: ColumnDef<Tenant, any>[] = [
  columnHelper.accessor((row) => row.name, {
    id: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => <span>{row.original.name}</span>,
    enableSorting: true,
  }),
  columnHelper.accessor((row) => row.email, {
    id: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => <span>{row.original.email}</span>,
    enableSorting: true,
  }),
  columnHelper.accessor((row) => row.phone, {
    id: "phone",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Phone" />,
    cell: ({ row }) => <span>{row.original.phone}</span>,
    enableSorting: true,
  }),
  columnHelper.accessor((row) => row.status, {
    id: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => (
      <Badge variant={row.original.status === "active" ? "success" : "default"}>
        {row.original.status.charAt(0).toUpperCase() + row.original.status.slice(1)}
      </Badge>
    ),
    enableSorting: true,
  }),
]; 