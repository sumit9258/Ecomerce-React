function Loading() {
    
    return(
        <>
          <div className="flex items-center justify-center h-screen w-full">
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce animation-delay-0"></span>
        <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce animation-delay-200"></span>
        <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce animation-delay-400"></span>
      </div>
    </div>
        </>
    )

}

export default Loading;