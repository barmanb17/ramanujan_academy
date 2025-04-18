import { Bell, FileText, Calendar, User } from "lucide-react"

export default function NotificationsCard() {
  const notifications = [
    {
      id: 1,
      title: "Physics Test Scheduled",
      description: "A test on Electromagnetism has been scheduled for next Monday.",
      time: "2 hours ago",
      type: "test",
    },
    {
      id: 2,
      title: "New Study Material Available",
      description: "Chemistry notes on Organic Chemistry have been uploaded.",
      time: "Yesterday",
      type: "material",
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      description: "PTM scheduled for this Saturday, 10:00 AM to 1:00 PM.",
      time: "2 days ago",
      type: "event",
    },
    {
      id: 4,
      title: "Fee Payment Reminder",
      description: "Please clear your pending fees for the current semester.",
      time: "3 days ago",
      type: "admin",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "test":
        return <FileText className="h-5 w-5 text-red-500" />
      case "material":
        return <FileText className="h-5 w-5 text-green-500" />
      case "event":
        return <Calendar className="h-5 w-5 text-blue-500" />
      case "admin":
        return <User className="h-5 w-5 text-yellow-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div key={notification.id} className="flex space-x-4 rounded-lg border p-3 hover:bg-gray-50">
          <div className="mt-0.5">{getIcon(notification.type)}</div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{notification.title}</p>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-sm text-gray-700">{notification.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
