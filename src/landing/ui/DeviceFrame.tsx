type DeviceFrameVariant = 'lead' | 'demo' | 'hero' | 'card'

type DeviceFrameProps = {
  src: string
  alt: string
  variant?: DeviceFrameVariant
  loading?: 'lazy' | 'eager'
  className?: string
}

export function DeviceFrame({
  src,
  alt,
  variant = 'lead',
  loading = 'lazy',
  className = '',
}: DeviceFrameProps) {
  return (
    <div
      className={`device-frame device-frame--media device-frame--${variant} ${className}`.trim()}
    >
      <div className="device-bezel" aria-hidden="true" />
      <div className="device-screen device-screen--media">
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className="device-img"
        />
      </div>
    </div>
  )
}
