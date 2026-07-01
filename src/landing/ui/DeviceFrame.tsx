type DeviceFrameVariant = 'lead' | 'demo' | 'hero' | 'card'

type DeviceFrameProps = {
  src: string
  alt: string
  variant?: DeviceFrameVariant
  loading?: 'lazy' | 'eager'
  className?: string
  staticLabel?: boolean
}

export function DeviceFrame({
  src,
  alt,
  variant = 'lead',
  loading = 'lazy',
  className = '',
  staticLabel = false,
}: DeviceFrameProps) {
  return (
    <div
      className={`device-frame device-frame--media device-frame--${variant} ${staticLabel ? 'device-frame--static-label' : ''} ${className}`.trim()}
    >
      {staticLabel && (
        <span className="device-frame-static-badge" aria-hidden="true">
          Static screenshot
        </span>
      )}
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
