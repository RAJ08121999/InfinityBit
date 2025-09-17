import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { Pupil } from "@/lib/pupilSchema"

interface PupilViewProps{
  pupil:Pupil
}

const PupilView = ({pupil}:PupilViewProps) => {
  return (
    <div className="max-w-xl mx-auto p-6">

      <Card>

        <CardHeader>
          <CardTitle>{pupil.forename} {pupil.surname} </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <p><strong>Date of Birth:</strong> {pupil.dob}</p>
          <p><strong>Gender:</strong> {pupil.gender}</p>
          <p><strong>Email:</strong> {pupil.email || "N/A"}</p>
          <p><strong>Mobile:</strong> {pupil.home?.mobile || "N/A"}</p>
          <p><strong>Work:</strong> {pupil.home?.work || "N/A"}</p>
          <p><strong>License Type:</strong> {pupil.licenseType}</p>
        </CardContent>

      </Card>

    </div>
  )
}

export default PupilView
