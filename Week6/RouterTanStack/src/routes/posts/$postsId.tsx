import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postsId')({
  component: RouteComponent,
  loader:async ({params}) =>{
    // throw new Error();
    await new Promise((resolve)=>setTimeout(resolve,2000));//added this just to make the feel like we are fetching data from server
    return {
      postId:params.postsId,
    };
  },
  pendingComponent: () => <div>Loading...</div>,
  // errorComponent:() => <div>Error</div>
})

function RouteComponent() {
  const {postId} = Route.useLoaderData();
  return <div>Hello "{postId}"!</div>
}
