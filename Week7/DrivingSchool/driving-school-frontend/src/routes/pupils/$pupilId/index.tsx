import { createFileRoute } from '@tanstack/react-router'
import PupilView from '@/pages/pupils/PupilView'


export const Route = createFileRoute('/pupils/$pupilId/')({
  component: PupilView,
})

