// https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
export default function RootLoading() {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
      <div className="flex flex-col items-center">
        <img src="/loading-dots.gif" alt="Loading" className="size-12" />
        <p className="animate-pulse text-sm font-medium">Just a moment...</p>
      </div>
    </div>
  )
}
