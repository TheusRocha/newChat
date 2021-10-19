import React, { useEffect, useRef } from 'react'
import ReactContentEditable, { Props } from 'react-contenteditable'

export default function ContentEditable({
  onChange,
  onInput,
  onBlur,
  onKeyPress,
  onKeyDown,
  ...props
}: Props) {
  const onChangeRef = useRef(onChange)
  const onInputRef = useRef(onInput)
  const onBlurRef = useRef(onBlur)
  const onKeyPressRef = useRef(onKeyPress)
  const onKeyDownRef = useRef(onKeyDown)

  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])
  useEffect(() => {
    onInputRef.current = onInput
  }, [onInput])
  useEffect(() => {
    onBlurRef.current = onBlur
  }, [onBlur])
  useEffect(() => {
    onKeyPressRef.current = onKeyPress
  }, [onKeyPress])
  useEffect(() => {
    onKeyDownRef.current = onKeyDown
  }, [onKeyDown])

  return (
    <ReactContentEditable
      {...props}
      onChange={
        onChange
          ? (...args) => {
              if (onChangeRef.current) {
                onChangeRef.current(...args)
              }
            }
          : undefined
      }
      onInput={
        onInput
          ? (...args) => {
              if (onInputRef.current) {
                onInputRef.current(...args)
              }
            }
          : undefined
      }
      onBlur={
        onBlur
          ? (...args) => {
              if (onBlurRef.current) {
                onBlurRef.current(...args)
              }
            }
          : undefined
      }
      onKeyPress={
        onKeyPress
          ? (...args) => {
              if (onKeyPressRef.current) {
                onKeyPressRef.current(...args)
              }
            }
          : undefined
      }
      onKeyDown={
        onKeyDown
          ? (...args) => {
              if (onKeyDownRef.current) {
                onKeyDownRef.current(...args)
              }
            }
          : undefined
      }
    />
  )
}
