import Image from 'next/image'
import { CSSProperties, useEffect, useState } from 'react'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react'

interface SliderProps {
  images: string[]
}

export default function Slider({ images }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [$transform, setTransform] = useState<CSSProperties>({
    transform: 'translateX(0)'
  })

  const goToNextSlide = () => {
    if (currentSlide < images.length - 1)
      setCurrentSlide(currentSlide + 1)
    else
      setCurrentSlide(0)
  }

  const goToPreviousSlide = () => {
    if (currentSlide > 0)
      setCurrentSlide(currentSlide - 1)
    else
      setCurrentSlide(images.length - 1)
  }

  const calculateTransform = (value: number) => {
    setTransform({
      transform: `translateX(-${value * 100}%)`
    })
  }

  useEffect(() => {
    calculateTransform(currentSlide)
  }, [currentSlide])

  return <div style={$container}>
    <div style={$slider}>
      {
        images.map((image, idx) => (
          <figure key={idx} style={{ ...$imageWrapper, ...$transform }}>
            <Image src={image} width={1000} height={500} alt="Shoes" />
          </figure>
        ))
      }
    </div>
    <div className={$actions}>
      <button className={$buttonAction} onClick={goToPreviousSlide}>
        <IconArrowLeft />
      </button>
      <button className={$buttonAction} onClick={goToNextSlide}>
        <IconArrowRight />
      </button>
    </div>
  </div>
}

const $container: CSSProperties = {
  width: '100%',
  overflow: 'hidden'
}

const $slider: CSSProperties = {
  display: 'flex',
  width: '300%',
}

const $imageWrapper: CSSProperties = {
  width: '100%',
  transition: 'transform 0.5s ease'
}

const $actions = 'flex justify-between mt-4'
const $buttonAction = 'btn btn-info btn-outline'