export type Workspace = {
  type: "hot-desk" | "dedicated-desk" | "private-office" | "meeting-rooms" | "virtual-office"
  label: string;
}

export const workspaces: Record<string, Workspace> = {
  "hot-desk": { type: "hot-desk", label: "Hot Desk" },
  "dedicated-desk": { type: "dedicated-desk", label: "Dedicated Desk" },
  "private-office": { type: "private-office", label: "Private Office" },
  "meeting-rooms": { type: "meeting-rooms", label: "Meeting Rooms" },
  "virtual-office": { type: "virtual-office", label: "Virtual Office" },
}
