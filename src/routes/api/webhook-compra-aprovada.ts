import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/webhook-compra-aprovada')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/api/webhook-compra-aprovada"!</div>
}
