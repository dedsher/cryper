const Container = ({ className, children }: { className: string, children: React.ReactNode }) => {
  return (
    <div className={`px-[60px] max-w-[1400px] mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container