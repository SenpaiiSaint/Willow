"use client";

import { Badge } from "@/app/components/Badge";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import type { Property } from "@/data/properties/schema";

const columnHelper = createColumnHelper<Property>();

export const columns: ColumnDef<Property, any>[] = [
  columnHelper.accessor((row) => row.name, {
    id: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Property Name" />
    ),
    cell: ({ row }) => <span className="font-medium">{row.original.name}</span>,
    enableSorting: true,
    meta: { className: "text-left", displayName: "Property Name" },
  }),
  columnHelper.accessor((row) => row.address, {
    id: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => <span>{row.original.address}</span>,
    enableSorting: true,
    meta: { className: "text-left", displayName: "Address" },
  }),
  columnHelper.accessor((row) => row.owner, {
    id: "owner",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Owner" />
    ),
    cell: ({ row }) => <span>{row.original.owner}</span>,
    enableSorting: true,
    meta: { className: "text-left", displayName: "Owner" },
  }),
  columnHelper.accessor((row) => row.units, {
    id: "units",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Units" />
    ),
    cell: ({ row }) => <span>{row.original.units}</span>,
    enableSorting: true,
    meta: { className: "text-left", displayName: "Units" },
  }),
  columnHelper.accessor((row) => row.status, {
    id: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.status === "occupied"
            ? "success"
            : row.original.status === "vacant"
            ? "default"
            : "warning"
        }
      >
        {row.original.status.charAt(0).toUpperCase() +
          row.original.status.slice(1)}
      </Badge>
    ),
    enableSorting: true,
    meta: { className: "text-left", displayName: "Status" },
  }),
];
