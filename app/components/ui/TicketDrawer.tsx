"use client"
import { useState } from "react"
import { Button } from "../Button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../Drawer"
import { Input } from "../Input"
import { Label } from "../Label"
import { Textarea } from "../Textarea"

interface TicketDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TicketDrawer({ open, onOpenChange }: TicketDrawerProps) {
  // Example state for a maintenance request
  const [form, setForm] = useState({
    type: "maintenance", // or "issue", etc.
    category: "",
    description: "",
    property: "",
    priority: "normal",
    contact: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    // Submit logic here (API call, etc.)
    onOpenChange(false)
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="sm:max-w-lg">
        <DrawerHeader>
          <DrawerTitle>
            <p>Submit Maintenance Request</p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-500">
              Fill out the details below to request maintenance or report an issue.
            </span>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody className="space-y-6 border-t border-gray-200 px-6 dark:border-gray-800">
          <div>
            <Label htmlFor="property" className="font-medium">Property</Label>
            <Input
              id="property"
              name="property"
              value={form.property}
              onChange={handleChange}
              placeholder="e.g. 123 Main St, Apt 4B"
            />
          </div>
          <div>
            <Label htmlFor="category" className="font-medium">Category</Label>
            <Input
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="e.g. Plumbing, Electrical"
            />
          </div>
          <div>
            <Label htmlFor="priority" className="font-medium">Priority</Label>
            <Input
              id="priority"
              name="priority"
              value={form.priority}
              onChange={handleChange}
              placeholder="e.g. Low, Normal, High"
            />
          </div>
          <div>
            <Label htmlFor="description" className="font-medium">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the issue or request in detail..."
              className="h-32"
            />
          </div>
          <div>
            <Label htmlFor="contact" className="font-medium">Contact Info</Label>
            <Input
              id="contact"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Your email or phone"
            />
          </div>
        </DrawerBody>
        <DrawerFooter className="gap-2 px-6">
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
          <Button onClick={handleSubmit}>Submit Request</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
