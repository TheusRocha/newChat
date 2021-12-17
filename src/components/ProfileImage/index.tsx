import * as S from './styles'

interface ProfileImageProps {
  size?: number
  src: string
}

const ProfileImage = ({ size = 32, src }: ProfileImageProps) => {
  return (
    <S.Wrapper $size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C17.4979 32 18.9478 31.7942 20.3229 31.4092C19.5 30 18.9995 28.7977 19 27C19.0012 22.5817 22.5817 19.0004 27 19C28.7977 18.9998 30 19.5 31.4089 20.3239C31.794 18.9485 32 17.4983 32 16C32 7.16344 24.8366 0 16 0Z"
          fill="url(#pattern0)"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_140_2" transform="scale(0.015625)" />
          </pattern>
          <image id="image0_140_2" width="64" height="64" xlinkHref={src} />
        </defs>
      </svg>
    </S.Wrapper>
  )
}

export default ProfileImage
