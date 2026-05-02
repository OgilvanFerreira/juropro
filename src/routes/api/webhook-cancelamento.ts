import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/webhook-cancelamento')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/api/webhook-cancelamento"!</div>
}
