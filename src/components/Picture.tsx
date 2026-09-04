import { webpOf } from '../lib/assets'

type PictureProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  decoding?: 'async' | 'sync' | 'auto'
  draggable?: boolean
}

export default function Picture({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  draggable,
}: PictureProps) {
  const webp = webpOf(src)

  return (
    <picture className="contents">
      {webp && <source srcSet={webp} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        draggable={draggable}
      />
    </picture>
  )
}
