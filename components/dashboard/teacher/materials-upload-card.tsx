import { FileText, Download, Video, FileImage, File, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MaterialsUploadCard() {
  const materials = [
    {
      id: 1,
      title: "Physics Notes - Electromagnetism",
      class: "XII-A, XII-B",
      type: "pdf",
      size: "2.4 MB",
      date: "Apr 15, 2023",
    },
    {
      id: 2,
      title: "Wave Optics Presentation",
      class: "XII-C",
      type: "ppt",
      size: "5.8 MB",
      date: "Apr 12, 2023",
    },
    {
      id: 3,
      title: "Mechanics Video Lecture",
      class: "XII-A, XII-B, XII-C",
      type: "video",
      size: "45 MB",
      date: "Apr 10, 2023",
    },
    {
      id: 4,
      title: "Physics Diagrams",
      class: "XII-A, XII-B, XII-C, XII-D",
      type: "image",
      size: "5.2 MB",
      date: "Apr 8, 2023",
    },
    {
      id: 5,
      title: "Practice Problems - Thermodynamics",
      class: "XII-D",
      type: "doc",
      size: "1.1 MB",
      date: "Apr 5, 2023",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />
      case "ppt":
        return <FileText className="h-5 w-5 text-orange-500" />
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
      <Button className="w-full bg-blue-600 hover:bg-blue-700">
        <Upload className="mr-2 h-4 w-4" />
        Upload New Material
      </Button>

      <div className="space-y-4">
        {materials.map((material) => (
          <div key={material.id} className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div>{getIcon(material.type)}</div>
              <div>
                <p className="font-medium">{material.title}</p>
                <div className="flex space-x-4 text-xs text-gray-500">
                  <span>Classes: {material.class}</span>
                  <span>{material.size}</span>
                  <span>{material.date}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost">
                <Download className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
