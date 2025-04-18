import { Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MessagingCard() {
  const messages = [
    {
      id: 1,
      sender: "Rahul Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "RS",
      message: "Sir, I had a doubt regarding the wave optics problem from yesterday's class.",
      time: "10 mins ago",
      unread: true,
    },
    {
      id: 2,
      sender: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PP",
      message: "Thank you for the additional study materials. They were very helpful.",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      sender: "Amit Kumar",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AK",
      message: "Sir, I will not be able to attend tomorrow's class due to a medical appointment.",
      time: "3 hours ago",
      unread: false,
    },
    {
      id: 4,
      sender: "Dr. Meena Gupta",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MG",
      message: "Can we discuss the upcoming practical exam schedule during lunch?",
      time: "Yesterday",
      unread: false,
    },
  ]

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex space-x-4 rounded-lg border p-3 ${message.unread ? "bg-blue-50" : "hover:bg-gray-50"}`}
        >
          <Avatar>
            <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
            <AvatarFallback>{message.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{message.sender}</p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="mr-1 h-3 w-3" />
                {message.time}
              </div>
            </div>
            <p className="text-sm text-gray-700">{message.message}</p>
          </div>
          {message.unread && <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />}
        </div>
      ))}
    </div>
  )
}
