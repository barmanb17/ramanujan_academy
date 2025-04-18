import { FileText, Download, Video, FileImage, File } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StudyMaterialsCard() {
  const materials = [
    {
      id: 1,
      title: "Physics Notes - Electromagnetism",
      subject: "Physics",
      type: "pdf",
      size: "2.4 MB",
      date: "Apr 15, 2023",
    },
    {
      id: 2,
      title: "Organic Chemistry Formulas",
      subject: "Chemistry",
      type: "pdf",
      size: "1.8 MB",
      date: "Apr 12, 2023",
    },
    {
      id: 3,
      title: "Calculus Video Lecture",
      subject: "Mathematics",
      type: "video",
      size: "45 MB",
      date: "Apr 10, 2023",
    },
    {
      id: 4,
      title: "Biology Diagrams",
      subject: "Biology",
      type: "image",
      size: "5.2 MB",
      date: "Apr 8, 2023",
    },
    {
      id: 5,
      title: "English Literature Notes",
      subject: "English",
      type: "doc",
      size: "1.1 MB",
      date: "Apr 5, 2023",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />
      case "video":
        return <Video className="h-5 w-5 text-blue-500" />
      case "image":
        return <FileImage className="h-5 w-5 text-green-500" />
      case "doc":
        return <File className="h-5 w-5 text-yellow-500" />
      default:
        return <File className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-4">
      {materials.map((material) => (
        <div key={material.id} className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50">
          <div className="flex items-center space-x-4">
            <div>{getIcon(material.type)}</div>
            <div>
              <p className="font-medium">{material.title}</p>
              <div className="flex space-x-4 text-xs text-gray-500">
                <span>{material.subject}</span>
                <span>{material.size}</span>
                <span>{material.date}</span>
              </div>
            </div>
          </div>
          <Button size="sm" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}
