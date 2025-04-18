import { Clock, Video, MapPin } from "lucide-react"

export default function UpcomingClassesCard() {
  const classes = [
    {
      id: 1,
      subject: "Physics",
      topic: "Electromagnetism",
      time: "9:00 AM - 10:30 AM",
      date: "Today",
      teacher: "Dr. Rajesh Kumar",
      location: "Room 101",
      isOnline: false,
    },
    {
      id: 2,
      subject: "Chemistry",
      topic: "Organic Chemistry",
      time: "11:00 AM - 12:30 PM",
      date: "Today",
      teacher: "Dr. Sunil Verma",
      location: "Zoom Meeting",
      isOnline: true,
    },
    {
      id: 3,
      subject: "Mathematics",
      topic: "Calculus",
      time: "9:00 AM - 10:30 AM",
      date: "Tomorrow",
      teacher: "Prof. Anita Sharma",
      location: "Room 203",
      isOnline: false,
    },
  ]

  return (
    <div className="space-y-4">
      {classes.map((classItem) => (
        <div key={classItem.id} className="flex flex-col space-y-2 rounded-lg border p-3 hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="font-medium">{classItem.subject}</div>
            <div className="text-xs text-gray-500">{classItem.date}</div>
          </div>
          <div className="text-sm text-gray-700">{classItem.topic}</div>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="mr-1 h-3 w-3" />
            {classItem.time}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            {classItem.isOnline ? <Video className="mr-1 h-3 w-3" /> : <MapPin className="mr-1 h-3 w-3" />}
            {classItem.location}
          </div>
          <div className="text-xs text-gray-500">Teacher: {classItem.teacher}</div>
        </div>
      ))}
    </div>
  )
}
